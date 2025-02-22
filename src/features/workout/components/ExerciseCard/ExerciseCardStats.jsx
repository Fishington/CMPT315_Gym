const ExerciseCardStats = ({matchedExercise, type, exercise}) => {
    return (
        <div className="exercise-card__stats">
            {type === 'exercises' ? (
                <>
                    <div>
                        <p>{exercise.reps} reps x {exercise.sets} sets</p>
                    </div>

                    <div>
                        <p>{matchedExercise.timePerSet} minutes</p>
                    </div>
                </>
            ) : (
                <div>
                    <p>{matchedExercise.stretchPerSide} seconds {matchedExercise.stretchBothSide ? ` each ${matchedExercise.stretchFocus}` : ''}</p>
                </div>
            )}

            <div>
                <p>{((matchedExercise.caloriesMin + matchedExercise.caloriesMax) / 2).toFixed(0)} cals</p>
            </div>
        </div>
    )
}

export default ExerciseCardStats;