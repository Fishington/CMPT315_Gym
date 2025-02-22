import TwoColumns from '@/components/Layout/TwoColumns';
import Section from '@/components/Layout/Section/index.js';
import Card from '@/components/Card/index.js';
import Button from '@/components/Button/index.js';
import BackIcon from '@/components/Icons/BackIcon/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';

function Workout() {
    return (
        <>
            <PageHeader pageTitle="Workout"/>

            <TwoColumns>
                <TwoColumns.Column>
                    <Section>
                        <Button color="image-button" to="exercises" image="/images/exercise-button.jpg">
                            View Exercises
                            <BackIcon/>
                        </Button>

                        <Button color="image-button" to="routines" image="/images/routine-button.jpg">
                            View Workout Routines
                            <BackIcon/>
                        </Button>
                    </Section>

                    <Section title="Progress Tracker">
                        <Card>
                            <p style={{margin: 'auto auto'}}>Placeholder</p>
                        </Card>

                        <Section.Column>
                            <Card>
                                <p style={{margin: '10rem auto'}}>Placeholder</p>

                            </Card>

                            <Card>
                                <p style={{margin: '10rem auto'}}>Placeholder</p>

                            </Card>

                            <Card>
                                <p style={{margin: '10rem auto'}}>Placeholder</p>
                            </Card>
                        </Section.Column>
                    </Section>
                </TwoColumns.Column>

                <TwoColumns.Column>
                    <Section title="Today’s Workouts">
                        <Card>
                            <p style={{margin: '30rem auto'}}>Placeholder</p>
                        </Card>
                    </Section>

                    <Section title="Upcoming Workouts">
                        <Card>
                            <p style={{margin: '30rem auto'}}>Placeholder</p>
                        </Card>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default Workout;