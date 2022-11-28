import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavbarComp from '../../components/NavbarComp/NavbarComp';
import { Surats } from '../../context/DataSurats';
import './surat.css';

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

    function toArabicNumeral(en) {
        return ("" + en).replace(/[0-9]/g, function(t) {
            return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t+1);
        });
    }

    console.log(ayats)
    console.log(surat)
    
    return (
        <div className="surat">
            <NavbarComp />
            <Container>
                <div className="surat-container">
                    <div className="surat__name">
                        <h1 className='arab'>{surat.name}</h1>
                    </div>
                    <hr />
                    <div className="surat__items">
                    {
                        ayats.map(ayat => (
                            <h3 className="surat__items-item arab">{ayat.text} ({toArabicNumeral(ayat.juz)} : {toArabicNumeral(ayat.numberInSurah)})</h3>
                        ))
                    }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Surat
