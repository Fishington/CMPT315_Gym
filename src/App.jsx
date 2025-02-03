import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from '@/pages/Login';
import Register from '@/pages/Register/index.js';
import ForgetPassword from '@/pages/ForgetPassword/index.js';
import CreateNewPassword from '@/pages/CreateNewPassword/index.js';

import AppLayout from '@/components/Layout/AppLayout';

import Home from '@/pages/Home';

import Workout from '@/pages/Workout';
import ViewExercises from '@/pages/ViewExercises';
import ViewWorkoutRoutines from '@/pages/ViewWorkoutRoutines/index.js';
import CreateWorkout from '@/pages/CreateWorkout/index.js';
import ExercisesDetails from '@/pages/ExercisesDetails';
import WorkoutRoutineDetails from '@/pages/WorkoutRoutineDetails/index.js';
import WorkoutSession from '@/pages/WorkoutSession/index.js';
import WorkoutSummary from '@/pages/WorkoutSummary/index.js';

import './assets/styles/globals.scss'

const basename = import.meta.env.BASE_URL;

function App() {

    return (
        <BrowserRouter basename={basename}>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/forgot-password" element={<ForgetPassword/>}/>
                <Route path="/create-new-password" element={<CreateNewPassword/>}/>

                <Route element={<AppLayout />}>
                    <Route path="/home" element={<Home />} />
                    
                    <Route path="/workout" element={<Workout />} />
                    <Route path="/workout/exercises" element={<ViewExercises />} />
                    <Route path="/workout/exercises/:name" element={<ExercisesDetails />} />
                    
                    <Route path="/workout/routines" element={<ViewWorkoutRoutines />} />
                    <Route path="/workout/routines/create" element={<CreateWorkout />} />
                    <Route path="/workout/routines/:name" element={<WorkoutRoutineDetails />} />
                    
                    <Route path="/workout/session/:name" element={<WorkoutSession />} />
                    <Route path="/workout/summary/:name" element={<WorkoutSummary />} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App
