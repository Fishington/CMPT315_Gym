import React from 'react';
import HeaderProfile from './HeaderProfile';
import HomeTitle from './HomeTitle';
import SectionTitle from './SectionTitle';
import './PageHeader.scss'

function PageHeader({user, pageTitle, section, backTarget}) {
    return (
        <section className="page-header">
            
                {pageTitle === 'Home' ? (
                    <HomeTitle user={user}/>
                ) : (
                    <SectionTitle
                        pageTitle={pageTitle}
                        section={section}
                        backTarget={backTarget}
                    />
                )}
            
            <HeaderProfile user={user}/>
        </section>
    );
}

export default PageHeader;