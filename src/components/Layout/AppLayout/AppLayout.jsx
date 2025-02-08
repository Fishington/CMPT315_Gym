import {Outlet, useLocation} from 'react-router-dom';

import SideBar from '@/components/Layout/SideBar';

import {slugToTitle} from '@/utils/formatter.js';

import './AppLayout.scss';

const user = {
    firstName: 'Sergei',
    lastName : 'Borja'
};

function AppLayout() {
    const {pathname} = useLocation();
    const section = slugToTitle(pathname.split('/')[1]);

    return (
        <div className="app-layout">
            <SideBar currentPage={section}/>

            <main className="app-layout__main">
                <Outlet context={{user}}/>
            </main>
        </div>
    );
}

export default AppLayout;
