import TextInput from '@/components/Form/TextInput';
import Button from '@/components/Button/index.js';

import './ItemSearch.scss';
import React from 'react';

function ItemSearch({children, searchTerm, setSearchTerm, create}) {
    return (
        <>
            <div className="item-search__search-bar">
                <div className='item-search__main-input'>
                    <TextInput
                        value={searchTerm}
                        onChange={(e) => (setSearchTerm(e.target.value))}
                        variant="item-search__text-input"
                    />
                    
                    <Button color="blue" size="medium">
                        Filter
                    </Button>
                </div>
                
                {create &&
                    <Button color="blue" size="medium" href={`/workout/${create}s/create`}>
                        Create {create}
                    </Button>
                }
            </div>

            <div>
                {children}
            </div>

            <div className="item-search__pagination">
                <Button color="white" size="pagination" disabled>{'<'}</Button>
                <Button color="active" size="pagination">1</Button>
                <Button color="white" size="pagination">2</Button>
                <Button color="white" size="pagination">3</Button>
                <Button color="white" size="pagination">{'>'}</Button>
            </div>
        </>
    );
}

export default ItemSearch;