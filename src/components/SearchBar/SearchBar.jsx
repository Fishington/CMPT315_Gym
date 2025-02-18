import TextInput from '@/components/Form/TextInput/index.js';
import Button from '@/components/Button/index.js';

import './SearchBar.scss'

export default function SearchBar({searchTerm, setSearchTerm}) {
    return (
        <div className="search-bar">
            <TextInput
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                variant="search-bar__text-input"/>

            <Button color="blue" size="medium">Filter</Button>
        </div>
    );
}