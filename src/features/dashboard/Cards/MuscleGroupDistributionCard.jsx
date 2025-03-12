import StatsCard from "@/components/StatsCard/index.js";
import { Pie } from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

// Register necessary chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function MuscleGroupDistributionCard() {
    const data = {
        labels: ["Chest", "Back", "Legs", "Arms", "Shoulders", "Core"],
        datasets: [
            {
                label: "Training Time (Minutes)",
                data: [90, 120, 150, 60, 80, 50], // Example training time per muscle group
                backgroundColor: [
                    "#b9c1fe",
                    "#8592fd",
                    "#5163FC",
                    "#3945b0",
                    "#202865",
                    "#080a19"
                ],
                borderWidth: 0
            }
        ]
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: "bottom"
            },
            tooltip: {
                enabled: true
            }
        }
    };

    return (
        <StatsCard title="Muscle Group Training Distribution" height="26rem">
            <Pie data={data} options={options} />
        </StatsCard>
    );
}
