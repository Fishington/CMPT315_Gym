import './SectionTitle.scss';
import BackIcon from '../../../Icons/BackIcon/index.js';
import {useNavigate} from 'react-router-dom';

function SectionTitle({pageTitle, section, backTarget}) {
    const {target, showBack} = backTarget;
    const navigate = useNavigate();
    
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
