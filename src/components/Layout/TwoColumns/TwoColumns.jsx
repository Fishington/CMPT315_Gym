import './TwoColumns.scss';
import section from '@/components/Layout/Section/index.js';

export default function TwoColumns({children, reverse}) {
    return (
        <section className={reverse ? 'two-columns__reverse' : 'two-columns'}>
            {children}
        </section>
    );
}

TwoColumns.Column = function TwoColumns({children}) {
    return (
        <section>
            {children}
        </section>
    )
}