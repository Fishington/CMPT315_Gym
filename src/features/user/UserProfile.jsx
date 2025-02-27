import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Section from '@/components/Layout/Section/index.js';
import Card from '@/components/Card/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';

import './UserProfile.scss'
import ItemCard from '@/components/ItemCard/index.js';

import tempRoutineList from '@/data/routines.json';

function UserProfile() {
    return (
        <>
            <PageHeader
                pageTitle="Sergei Borja"
                backTarget={-1}
            />

            <TwoColumns reverse={true}>
                <div>
                    <Section>
                        <Card>
                            <section className="user-profile">
                                <div className="user-profile__content">
                                    <img src="/images/sergei-borja.jpg" alt=""/>

                                    <div className="user-profile__text">
                                        <p className="user-profile__bio">
                                            <span>Bio:</span>
                                            <br/>
                                            Lorem ipsum dolor sit amet. Et doloremque assumenda eos quae commodi sed
                                            magni pariatur et ipsam unde. Ut omnis perferendis sed quasi totam ut
                                            doloremque iusto.
                                        </p>

                                        <ul className="user-profile__stats">
                                            <li>
                                                <span>Gender:</span> Male
                                            </li>
                                            <li>
                                                <span>Age:</span> 26
                                            </li>
                                            <li>
                                                <span>Height:</span> 5'10''
                                            </li>
                                            <li>
                                                <span>Weight:</span> 160lbs
                                            </li>
                                            <li>
                                                <span>Location:</span> Edmonton, Alberta, Canada
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </section>
                        </Card>
                    </Section>
                </div>
                
                <div>
                    <Section
                        title="Featured Achievements"
                        tip="Discover Sergei's key fitness milestones and achievements along his fitness journey."
                    >
                        <Card>
                            <p style={{margin: '16rem auto'}}>
                                Placeholder
                            </p>
                        </Card>
                    </Section>

                    <Section
                        title="Recent Activity"
                        tip="See Sergei’s latest workouts, meal updates, and fitness milestones."
                    >
                        <Card>
                            <p style={{margin: '16rem auto'}}>
                                Placeholder
                            </p>
                        </Card>
                    </Section>

                    <Section
                        title="Favourite Workouts"
                        tip="These are Sergei’s go-to workouts for strength, endurance, and overall fitness."
                    >
                        <ItemCard
                            data={tempRoutineList[0]}
                            baseLink="workout/routines"
                        />

                        <ItemCard
                            data={tempRoutineList[1]}
                            baseLink="workout/routines"
                        />

                        <ItemCard
                            data={tempRoutineList[0]}
                            baseLink="workout/routines"
                        />

                        <ItemCard
                            data={tempRoutineList[0]}
                            baseLink="workout/routines"
                        />
                    </Section>
                </div>
            </TwoColumns>
        </>
    );
}

export default UserProfile;