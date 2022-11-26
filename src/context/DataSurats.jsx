import axios from 'axios';
import React, { createContext, useEffect, useState } from 'react';
export const Surats = createContext();

const DataSurats = ({children}) => {
    const [surats, setSurats] = useState([]);
    const url_surats = 'http://api.alquran.cloud/v1/surah';

    const getDataSurats = () => {
        axios.get(url_surats)
            .then(res => setSurats(res.data.data))
    };

    useEffect(() => {
        getDataSurats();
    }, []);

    return (
        <Surats.Provider value={surats}>
            {children}
        </Surats.Provider>
    )
}

export default DataSurats
