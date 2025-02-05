import React, {useEffect} from 'react';
import {useOutletContext} from 'react-router-dom';

import Section from '@/components/Layout/Section';
import Card from '@/components/Card';

import './Home.scss'

function Home() {
    const {setPageTitle} = useOutletContext();
    document.title = 'Home | HyperFit';

    useEffect(() => {
        setPageTitle('Home');
    }, [setPageTitle]);

    return (
        <>
            <Section
                title="Overview"
                tip="Get a quick overview of your nutritional health"
            >
                <Card>
                    <p style={{margin: '10rem auto'}}>
                        Placeholder
                    </p>
                </Card>

                <Card>
                    <p style={{margin: '10rem auto'}}>
                        Placeholder
                    </p></Card>

                <Card>
                    <p style={{margin: '10rem auto'}}>
                        Placeholder
                    </p></Card>

                <Card>
                    <p style={{margin: '10rem auto'}}>
                        Placeholder
                    </p></Card>
            </Section>

            <Section
                title="Health"
                tip="Monitor key health indicatiors and get insights to maintain a healthy lifestyle"
            >
                <Card>
                    <p style={{margin: '16rem auto'}}>
                        Placeholder
                    </p>
                </Card>

                <Card>
                    <p style={{margin: '16rem auto'}}>
                        Placeholder
                    </p>
                </Card>

                <Card>
                    <p style={{margin: '16rem auto'}}>
                        Placeholder
                    </p>
                </Card>
            </Section>

            <Section
                title="Weight Goals"
                tip="Quickly review your daily nutrion"
            >
                <Card>
                    <p style={{margin: '20rem auto'}}>
                        Placeholder
                    </p>
                </Card>
            </Section>

            <Section
                title="Acheivements"
                tip="See what you have accomplish since you first started HypeFit"
            >
                <Card>
                    <p style={{margin: '8rem auto'}}>
                        Placeholder
                    </p>
                </Card>

                <Card>
                    <p style={{margin: '8rem auto'}}>
                        Placeholder
                    </p>
                </Card>
            </Section>
        </>
    );
}

export default Home;