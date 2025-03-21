import Section from '@/components/Layout/Section';
import PageHeader from '@/components/Layout/PageHeader';
import CalorieIntakeCard from "@/features/dashboard/Cards/CalorieIntakeCard";
import IntakeBreakdownCard from "@/features/dashboard/Cards/IntakeBreakdownCard";
import ExerciseWeightProgressCard from '@/features/dashboard/Cards/ExerciseWeightProgressCard'
import MuscleGroupDistributionCard from '@/features/dashboard/Cards/MuscleGroupDistributionCard'
import AverageHeartRate from "@/features/dashboard/Cards/AverageHeartRate";
import CaloriesBurned from "@/features/dashboard/Cards/CaloriesBurned";
import ExercisesPerformed from "@/features/dashboard/Cards/ExercisesPerformed";

function Dashboard() {
    return (
        <>
            <PageHeader pageTitle="Dashboard"/>

            <Section
                title="Overview"
                tip="Get a quick overview of your nutritional health"
            >
                <MuscleGroupDistributionCard/>
                <ExerciseWeightProgressCard/>
                <IntakeBreakdownCard/>
                <CalorieIntakeCard/>
            </Section>

            <Section
                title="Health"
                tip="Monitor key health indicators and get insights to maintain a healthy lifestyle"
            >
                <AverageHeartRate/>
                <CaloriesBurned/>
                <ExercisesPerformed/>
            </Section>
        </>
    );
}

export default Dashboard;