import Card from '@/components/Card/index.js';
import Button from '@/components/Button/index.js';

export default function SessionTimer({routineId}) {
    return (
        <Card>
            <div className='flex-space-between'>
                <div>
                    <h2>Incline Dumbbell Bench Press</h2>
                    <h3>Set 1/3</h3>
                </div>

                <h2>0:22 remaining</h2>
            </div>

            <div className='flex-space-between gap-2'>
                <Button color="white" size="full-width">
                    Pause
                </Button>

                <Button color="blue" size="full-width" to={`/workout/summary/${routineId}`}>
                    Finish Workout Routine
                </Button>
            </div>
        </Card>
    );
}