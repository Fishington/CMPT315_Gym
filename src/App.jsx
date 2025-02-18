import {BrowserRouter, Route, Routes} from 'react-router-dom';

import AppLayout from '@/components/Layout/AppLayout';
import AuthenticationLayout from '@/components/Layout/AuthenticationLayout';

import Login from '@/features/authentication/Login';
import Register from '@/features/authentication/Register';
import ForgetPassword from '@/features/authentication/ForgetPassword';
import CreateNewPassword from '@/features/authentication/CreateNewPassword';

import Dashboard from '@/features/dashboard/Dashboard';
import UserProfile from '@/features/user/UserProfile';

import Workout from '@/features/workout/Workout';
import ExercisesList from '@/features/workout/exercises/ExercisesList';
import RoutinesList from '@/features/workout/routines/RoutinesList';
import CreateRoutines from '@/features/workout/routines/CreateRoutines';
import ExercisesDetails from '@/features/workout/exercises/ExercisesDetails';
import RoutineDetails from '@/features/workout/routines/RoutineDetails';
import WorkoutSession from '@/features/workout/session/WorkoutSession';
import WorkoutSummary from '@/features/workout/summary/WorkoutSummary';

import ProtectedRoute from '@/features/authentication/ProtectedRoute';
import {AuthProvider} from '@/context/AuthContext';

const basename = import.meta.env.BASE_URL;

function App() {
    return (
        <AuthProvider>
            <BrowserRouter basename={basename}>
                <Routes>
                    <Route element={<AuthenticationLayout  />}>
                        <Route path="login" element={<Login/>}/>
                        <Route path="register" element={<Register/>}/>
                        <Route path="forgot-password" element={<ForgetPassword/>}/>
                        <Route path="create-new-password" element={<CreateNewPassword/>}/>
                    </Route>


                    <Route element={
                        <ProtectedRoute>
                            <AppLayout/>
                        </ProtectedRoute>
                    }>
                        <Route path="/" element={<Dashboard/>}/>

                        <Route path="/workout" element={<Workout/>}/>
                        <Route path="/workout/exercises" element={<ExercisesList/>}/>
                        <Route path="/workout/exercises/:id" element={<ExercisesDetails/>}/>

                        <Route path="/workout/routines" element={<RoutinesList/>}/>
                        <Route path="/workout/routines/create" element={<CreateRoutines/>}/>
                        <Route path="/workout/routines/:id" element={<RoutineDetails/>}/>

                        <Route path="/workout/session/:id" element={<WorkoutSession/>}/>
                        <Route path="/workout/summary/:id" element={<WorkoutSummary/>}/>

                        <Route path="/user-profile" element={<UserProfile/>}/>
                    </Route>
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    )
}

export default App
