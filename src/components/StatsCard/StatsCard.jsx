import Card from "@/components/Card";
import './StatsCard.scss'

export default function StatsCard({children, title, height = '100%'}) {
    return (
        <Card variant="stats-card">
            <h3>{title}</h3>
            <div
                className="stats-card__chart-container"
                style={{minHeight: height}}
            >
                {children}
            </div>
        </Card>
    );
}