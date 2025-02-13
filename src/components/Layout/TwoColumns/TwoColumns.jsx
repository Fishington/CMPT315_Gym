import './TwoColumns.scss';

export default function TwoColumns({children, reverse}) {
    return (
        <section className={reverse ? 'two-columns__reverse' : 'two-columns'}>
            {children}
        </section>
    );
}
