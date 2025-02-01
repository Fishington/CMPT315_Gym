import React from 'react';
import Button from '../../../components/Button';
import LogIcon from '../../../components/Icons/LogIcon';
import CustomizeIcon from '../../../components/Icons/CustomizeIcon';
import DownloadIcon from '../../../components/Icons/DownloadIcon';
import ShareIcon from '../../../components/Icons/ShareIcon';

function HomeOptions() {
    return (
        <section className="home__options">
            <Button color="blue" size="medium">
                <LogIcon/>
                Log An Activity
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
    );
}

export default HomeOptions;