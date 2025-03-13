import StatsCard from "@/components/StatsCard/index.js";
import { Line } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Tooltip,
    Legend
} from "chart.js";

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Tooltip, Legend);

export default function HeartRateProgressCard() {
    const data = {
        labels: ["0 min", "5 min", "10 min", "15 min", "20 min", "25 min", "30 min"],
        datasets: [
            {
                label: "Heart Rate (BPM)",
                data: [85, 95, 110, 130, 140, 125, 100], // Example heart rate over time
                borderColor: "#5163FC",
                backgroundColor: "rgba(81, 99, 252, 0.3)",
                borderWidth: 2,
                tension: 0.4, // Smooths out the line
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { position: "top" },
            tooltip: { enabled: true }
        },
        scales: {
            y: {
                beginAtZero: false,
                min: 60,
                max: 160
            }
        }
    };

    return (
        <StatsCard title="Heart Rate Progress" height="26rem">
            <Line data={data} options={options} />
        </StatsCard>
    );
}
