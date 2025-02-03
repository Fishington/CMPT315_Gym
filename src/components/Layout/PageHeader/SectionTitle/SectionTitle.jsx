import BackIcon from '@/components/Icons/BackIcon/index.js';
import {useNavigate} from 'react-router-dom';
import './SectionTitle.scss';

function SectionTitle({pageTitle, backTarget}) {
    const navigate = useNavigate();
    const {target, showBack} = backTarget;
    
    return (
        <div className="section-title">
            {showBack && (
                <>
                    <button className="section-title__back" onClick={() => navigate(target)}>
                        <BackIcon/>
                    </button>
                </>
            )}
            
            <h1 className='section-title__title'>{pageTitle}</h1>
        </div>
    );
}

export default SectionTitle;
