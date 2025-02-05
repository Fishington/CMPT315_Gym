import './TwoColumns.scss';

export default function TwoColumns({children, secondColumnWidth}) {
    return (
        <section 
            className="two-columns"
            style={{gridTemplateColumns: `1fr ${secondColumnWidth}`}}
        >
            {children}
        </section>
    );
}
