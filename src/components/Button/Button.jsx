import {Link} from 'react-router-dom';
import "./Button.scss";

export default function Button({children, color, size, href, onClick, type, ariaLabel}) {
    return (
        <>
            {href ? (
                <Link to={href}
                   className={`button 
                        ${color && `button--${color}`} 
                        ${size && `button--${size}`}`} 
                    aria-label={ariaLabel}
                >
                    {children}
                </Link>
            ) : (
                <button type={type} 
                        className={`button 
                            ${color && `button--${color}`}
                            ${size && `button--${size}`}
                        `} 
                        onClick={onClick} 
                        aria-label={ariaLabel}
                >
                    {children}
                </button>
            )}
        </>
    );
}
