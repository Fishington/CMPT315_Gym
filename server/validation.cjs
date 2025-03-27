function validateRoutine(routine) {
    const errors = [];

    // Basic required fields
    if (!routine.name || typeof routine.name !== 'string') {
        errors.push("Routine 'name' is required and must be a string.");
    }

    if (!routine.author || typeof routine.author !== 'string') {
        errors.push("Routine 'author' is required and must be a string.");
    }

    if (!routine.authorID || typeof routine.authorID !== 'string') {
        errors.push("Routine 'authorID' is required and must be a string.");
    }

    if (!routine.level || typeof routine.level !== 'string') {
        errors.push("Routine 'level' is required and must be a string.");
    }

    if (!routine.goal || typeof routine.goal !== 'string') {
        errors.push("Routine 'goal' is required and must be a string.");
    }

    if (!routine.targetMuscle || typeof routine.targetMuscle !== 'string') {
        errors.push("Routine 'targetMuscle' is required and must be a string.");
    }

    if (typeof routine.duration !== 'number') {
        errors.push("Routine 'duration' must be a number.");
    }

    if (typeof routine.exerciseCount !== 'number') {
        errors.push("Routine 'exerciseCount' must be a number.");
    }

    if (!routine.about || typeof routine.about !== 'string') {
        errors.push("Routine 'about' is required and must be a string.");
    }

    // Calories object
    if (!routine.calories || typeof routine.calories !== 'object') {
        errors.push("Routine 'calories' is required and must be an object.");
    } else {
        if (typeof routine.calories.min !== 'number') {
            errors.push("Routine 'calories.min' must be a number.");
        }
        if (typeof routine.calories.max !== 'number') {
            errors.push("Routine 'calories.max' must be a number.");
        }
    }

    // Tags
    if (routine.tags && !Array.isArray(routine.tags)) {
        errors.push("Routine 'tags' must be an array.");
    }

    // Equipment
    if (routine.equipment && !Array.isArray(routine.equipment)) {
        errors.push("Routine 'equipment' must be an array.");
    } else if (routine.equipment) {
        for (let eq of routine.equipment) {
            if (!eq.name || typeof eq.name !== 'string') {
                errors.push("Each equipment item must have a 'name' string.");
            }
            if (typeof eq.count !== 'number') {
                errors.push("Each equipment item must have a 'count' number.");
            }
        }
    }

    // Exercises (warmups, exercises, stretches)
    const exerciseBlocks = ['warmups', 'exercises', 'stretches'];
    if (!routine.exercises || typeof routine.exercises !== 'object') {
        errors.push("Routine 'exercises' must be an object.");
    } else {
        for (let block of exerciseBlocks) {
            const section = routine.exercises[block];
            if (!section || typeof section !== 'object') {
                errors.push(`Exercises section '${block}' is missing or invalid.`);
                continue;
            }

            if (!Array.isArray(section.set)) {
                errors.push(`'${block}.set' must be an array.`);
            } else {
                section.set.forEach((setItem, index) => {
                    if (typeof setItem.workoutId !== 'number') {
                        errors.push(`'${block}.set[${index}].workoutId' must be a number.`);
                    }
                    if (typeof setItem.reps !== 'number') {
                        errors.push(`'${block}.set[${index}].reps' must be a number.`);
                    }
                    if (typeof setItem.sets !== 'number') {
                        errors.push(`'${block}.set[${index}].sets' must be a number.`);
                    }
                    if (typeof setItem.breakDuration !== 'number') {
                        errors.push(`'${block}.set[${index}].breakDuration' must be a number.`);
                    }
                    if (typeof setItem.duration !== 'number') {
                        errors.push(`'${block}.set[${index}].duration' must be a number.`);
                    }
                    if (!setItem.calories || typeof setItem.calories !== 'object') {
                        errors.push(`'${block}.set[${index}].calories' must be an object.`);
                    } else {
                        if (typeof setItem.calories.min !== 'number') {
                            errors.push(`'${block}.set[${index}].calories.min' must be a number.`);
                        }
                        if (typeof setItem.calories.max !== 'number') {
                            errors.push(`'${block}.set[${index}].calories.max' must be a number.`);
                        }
                    }
                });
            }

            if (typeof section.duration !== 'number') {
                errors.push(`'${block}.duration' must be a number.`);
            }

            if (block === 'warmups' && typeof section.breakDuration !== 'number') {
                errors.push("'warmups.breakDuration' must be a number.");
            }
        }
    }

    return errors;
}

module.exports = { validateRoutine };