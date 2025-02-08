import React from 'react';
import {useOutletContext} from 'react-router-dom';

import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section/index.js';
import Card from '@/components/Card/index.js';
import Button from '@/components/Button/index.js';
import BackIcon from '@/components/Icons/BackIcon/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';

function Workout() {
    const {user} = useOutletContext();
    document.title = 'Workout | HyperFit';

    return (
        <>
            <PageHeader
                user={user}
                pageTitle="Workout"
            />
            
            <TwoColumns>
                <div>
                    <Section>
                        <Button
                            color="image-button"
                            href="exercises"
                            image="/images/exercise-button.jpg"
                        >
                            View Exercises
                            <BackIcon/>
                        </Button>

                        <Button
                            color="image-button"
                            href="routines"
                            image="/images/routine-button.jpg"
                        >
                            View Workout Routines
                            <BackIcon/>
                        </Button>
                    </Section>

                    <Section title="Progress Tracker">
                            <Card>
                                <p style={{margin: 'auto auto'}}>
                                    Placeholder
                                </p>
                            </Card>

                        <div>
                            <Card>
                                <p style={{margin: '10rem auto'}}>
                                    Placeholder
                                </p>
                            </Card>

                            <Card>
                                <p style={{margin: '10rem auto'}}>
                                    Placeholder
                                </p>
                            </Card>

                            <Card>
                                <p style={{margin: '10rem auto'}}>
                                    Placeholder
                                </p>
                            </Card>
                        </div>
                    </Section>
                </div>

                <div>
                    <Section title="Today’s Workouts">
                        <Card>
                            <p style={{margin: '10rem auto'}}>
                                Placeholder
                            </p>
                        </Card>
                    </Section>

                    <Section title="Upcoming Workouts">
                        <Card>
                            <p style={{margin: '30rem auto'}}>
                                Placeholder
                            </p>
                        </Card>
                    </Section>
                </div>
            </TwoColumns>


        </>
    );
}

export default Workout;