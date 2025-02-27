import {useItemSearch} from "@/context/ItemSearchContext.jsx";
import TextInput from '@/components/Form/TextInput/index.js';

import './SearchBar.scss'

export default function SearchBar({children}) {
    const {searchTerm, setSearchTerm, searchBarRef} = useItemSearch();

    return (
        <div className="search-bar" ref={searchBarRef}>
            <div className="search-bar__search">

                <div className="search-bar__input">
                    <h3>Search:</h3>
                    <TextInput
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        variant="search-bar__text-input"
                    />
                </div>

                {children}
            </div>
        </div>
    );
}