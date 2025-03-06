import ExerciseCard from "@/features/workout/components/ExerciseCard";

const ExerciseOrderSection = ({type, routine}) => {
    return (
        <>
            <ul className="grid gap-1">
                {routine.exercises[type].set.map((exercise, index) => (
                    <ExerciseCard
                        key={index}
                        index={index}
                        type={type}
                        exercise={exercise}
                    />
                ))}
            </ul>
        </>
    )
}

export default ExerciseOrderSection;