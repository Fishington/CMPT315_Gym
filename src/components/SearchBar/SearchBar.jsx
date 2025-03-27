import TextInput from '@/components/Form/TextInput/index.js';
import './SearchBar.scss'
import {useDispatch, useSelector} from "react-redux";
import {setSearchTerm} from "@/redux/actions/itemSearchActions";

export default function SearchBar({children}) {
    const dispatch = useDispatch();
    const searchTerm = useSelector((state) => state.itemSearch.searchTerm);

    return (
        <div className="search-bar">
            <div className="search-bar__search">

                <div className="search-bar__input">
                    <h3>Search:</h3>
                    <TextInput
                        value={searchTerm}
                        onChange={(e) => dispatch(setSearchTerm(e.target.value))}
                        variant="search-bar__text-input"
                    />
                </div>

                {children}
            </div>
        </div>
    );
}