import './CardSection.scss';

export default function CardSection({children, title, tip, height}) {
    return (
        <section className="card-section">
            <div className="card-section__header">
                <h2 className="card-section__title">{title}</h2>

                {tip &&
                    <p className="card-section__tip">{tip}</p>
                }
            </div>

            <div 
                className='card-section__content'
                style={{height}}
            >
                {children}
            </div>
        </section>
    );
}
