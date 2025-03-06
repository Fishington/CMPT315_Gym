import {formatTimeToString} from "@/utils/formatter.js";

const ExerciseCardStats = ({exercise}) => {

    return (
        <div className="exercise-card__stats">
            <div><p>{exercise.reps} reps x {exercise.sets} sets</p></div>
            <div><p>{formatTimeToString(exercise.duration)}</p></div>
            <div><p>{exercise.calories.min} - {exercise.calories.max} cals</p></div>
        </div>
    )
}

export default ExerciseCardStats;