import React, {createContext, useContext} from 'react';
import {Link} from 'react-router-dom';
import {useSelector} from 'react-redux';
import HeaderProfile from '@/components/Layout/PageHeader/HeaderProfile';
import BackIcon from '@/components/Icons/BackIcon';
import {formatDate} from '@/utils/formatter.js';
import './PageHeader.scss'

const PageHeaderContext = createContext(null);

function PageHeader({pageTitle, showBack, backTarget}) {
    return (
        <PageHeaderContext.Provider value={{pageTitle, showBack, backTarget}}>
            <section className="page-header">
                {pageTitle === 'Dashboard' ? (
                    <HomeTitle/>
                ) : (
                    <SectionTitle/>
                )}

                <HeaderProfile/>
            </section>
        </PageHeaderContext.Provider>
    );
}

function HomeTitle() {
    const user = useSelector((state) => state.auth.user);

    return (
        <div className="grid gap-1-5">
            <div>
                <h1>Hello <span className="page-header__user-name">{user.firstName}!</span></h1>
                <p>Today is <span className="page-header__date">{formatDate(new Date())}</span></p>
            </div>

            {/*<HomeOptions/>*/}
        </div>
    );
}

function SectionTitle() {
    const {pageTitle, showBack, backTarget} = useContext(PageHeaderContext);

    return (
        <div className="flex flex-justify-items gap-1">
            {showBack && (
                <Link className="page-header__back" to={backTarget ? backTarget : -1}>
                    <BackIcon/>
                </Link>
            )}

            <h1 className="section-title__title">{pageTitle}</h1>
        </div>
    );
}

export default PageHeader;