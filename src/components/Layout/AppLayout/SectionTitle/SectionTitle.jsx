import './SectionTitle.scss';
import BackIcon from '../../../Icons/BackIcon/index.js';
import {useNavigate} from 'react-router-dom';

function SectionTitle({pageTitle, section}) {
    const navigate = useNavigate();
    
    const showBackButton = pageTitle !== section;
    
    return (
        <div className="section-title">
            {showBackButton && (
                <>
                    <button className="section-title__back" onClick={() => navigate(-1)}>
                        <BackIcon/>
                    </button>
                </>
            )}
            <h1 className='section-title__title'>{pageTitle}</h1>
        </div>
    );
}

export default SectionTitle;
