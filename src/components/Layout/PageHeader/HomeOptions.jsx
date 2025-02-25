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

    const buttonOptions = [
        {
            id     : 1,
            label  : 'Log An Activity',
            color  : 'blue',
            icon   : <LogIcon/>,
            onClick: handleLogActivity
        },
        {
            id     : 2,
            label  : 'Customize Dashboard',
            color  : 'white',
            icon   : <CustomizeIcon/>,
            onClick: handleCustomizeDashboard
        },
        {
            id     : 3,
            label  : 'Share',
            color  : 'white',
            icon   : <ShareIcon/>,
            onClick: handleShare
        }
    ];

    return (
        <section className="flex gap-1">
            {buttonOptions.map(({ id, label, color, icon, onClick }) => (
                <Button key={id} color={color} size="medium" onClick={onClick}>
                    {icon}
                    {label}
                </Button>
            ))}
        </section>
    );
}

export default HomeOptions;