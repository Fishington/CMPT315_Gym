import React from 'react';
import TextInput from '@/components/Form/TextInput';
import './ItemSearch.scss';
import Button from '@/components/Button/index.js';

function ItemSearch({children, searchTerm, setSearchTerm, onNextPage, onPreviousPage, onJumpPage}) {
    return (
        <>
            <div className="item-search__search-bar">
                <TextInput
                    value={searchTerm}
                    onChange={(e) => (setSearchTerm(e.target.value))}
                    variant="item-search__text-input"
                />
                <Button color="blue" size="medium">
                    Filter
                </Button>
            </div>

            <div>
                {children}
            </div>

            <div className="item-search__pagination">
                <Button color="white" size="pagination" disabled>{'<'}</Button>
                <Button color="active" size="pagination">1</Button>
                <Button color="white" size="pagination">2</Button>
                <Button color="white" size="pagination">3</Button>
                <Button color="white" size="pagination">4</Button>
                <Button color="white" size="pagination">5</Button>
                <Button color="white" size="pagination">{'>'}</Button>
            </div>
        </>
    );
}

export default ItemSearch;