export const fetchExercises = async () => {
    try {
        const response = await fetch(`http://localhost:3000/exercises`);

        if (!response.ok) {
            console.error(`Status: ${response.status}`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching exercises:', error);
        return null;
    }
};

export const fetchExerciseById = async (id) => {
    try {
        const response = await fetch(`http://localhost:3000/exercises/${id}`);

        if (!response.ok) {
            console.error(`Status: ${response.status} - Exercise not found`);
            return null;
        }

        return await response.json();
    } catch (error) {
        console.error('Error fetching exercise by ID:', error);
        return null;
    }
};

export const createMultiExercise = async (exercises) => {
    const controller = new AbortController();
    const signal = controller.signal;

    try {
        const promises = exercises.map((exercise) =>
            fetch(`http://localhost:3000/exercises`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(exercise),
                signal,
            })
        );

        const responses = await Promise.all(promises);

        for (const response of responses) {
            if (!response.ok) {
                console.error(`Failed to create exercise. Status: ${response.status}`);
                controller.abort(); // Abort all remaining requests
                return null;
            }
        }

        return await Promise.all(responses.map((res) => res.json()));
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Transaction aborted due to a failure in one of the requests.');
        } else {
            console.error('Error creating multiple exercises:', error);
        }
        return null;
    }
};

export const createMultiExerciseSessionBased = async (exercises) => {
    const client = new MongoClient(uri);

    try {
        await client.connect();
        const db = client.db(dbName);
        const collection = db.collection('exercises');

        const session = client.startSession();

        let result;
        await session.withTransaction(async () => {
            // Insert each exercise as part of the transaction
            result = await Promise.all(
                exercises.map((exercise) =>
                    collection.insertOne(exercise, { session })
                )
            );
        });

        return result; // Return the result of the transaction
    } catch (error) {
        console.error('Error creating multiple exercises with transaction:', error);
        return null;
    } finally {
        await client.close();
    }
};
