export const setSearchTerm = (term) => ({
    type: "setSearchTerm",
    payload: term,
});

export const setSelectedFilters = (filters) => ({
    type: "setSelectedFilters",
    payload: filters,
});

export const updateFilter = (groupName, option, isChecked) => ({
    type: "updateFilter",
    payload: { groupName, option, isChecked },
});

export const setCurrentPage = (page) => ({
    type: "setCurrentPage",
    payload: page,
});

export const setTotalPages = (total) => ({
    type: "setTotalPages",
    payload: total,
});

export const setItemsPerPage = (count) => ({
    type: "setItemsPerPage",
    payload: count,
});