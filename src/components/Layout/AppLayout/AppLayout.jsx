import React, {useEffect, useState} from 'react';
import {Outlet, useLocation} from 'react-router-dom';

import SideBar from '@/components/Layout/SideBar';
import PageHeader from '@/components/Layout/PageHeader';

import {slugToTitle} from '@/utils/formatter.js';

import './AppLayout.scss';

const user = {
    firstName: 'Sergei',
    lastName : 'Borja'
};

function AppLayout() {
    const {pathname} = useLocation();
    const pathParts = pathname.split('/').filter(Boolean);

    const section = slugToTitle(pathParts[0] || 'Home');
    const [pageTitle, setPageTitle] = useState(slugToTitle(pathParts[pathParts.length - 1] || section));

    const [backTarget, setBackTarget] = useState(-1);

    useEffect(() => {
        setPageTitle(slugToTitle(pathParts[pathParts.length - 1] || section));
        setBackTarget(-1)
    }, [pathname]);

    return (
        <div className="app-layout">
            <SideBar currentPage={section}/>

            <main className="app-layout__main">
                <PageHeader
                    user={user}
                    pageTitle={pageTitle}
                    section={section}
                    backTarget={backTarget}
                />

                <Outlet context={{setPageTitle, setBackTarget}}/>
            </main>
        </div>
    );
}

export default AppLayout;
