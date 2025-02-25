import Card from '@/components/Card';

export default function ExerciseTips({exercise}) {
    return (
        <Card>
            {exercise.map((tip) => (
                <div key={tip.header} className="grid gap-05">
                    <h3>{tip.header}:</h3>
                    <p className="text-indent">{tip.body}</p>
                </div>
            ))}
        </Card>
    );
}