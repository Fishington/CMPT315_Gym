import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';

import SideBar from '../SideBar';
import PageHeader from '../PageHeader';
import HomeTitle from './HomeTitle';
import SectionTitle from './SectionTitle';

import {slugToTitle} from '../../../utils/formatter.js';

import './AppLayout.scss';

const user = {
    firstName: 'Sergei',
    lastName : 'Borja'
};

const defaultBackTarget = {
    target  : -1,
    showBack: true
};

function AppLayout() {
    const {pathname} = useLocation();
    const pathParts = pathname.split('/').filter(Boolean);

    const section = slugToTitle(pathParts[0] || 'Home');
    const [pageTitle, setPageTitle] = useState(slugToTitle(pathParts[pathParts.length - 1] || section));

    const [backTarget, setBackTarget] = useState(defaultBackTarget);

    useEffect(() => {
        setPageTitle(slugToTitle(pathParts[pathParts.length - 1] || section));
        setBackTarget(defaultBackTarget)
    }, [pathname]);

    return (
        <div className="app-layout">
            <SideBar currentPage={section}/>

            <main className="app-layout__main">
                <PageHeader user={user}>
                    {pageTitle === 'Home' ? (
                        <HomeTitle user={user}/>
                    ) : (
                        <SectionTitle
                            pageTitle={pageTitle}
                            section={section}
                            backTarget={backTarget}
                        />
                    )}
                </PageHeader>

                <Outlet context={{setPageTitle, setBackTarget}}/>
            </main>
        </div>
    );
}

export default AppLayout;
