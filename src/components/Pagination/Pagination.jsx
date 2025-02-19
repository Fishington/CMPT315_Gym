import Button from '@/components/Button/index.js';

import './Pagination.scss'

export default function Pagination() {
    return (
        <div className="pagination">
            <Button color="white" size="pagination" disabled>{'<'}</Button>
            <Button color="active" size="pagination">1</Button>
            <Button color="white" size="pagination">2</Button>
            <Button color="white" size="pagination">3</Button>
            <Button color="white" size="pagination">{'>'}</Button>
        </div>
    );
}