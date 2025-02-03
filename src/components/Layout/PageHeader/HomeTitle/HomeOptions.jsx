import React from 'react';
import Button from '@/components/Button';
import LogIcon from '@/components/Icons/LogIcon';
import CustomizeIcon from '@/components/Icons/CustomizeIcon';
import ShareIcon from '@/components/Icons/ShareIcon';

function HomeOptions() {
    function handleLogActivity() {
        alert('Log Activity')
    }

    function handleCustomizeDashboard() {
        alert('Customize Dashboard')
    }

    function handleShare() {
        alert('Share')
    }
    
    return (
        <section className="home-title__options">
            <Button 
                color="blue" 
                size="medium"
                onClick={() => handleLogActivity()}
            >
                <LogIcon/>
                Log An Activity
            </Button>

            <Button 
                color="white" 
                size="medium"
                onClick={() => handleCustomizeDashboard()}
            >
                <CustomizeIcon/>
                Customize Dashboard
            </Button>

            <Button 
                color="white" 
                size="medium"
                onClick={() => handleShare()}
            >
                <ShareIcon/>
                Share
            </Button>
        </section>
    );
}

export default HomeOptions;