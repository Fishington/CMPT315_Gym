import "./Card.scss";

export default function Card({children, padding}) {
    return (
        <div 
            className='card'
            style={{padding: `${padding}`}}
        >
            {children}
        </div>
    );
}
