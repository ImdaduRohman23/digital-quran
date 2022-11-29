import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import NavbarComp from '../../components/NavbarComp/NavbarComp';
import './surat.css';

const Surat = () => {
    const [surat, setSurat] = useState([]);
    const [ayats, setAyats] = useState([]);
    const {id} = useParams();
    const url__surat = `https://quran-api.santrikoding.com/api/surah/${id}`;

    const getDataSurat = () => {
        axios.get(url__surat)
            .then(res => {
                setSurat(res.data);
                setAyats(res.data.ayat)
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

    return (
        <div className="surat">
            <NavbarComp />
            <Container>
                <div className="surat-container">
                    <div className="surat__name">
                        <h1 className='surat__name-arab arab'>{surat.nama}</h1>
                        <h1 className='surat__name-latin'>{surat.nama_latin}</h1>
                        <p className='surat__name-info'>{surat.tempat_turun} | 7 ayat</p>
                    </div>
                    <div className="surat__items">
                    {
                        ayats.map(ayat => (
                            // <h3 className="surat__items-item arab">{ayat.text} ({toArabicNumeral(ayat.juz)} : {toArabicNumeral(ayat.numberInSurah)})</h3>
                            <div className="surat__items-item">
                                <p>{ayat.nomor}</p>
                                <hr />
                                <h3 className="arab">{ayat.ar}</h3>
                                <p className='item__idn'>{ayat.idn}</p>
                            </div>
                        ))
                    }
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default Surat
