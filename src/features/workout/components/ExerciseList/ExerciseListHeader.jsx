import {toTitle} from "@/utils/formatter.js";

const ExerciseListHeader = ({type, routine, hasExercises}) => {
    return (
        <div className="flex-space-between">
            <h3>
                {hasExercises ? (
                    <>{toTitle(type)} ({routine.exercises[type].set.length})</>
                ) : (
                    <>{toTitle(type)} (0)</>
                )}
            </h3>

            <p>
                <strong>
                    {routine.exercises[type].duration}
                </strong> minutes
            </p>
        </div>
    )
}

export default ExerciseListHeader;