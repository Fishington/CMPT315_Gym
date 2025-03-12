import StatsCard from "@/components/StatsCard/index.js";
import {Doughnut} from "react-chartjs-2";
import {
    Chart as ChartJS,
    ArcElement,
    Tooltip,
    Legend
} from "chart.js";

// Register necessary chart elements
ChartJS.register(ArcElement, Tooltip, Legend);

export default function DailyIntakeBurnCard() {
    const data = {
        labels  : ["Protein", "Carbs", "Fats", "Fiber"],
        datasets: [
            {
                data           : [50, 200, 70, 30],
                backgroundColor: [
                    "#C6CCFA",
                    "#97A1FD",
                    "#5163FC",
                    "#313B97"
                ],
                borderWidth    : 0
            }
        ]
    };

    const options = {
        responsive         : true,
        maintainAspectRatio: false,
        plugins            : {
            legend : {
                position: "bottom"
            },
            tooltip: {
                enabled: true
            }
        },
        cutout             : "60%"
    };

    return (
        <StatsCard title="Calorie Breakdown" height="26rem">
            <Doughnut data={data} options={options}/>
        </StatsCard>
    );
}
