import {BrowserRouter, Route, Routes} from 'react-router-dom';

import Login from '@/pages/Auth/Login';
import Register from '@/pages/Auth/Register';
import ForgetPassword from '@/pages/Auth/ForgetPassword';
import CreateNewPassword from '@/pages/Auth/CreateNewPassword';

import AppLayout from '@/components/Layout/AppLayout';

import Home from '@/pages/Home';

import Workout from '@/pages/Workout';
import Exercises from '@/pages/Workout/Exercise/Exercises';
import WorkoutRoutines from '@/pages/Workout/WorkoutRoutine/WorkoutRoutines';
import CreateWorkout from '@/pages/Workout/WorkoutRoutine/CreateWorkoutRoutines';
import ExercisesDetails from '@/pages/Workout/Exercise/ExercisesDetails';
import WorkoutRoutineDetails from '@/pages//Workout/WorkoutRoutine/WorkoutRoutineDetails';
import WorkoutSession from '@/pages/Workout/WorkoutSession';
import WorkoutSummary from '@/pages/Workout/WorkoutSummary';

import './assets/styles/globals.scss'
import ProtectedRoute from '@/pages/ProtectedRoute.jsx';
import {AuthProvider} from '@/context/AuthContext.jsx';

const basename = import.meta.env.BASE_URL;

function App() {

    return (
        <AuthProvider>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route path="login" element={<Login/>}/>
                    <Route path="register" element={<Register/>}/>
                    <Route path="forgot-password" element={<ForgetPassword/>}/>
                    <Route path="create-new-password" element={<CreateNewPassword/>}/>

                    <Route element={
                        <ProtectedRoute>
                            <AppLayout/>
                        </ProtectedRoute>
                    }>
                        <Route path="/home" element={<Home/>}/>

                        <Route path="/workout" element={<Workout/>}/>
                        <Route path="/workout/exercises" element={<Exercises/>}/>
                        <Route path="/workout/exercises/:id" element={<ExercisesDetails/>}/>

                        <Route path="/workout/routines" element={<WorkoutRoutines/>}/>
                        <Route path="/workout/routines/create" element={<CreateWorkout/>}/>
                        <Route path="/workout/routines/:id" element={<WorkoutRoutineDetails/>}/>

                        <Route path="/workout/session/:id" element={<WorkoutSession/>}/>
                        <Route path="/workout/summary/:id" element={<WorkoutSummary/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
