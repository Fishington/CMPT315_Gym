import {WorkoutSessionProvider} from "@/context/WorkoutSessionContext.jsx";
import {Outlet} from "react-router-dom";

export default function WorkoutSessionLayout() {
    return (
        <WorkoutSessionProvider>
            <Outlet/>
        </WorkoutSessionProvider>
    );
}