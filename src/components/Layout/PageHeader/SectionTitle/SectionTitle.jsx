import BackIcon from '@/components/Icons/BackIcon/index.js';
import {useNavigate} from 'react-router-dom';
import './SectionTitle.scss';

function SectionTitle({pageTitle, section, backTarget}) {
    const navigate = useNavigate();
    const showBackButton = pageTitle !== section;
    
    return (
        <div className="section-title">
            {showBackButton && (
                <>
                    <button className="section-title__back" onClick={() => navigate(backTarget)}>
                        <BackIcon/>
                    </button>
                </>
            )}
            
            <h1 className='section-title__title'>{pageTitle}</h1>
        </div>
    );
}

export default SectionTitle;
