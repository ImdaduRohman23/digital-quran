import React, { createContext, useState} from 'react';
export const Search = createContext();

const DataSearch = ({children}) => {
    const [search, setSearch] = useState('');

    // const hanldeSubmit = (e) => {
    //     e.preventDefault();
    //     console.log(search);
    //     setSearch('');
    // }

    return (
        <Search.Provider value={{search, setSearch}}>
            {children}
        </Search.Provider>
    )
}

export default DataSearch
