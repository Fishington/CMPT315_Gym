import React from 'react';
import HeaderProfile from './HeaderProfile';
import HomeTitle from './HomeTitle';
import SectionTitle from './SectionTitle';
import './PageHeader.scss'

function PageHeader({pageTitle, showBack, backTarget}) {
    return (
        <section className="page-header">
                {pageTitle === 'Home' ? (
                    <HomeTitle/>
                ) : (
                    <SectionTitle
                        pageTitle={pageTitle}
                        backTarget={backTarget}
                        showBack={showBack}
                    />
                )}
            
            <HeaderProfile/>
        </section>
    );
}

export default PageHeader;