import {Link} from 'react-router-dom';
import BackIcon from '@/components/Icons/BackIcon/index.js';

import './SectionTitle.scss';

function SectionTitle({pageTitle, showBack, backTarget}) {
    return (
        <div className="section-title">
            {showBack && (
                <Link
                    className="section-title__back"
                    to={backTarget ? backTarget : -1}
                >
                    <BackIcon/>
                </Link>
            )}

            <h1 className="section-title__title">{pageTitle}</h1>
        </div>
    );
}

export default SectionTitle;
