import "./Card.scss";

export default function Card({children, variant}) {
    return (
        <div className={`card ${variant}`}>
            {children}
        </div>
    );
}
