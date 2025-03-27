const initialState = {
    searchTerm     : '',
    selectedFilters: {},
    currentPage    : 1,
    totalPages     : 1,
    itemsPerPage   : 30,
};

export default function itemSearchReducer(state = initialState, action) {
    switch (action.type) {
        case 'setSearchTerm':
            return {...state, searchTerm: action.payload};

        case 'setSelectedFilters':
            return {...state, selectedFilters: action.payload};

        case 'updateFilter': {
            const {groupName, option, isChecked} = action.payload;
            const currentGroup = state.selectedFilters[groupName] || [];

            const updatedGroup = isChecked
                ? [...currentGroup, option]
                : currentGroup.filter((item) => item !== option);

            return {
                ...state,
                selectedFilters: {
                    ...state.selectedFilters,
                    [groupName]: updatedGroup
                }
            };
        }

        case 'setCurrentPage':
            return {...state, currentPage: action.payload};

        case 'setTotalPages':
            return {...state, totalPages: action.payload};

        case 'setItemsPerPage':
            return {...state, itemsPerPage: action.payload};

        default:
            return state;
    }
}