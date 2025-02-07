import {Link} from 'react-router-dom';
import './Button.scss';

export default function Button({children, color, size, href, onClick, type = 'button', ariaLabel, image, disabled}) {
    const Component = href ? Link : 'button';

    return (
        <Component
            to={href}
            type={!href ? type : undefined}
            className={`button 
                ${color ? `button--${color}` : ''} 
                ${size ? `button--${size}` : ''}
            `.trim()}
            style={image ? {
                backgroundImage: `
                    linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55%, rgba(0, 0, 0, 0.75) 100%),
                    url(${image})`,
            } : {}}
            onClick={!href ? onClick : undefined}
            aria-label={ariaLabel}
            disabled={disabled ? true : undefined}
        >
            {children}
        </Component>
    );
}
