import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './surats.css';
import { Surats } from '../../context/DataSurats';
import { useNavigate } from 'react-router-dom';

const ListSurat = () => {
    const surats = useContext(Surats);
    const navigate = useNavigate();

    const handleSurat = (id) => {
        navigate(`/${id}`);
    };

    // function toArabicNumeral(en) {
    //     return ("" + en).replace(/[0-9]/g, function(t) {
    //         return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t+1);
    //     });
    // }

    return (
        <div className="listSurats">
            <Container>
                <Row className='listSurats__items'>
                    {
                        surats.map(surat => (
                            <Col key={surat.nomor} sm={6} lg={4} onClick={() => handleSurat(surat.nomor)}>
                                <div className='listSurats__items-item'>
                                    <h2 className='item__nama'>{surat.nomor}. {surat.nama_latin}</h2>
                                    <h2 className='arab'>{surat.nama}</h2>
                                    <h2 className='item__arti'>"{surat.arti}"</h2>
                                    {/* <h2 className='item__number arab'>{toArabicNumeral(surat.nomor)})</h2> */}
                                </div>
                            </Col>
                        ))
                    }
                </Row>
            </Container>
        </div>
    )
}

export default ListSurat
