import {formatTimeToString, toTitle} from "@/utils/formatter.js";

const ExerciseOrderHeader = ({type, routine, hasExercises}) => {
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
                    {formatTimeToString(routine.exercises[type].duration)}
                </strong>
            </p>
        </div>
    )
}

export default ExerciseOrderHeader;