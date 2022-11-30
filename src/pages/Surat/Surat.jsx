import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import Footer from '../../components/Footer/Footer';
import Loading from '../../components/Loading/Loading';
import NavbarComp from '../../components/NavbarComp/NavbarComp';
import './surat.css';

const Surat = () => {
    const [surat, setSurat] = useState([]);
    const [ayats, setAyats] = useState([]);
    const [suratNext, SetSuratNext] = useState([]);
    const [suratPrev, SetSuratPrev] = useState([]);
    const {id} = useParams();
    const [idFix, setIdFix] = useState(id);
    const [loading, setLoading] = useState(false);
    const url__surat = `https://quran-api.santrikoding.com/api/surah/${idFix}`;

    const getDataSurat = () => {
        setLoading(true);
        axios.get(url__surat)
            .then(res => {
                setSurat(res.data);
                setAyats(res.data.ayat);
                SetSuratNext(res.data.surat_selanjutnya);
                SetSuratPrev(res.data.surat_sebelumnya);
                setLoading(false);
            })
            .catch(err => console.log(err))
    };

    useEffect(() => {
        getDataSurat();
        // eslint-disable-next-line
    }, [idFix]);

    const handlePrev = () => {
        setIdFix(`${suratPrev.id}`);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    const handleNext = () => {
        setIdFix(`${suratNext.id}`);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth'
        });
    };

    // function toArabicNumeral(en) {
    //     return ("" + en).replace(/[0-9]/g, function(t) {
    //         return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t+1);
    //     });
    // }

    return (
        <div className="surat">
            <NavbarComp />
            {
                !!loading? <Loading /> : 
                <Container>
                    <div className="surat-container">
                        <div className="surat__name">
                            <h1 className='surat__name-arab arab'>{surat.nama}</h1>
                            <h1 className='surat__name-latin'>{surat.nama_latin}</h1>
                            <p className='surat__name-info'> {surat.tempat_turun} | {surat.jumlah_ayat} ayat</p>
                        </div>
                        <div className="surat__items">
                        {
                            ayats.map(ayat => (
                                // <h3 className="surat__items-item arab">{ayat.text} ({toArabicNumeral(ayat.juz)} : {toArabicNumeral(ayat.numberInSurah)})</h3>
                                <div key={ayat.id} className="surat__items-item">
                                    <p>{ayat.nomor}</p>
                                    <hr />
                                    <h3 className="arab">{ayat.ar}</h3>
                                    <p className='item__idn'>{ayat.idn}</p>
                                </div>
                            ))
                        }
                        </div>
                        <div className="surat__pagination">
                            {
                                !suratPrev? <div></div> :
                                <button className="surat__pagination-button" onClick={handlePrev}>Sebelumnya</button>
                            }
                            {
                                !suratNext? <div></div> :
                                <button className="surat__pagination-button" onClick={handleNext}>Selanjutnya</button>
                            }
                        </div>
                    </div>
                </Container>
            }

            <Footer />
        </div>
    )
}

export default Surat
