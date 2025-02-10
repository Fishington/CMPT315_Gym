import './TwoColumns.scss';

export default function TwoColumns({children}) {
    return (
        <section className="two-columns">
            {children}
        </section>
    );
}
