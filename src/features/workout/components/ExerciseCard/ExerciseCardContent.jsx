import ExerciseCardStats from './ExerciseCardStats.jsx';

const ExerciseCardContent = ({exercise, matchedExercise, type}) => {
    return (
        <div className="exercise-card__content">
            <img className="exercise-card__image" src={matchedExercise.image} alt=""/>

            <div className="exercise-card__details">
                <h3 className="exercise-card__name">{matchedExercise.name}</h3>

                <ExerciseCardStats
                    matchedExercise={matchedExercise}
                    type={type}
                    exercise={exercise}
                />
            </div>
        </div>
    )
}

export default ExerciseCardContent;