import axios from 'axios';
import React, { useEffect, useState } from 'react'

const Terjemah = () => {
    const [terjemahSurats, setTerjemahSurats] = useState([]);
    const url__terjemahSurats = 'https://quran-api.santrikoding.com/api/surah';

    const getTerjemahSurats = () => {
        axios.get(url__terjemahSurats)
            .then (res => console.log(res))
    };

    useEffect(() => {
        getTerjemahSurats();
    }, [])

    return (
        <div>
            <h1>Cek</h1>
        </div>
    )
}

export default Terjemah
