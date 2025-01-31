import './Home.scss'
import SideBar from '../../components/SideBar';
import PageHeader from '../../components/PageHeader';
import Button from '../../components/Button';
import CardSection from '../../components/CardSection';
import Card from '../../components/Card';

import LogIcon from '../../components/Icons/LogIcon';
import CustomizeIcon from '../../components/Icons/CustomizeIcon';
import DownloadIcon from '../../components/Icons/DownloadIcon';
import ShareIcon from '../../components/Icons/ShareIcon';
import CaretArrowIcon from '../../components/Icons/CaretArrowIcon';

const user = {
    firstName: 'Sergei',
    lastName : 'Borja'
}

function Home() {
    return (
        <div className="home">
            <SideBar currentPage="Home"/>

            <main className="home__main">
                <PageHeader user={user}>
                    <h1>
                        Hello <span className="home__user-name">{user.firstName}!</span>
                    </h1>
                    <p className="home__date-message">
                        Today is Sunday on <span className="home__date">January 26, 2025</span>
                    </p>
                </PageHeader>

                <section className="home__button-row">
                    <Button color="blue" size="medium">
                        <LogIcon/>
                        Log An Activity
                        <CaretArrowIcon/>
                    </Button>

                    <Button color="white" size="medium">
                        <CustomizeIcon/>
                        Customize Dashboard
                    </Button>

                    <Button color="white" size="medium">
                        <DownloadIcon/>
                        Download Data
                    </Button>

                    <Button color="white" size="medium">
                        <ShareIcon/>
                        Share
                    </Button>
                </section>

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
            </main>
        </div>
    );
}

export default Home;