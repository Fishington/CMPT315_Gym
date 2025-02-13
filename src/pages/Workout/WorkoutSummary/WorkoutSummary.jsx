import React from 'react';
import { useParams } from 'react-router-dom';
import Button from '@/components/Button/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';
import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Card from '@/components/Card/index.js';
import './WorkoutSummary.scss';
import ExerciseList from '@/components/ExerciseList';


function WorkoutSummary() {
    const { id } = useParams();

    return (
        <>
            <PageHeader pageTitle="Workout Summary" />

            <h2>Workout Details</h2>

            <TwoColumns>
                <div>
                    <Card>
                        <div className="card-content">
                            <img src="/images/arm-curl.png" alt="Arm Curl" className="workout-image"/>
                            <div className="card-text">
                                <h2>Dumbbell Only Workouts for Beginners</h2>
                                
                                <div className="mini-sections">
                                    <div className="mini-section">
                                        <img src="/images/mini-icon1.png" alt="Icon 1" className="mini-image"/>
                                        <div className="mini-text">
                                            <p className="mini-header">? / 10 Exercises</p>
                                            <p className="mini-description">Total Exercises</p>
                                        </div>
                                    </div>

                                    <div className="mini-section">
                                        <img src="/images/mini-icon2.png" alt="Icon 2" className="mini-image"/>
                                        <div className="mini-text">
                                            <p className="mini-header">? Cal</p>
                                            <p className="mini-description">Calories Burned</p>
                                        </div>
                                    </div>

                                    <div className="mini-section">
                                        <img src="/images/mini-icon3.png" alt="Icon 3" className="mini-image"/>
                                        <div className="mini-text">
                                            <p className="mini-header">00:00</p>
                                            <p className="mini-description">Total Time</p>
                                        </div>
                                    </div>

                                    <div className="mini-section">
                                        <img src="/images/mini-icon4.png" alt="Icon 4" className="mini-image"/>
                                        <div className="mini-text">
                                            <p className="mini-header">000</p>
                                            <p className="mini-description">Average Heart Rate</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <Button color="blue" size="full-width" href={`/workout`}>
                            Save Workout Statistics
                        </Button>
                    </Card>

                    <Card>
                        <h3>Performance</h3>
                        <p>Reps Completed: 100</p>
                        <p>Max Weight Lifted: 150 lbs</p>
                    </Card>

                    <Card>
                        <h3>Duration</h3>
                        <p>Time Spent: 45 minutes</p>
                        <p>Rest Time: 10 minutes</p>
                    </Card>
                </div>
                <Card>
                    <h3>Finished Exercises</h3>
                    <p>List of Finished Exercises will be added here</p>
                </Card>
                <div>
  
                </div>
            </TwoColumns>
        </>
    );
}

export default WorkoutSummary;