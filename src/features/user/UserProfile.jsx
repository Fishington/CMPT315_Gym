import TwoColumns from '@/components/Layout/TwoColumns/index.js';
import Section from '@/components/Layout/Section/index.js';
import Card from '@/components/Card/index.js';
import PageHeader from '@/components/Layout/PageHeader/index.js';

import './UserProfile.scss'
import ItemCard from '@/components/ItemCard/index.js';
import {useEffect, useState} from "react";
import {fetchRoutines} from "@/api/routinesApi";
import LoadingScreen from "@/components/LoadingScreen";

function UserProfile() {
    const [routines, setRoutines] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getRoutines = async () => {
            try {
                const data = await fetchRoutines();
                if (data) {
                    setRoutines(data);
                } else {
                    console.error("No routines found.");
                }
            } catch (error) {
                console.error("Error fetching routines:", error);
            } finally {
                setLoading(false);
            }
        };

        getRoutines();
    }, []);

    if (loading) return <LoadingScreen/>;

    return (
        <>
            <PageHeader
                pageTitle="Sergei Borja"
                backTarget={-1}
            />

            <TwoColumns reverse={true}>
                <TwoColumns.Column>
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
                </TwoColumns.Column>
                
                <TwoColumns.Column>
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
                        <ItemCard data={routines.find((ro) => ro.id === Number(1))} baseLink="workout/routines"/>
                        <ItemCard data={routines.find((ro) => ro.id === Number(2))} baseLink="workout/routines"/>
                        <ItemCard data={routines.find((ro) => ro.id === Number(3))} baseLink="workout/routines"/>
                        <ItemCard data={routines.find((ro) => ro.id === Number(4))} baseLink="workout/routines"/>
                    </Section>
                </TwoColumns.Column>
            </TwoColumns>
        </>
    );
}

export default UserProfile;