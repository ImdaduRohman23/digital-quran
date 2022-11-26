import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const Surat = (props) => {
    const [surat, setSurat] = useState([]);
    const [ayats, setAyats] = useState([]);
    const {id} = useParams();

    const url__surat = `http://api.alquran.cloud/v1/surah/${id}`;

    const getDataSurat = () => {
        axios.get(url__surat)
            .then(res => {
                setSurat(res.data.data);
                setAyats(res.data.data.ayahs)
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getDataSurat();
        // eslint-disable-next-line
    }, []);

    console.log(ayats)
    
    return (
        <div>
            <h2>Surat</h2>
            {
                ayats.map(ayat => (
                    <p>{ayat.text}</p>
                ))
            }
        </div>
    )
}

export default Surat
