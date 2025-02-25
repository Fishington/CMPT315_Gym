import {useState} from 'react';
import {Outlet} from 'react-router-dom';

import LogoFullIcon from '@/components/Icons/LogoFullIcon';

import './AuthenticationLayout.scss'
import LogoIcon from '@/components/Icons/LogoIcon/index.js';

export default function AuthenticationLayout() {
    const [quote, setQuote] = useState('');
    const [image, setImage] = useState('');
    
    return (
        <main className="authentication-layout">
            <section className="authentication-layout__left">
                <div className="authentication-layout__logo">
                    <LogoFullIcon/>
                </div>

                <div className="authentication-layout__main-content">
                    <div className="login__form">
                        <Outlet context={[setQuote, setImage]} />
                    </div>
                </div>
            </section>

            <section 
                className="authentication-layout__image-container"
                style={{
                    background: 
                        `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 0%, rgba(0, 0, 0, 0.75) 100%), 
                        url(${image}) center / cover no-repeat`
                }}
            >
                <h2 className="authentication-layout__motivational-quote">{quote}</h2>
                <LogoIcon/>
            </section>
        </main>
    );
}