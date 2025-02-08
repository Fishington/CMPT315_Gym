import React from 'react';
import HeaderProfile from './HeaderProfile';
import HomeTitle from './HomeTitle';
import SectionTitle from './SectionTitle';
import './PageHeader.scss'

function PageHeader({user, pageTitle, showBack, backTarget}) {
    return (
        <section className="page-header">
                {pageTitle === 'Home' ? (
                    <HomeTitle user={user}/>
                ) : (
                    <SectionTitle
                        pageTitle={pageTitle}
                        backTarget={backTarget}
                        showBack={showBack}
                    />
                )}
            
            <HeaderProfile user={user}/>
        </section>
    );
}

export default PageHeader;