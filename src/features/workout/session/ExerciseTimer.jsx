import Card from '@/components/Card/index.js';

export default function ExerciseTimer() {
    return (
        <Card>
            <div className="flex-space-between">
                <h3>Exercises 4/10</h3>
                <h3>20:00 Remaining</h3>
            </div>
        </Card>
    );
}