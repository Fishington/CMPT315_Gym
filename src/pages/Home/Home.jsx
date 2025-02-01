import './Home.scss'

import CardSection from '../../components/CardSection';
import Card from '../../components/Card';

import HomeOptions from './HomeOptions/HomeOptions.jsx';
import React from 'react';

function Home() {
    document.title = 'Home | HyperFit';

    return (
        <>
            <HomeOptions/>

            <CardSection
                title="Overview"
                tip="Get a quick overview of your nutritional health"
                height="16rem"
            >
                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>

                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>

                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>

                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>

                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>

                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>
            </CardSection>

            <CardSection
                title="Health"
                tip="Monitor key health indicatiors and get insights to maintain a healthy lifestyle"
                height="30rem"
            >
                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>

                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>

                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>
            </CardSection>

            <CardSection
                title="Weight Goals"
                tip="Quickly review your daily nutrion"
                height="26rem"
            >
                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>
            </CardSection>

            <CardSection
                title="Acheivements"
                tip="See what you have accomplish since you first started HypeFit"
                height="26rem"
            >
                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>

                <Card>
                    <p style={{placeSelf: 'center'}}>Test</p>
                </Card>
            </CardSection>
        </>
    );
}

export default Home;