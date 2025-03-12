import StatsCard from "@/components/StatsCard/index.js";
import {Bar} from "react-chartjs-2";
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend
} from "chart.js";

// Register necessary chart elements
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

export default function CalorieIntakeCard() {
    const data = {
        datasets: [
            {
                label          : "Consumed (g)",
                data           : [50, 200],
                backgroundColor: [
                    "#B9C1FE",
                    "#414FCA"
                ]
            }
        ],
        labels  : ["Yesterday", "Today"]
    };

    const options = {
        responsive         : true,
        maintainAspectRatio: false,
        plugins            : {
            legend: {
                display: false
            },
        },
        scales             : {
            x: {
                grid: {
                    display: false
                }
            },

        }
    };

    return (
        <StatsCard title="Daily Calorie Intake" height="26rem">
            <Bar data={data} options={options}/>
        </StatsCard>
    );
}
