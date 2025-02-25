import {Link} from 'react-router-dom';
import './Button.scss';

export default function Button({children, color, size, to, onClick, image, ...props}) {
    const classNames = ['button'];
    if (color) classNames.push(`button--${color}`);
    if (size) classNames.push(`button--${size}`);
    
    const classes = classNames.join(' ');
    const styles = image ? {
        backgroundImage: `linear-gradient(180deg, rgba(0, 0, 0, 0.00) 55%, rgba(0, 0, 0, 0.75) 100%),url(${image})`
    } : {}
    
    if (to) {
        return (
            <Link
                to={to}
                className={classes}
                style={image ? styles : {}}
                {...props}
            >
                {children}
            </Link>
        )
    }

    return (
        <button
            className={classes}
            onClick={onClick}
            style={image ? styles : {}}
            {...props}
        >
            {children}
        </button>
    );
}
