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

    function toArabicNumeral(en) {
        return ("" + en).replace(/[0-9]/g, function(t) {
            return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t+1);
        });
    }

    const handleSurat = (id) => {
        navigate(`/${id}`);
    };

    return (
        <div className="listSurats">
            <Container>
                <Row className='listSurats__items'>
                    {
                        surats.map(surat => (
                            <Col key={surat.number} lg={4} onClick={() => handleSurat(surat.number)}>
                                <div className='listSurats__items-item'>
                                    <h2>{surat.name}</h2>
                                    <h2 className='item__number'>.{toArabicNumeral(surat.number)}</h2>
                                </div>
                            </Col>
                        ))
                    }
                    {/* <Col md={4} >
                        <div className='listSurats__item'>
                            <h2 className='item__no'>1</h2>
                            <div className="item__name">
                                <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                <h4 className='item__name-arti'>Pembukaan</h4>
                            </div>
                            <h2 className='item__arab'>الفاتحة</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4} >
                        <div className='listSurats__item'>
                            <h2 className='item__no'>1</h2>
                            <div className="item__name">
                                <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                <h4 className='item__name-arti'>Pembukaan</h4>
                            </div>
                            <h2 className='item__arab'>الفاتحة</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4} >
                        <div className='listSurats__item'>
                            <h2 className='item__no'>1</h2>
                            <div className="item__name">
                                <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                <h4 className='item__name-arti'>Pembukaan</h4>
                            </div>
                            <h2 className='item__arab'>الفاتحة</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4} >
                        <div className='listSurats__item'>
                            <h2 className='item__no'>1</h2>
                            <div className="item__name">
                                <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                <h4 className='item__name-arti'>Pembukaan</h4>
                            </div>
                            <h2 className='item__arab'>الفاتحة</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4} >
                        <div className='listSurats__item'>
                            <h2 className='item__no'>1</h2>
                            <div className="item__name">
                                <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                <h4 className='item__name-arti'>Pembukaan</h4>
                            </div>
                            <h2 className='item__arab'>الفاتحة</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4} >
                        <div className='listSurats__item'>
                            <h2 className='item__no'>1</h2>
                            <div className="item__name">
                                <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                <h4 className='item__name-arti'>Pembukaan</h4>
                            </div>
                            <h2 className='item__arab'>الفاتحة</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4} >
                        <div className='listSurats__item'>
                            <h2 className='item__no'>1</h2>
                            <div className="item__name">
                                <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                <h4 className='item__name-arti'>Pembukaan</h4>
                            </div>
                            <h2 className='item__arab'>الفاتحة</h2>
                        </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col>
                    <Col md={4}>
                        <div className='listSurats__item'>
                                <h2 className='item__no'>1</h2>
                                <div className="item__name">
                                    <h2 className='item__name-latin'>Al-Fatihah(7)</h2>
                                    <h4 className='item__name-arti'>Pembukaan</h4>
                                </div>
                                <h2 className='item__arab'>الفاتحة</h2>
                            </div>
                    </Col> */}
                </Row>
            </Container>
        </div>
    )
}

export default ListSurat
