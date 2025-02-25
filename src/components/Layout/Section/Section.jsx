import section from '@/components/Layout/Section/index.js';
import './Section.scss';

export default function Section({children, title, tip}) {
    return (
        <section className="section">
            {title &&
                <div className="section__header">
                    <h2 className="section__title">{title}</h2>

                    {tip &&
                        <p className="section__tip">{tip}</p>
                    }
                </div>
            }

            <div className="section__content">
                {children}
            </div>
        </section>
    );
}

Section.Column = function Section({children}) {
    return (
        <div>
            {children}
        </div>
    )
}