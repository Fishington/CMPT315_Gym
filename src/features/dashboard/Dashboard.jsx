import Section from '@/components/Layout/Section';
import PageHeader from '@/components/Layout/PageHeader';
import Card from '@/components/Card';

function Dashboard() {
    return (
        <>
            <PageHeader pageTitle="Dashboard"/>

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
            </Section>

            <Section
                title="Health"
                tip="Monitor key health indicators and get insights to maintain a healthy lifestyle"
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

export default Dashboard;