import BackIcon from '@/components/Icons/BackIcon/index.js';
import './SectionTitle.scss';
import {useNavigate} from 'react-router-dom';

function SectionTitle({pageTitle, showBack, backTarget}) {
    const navigate = useNavigate();
    
    return (
        <div className="section-title">
            {showBack && (
                <button
                    className="section-title__back"
                    onClick={() => navigate(backTarget ? backTarget : -1)}
                >
                    <BackIcon/>
                </button>
            )}

            <h1 className="section-title__title">{pageTitle}</h1>
        </div>
    );
}

export default SectionTitle;
