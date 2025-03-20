import StatsCard from "@/components/StatsCard/index.js";
import { Radar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    RadialLinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";

// Register necessary chart elements
ChartJS.register(RadialLinearScale, PointElement, LineElement, Tooltip, Legend);

export default function ExercisePerformanceCard() {
    const data = {
        labels: ["Strength", "Endurance", "Speed", "Flexibility", "Agility", "Balance"],
        datasets: [
            {
                label: "Performance Score",
                data: [7, 8, 6, 5, 9, 7], // Example scores for different fitness areas
                backgroundColor: "rgba(81, 99, 252, 0.3)",
                borderColor: "#5163FC",
                borderWidth: 2
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "bottom" },
            tooltip: { enabled: true }
        }
    };

    return (
        <StatsCard title="Exercise Performance Overview" height="26rem">
            <Radar data={data} options={options} />
        </StatsCard>
    );
}