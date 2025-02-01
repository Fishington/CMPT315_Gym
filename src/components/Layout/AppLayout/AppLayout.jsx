import React from 'react';
import SideBar from '../SideBar/index.js';
import PageHeader from '../PageHeader/index.js';
import {Outlet, useLocation} from 'react-router-dom';
import './AppLayout.scss'
import HomeTitle from './HomeTitle/index.js';
import SectionTitle from './SectionTitle/index.js';

const user = {
    firstName: 'Sergei',
    lastName : 'Borja'
}

function AppLayout() {
    const location = useLocation();
    const pathParts = location.pathname.split('/').filter(Boolean);

    const section = pathParts[0] || 'Home';
    const pageTitle = pathParts[pathParts.length - 1] || section;

    console.log(section)
    console.log(pageTitle)

    const formatTitle = (str) => {
        return str
            .replace(/-/g, ' ') // Convert slug to words
            .replace(/\b\w/g, (char) => char.toUpperCase());
    };

    return (
        <div className="app-layout">
            <SideBar currentPage={formatTitle(section)}/>

            <main className="app-layout__main">
                <PageHeader user={user}>
                    {formatTitle(pageTitle) === 'Home' ? (
                        <HomeTitle
                            user={user}
                        />
                    ) : (
                        <SectionTitle
                            pageTitle={formatTitle(pageTitle)}
                            section={formatTitle(section)}
                        />
                    )}
                </PageHeader>

                <Outlet/>
            </main>
        </div>
    );
}

export default AppLayout;