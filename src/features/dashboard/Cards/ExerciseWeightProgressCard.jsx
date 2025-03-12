import StatsCard from "@/components/StatsCard/index.js";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

export default function ExerciseWeightProgressCard() {
    const data = {
        labels: ["Week 1", "Week 2", "Week 3", "Week 4", "Week 5", "Week 6"],
        datasets: [
            {
                label: "Weight (kg)",
                data: [12, 14, 18, 20, 22, 25],
                borderColor: "#3A52FF",
                backgroundColor: "rgba(58, 82, 255, 0.2)",
                pointBackgroundColor: "#3A52FF",
                pointBorderColor: "#fff",
                pointRadius: 5,
                pointHoverRadius: 7,
                tension: 0.3
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                display: false
            },
            tooltip: {
                mode: "index",
                intersect: false
            }
        },
        scales: {
            x: {
                grid: {
                    display: false
                }
            },
            y: {
                grid: {
                    display: false
                },
                ticks: {
                    stepSize: 2 // Ensures better readability of weight increments
                }
            }
        }
    };

    return (
        <StatsCard title="Weekly Dumbbell Weight Progress" height="26rem">
            <Line data={data} options={options} />
        </StatsCard>
    );
}
