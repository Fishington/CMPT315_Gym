import StatsCard from "@/components/StatsCard/index.js";
import { Bar } from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Tooltip,
    Legend
} from "chart.js";

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

export default function CaloriesBurnedCard() {
    const data = {
        labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        datasets: [
            {
                label: "Calories Burned",
                data: [300, 450, 400, 500, 550, 600, 620], // Example calories burned per workout
                backgroundColor: [
                    "#b9c1fe",
                    "#8592fd",
                    "#5163FC",
                    "#3945b0",
                    "#202865",
                ],
                borderRadius: 8
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: { display: false },
            tooltip: { enabled: true }
        },
        scales: {
            y: {
                beginAtZero: true,
                min: 0,
                max: 700
            }
        }
    };

    return (
        <StatsCard title="Calories Burned Per Workout" height="26rem">
            <Bar data={data} options={options} />
        </StatsCard>
    );
}