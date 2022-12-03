import React, { useContext} from 'react';
import './navbar.css';
import Container from 'react-bootstrap/Container';
import { Search } from '../../context/DataSearch';

const NavbarComp = () => {
    const context = useContext(Search);

    return (
        <div className='navbarComp'>
            <Container>
                <div className="navbarComp__content">
                    <h1>D'Quran</h1>
                    <div className="navbarComp__content-search">
                        <input value={context.search} className='search__input' onChange={(e) => context.setSearch(e.target.value) } type="text" placeholder="Cari surat . . ."></input>
                        <button className='search__button'><i className="fa-solid fa-magnifying-glass"></i></button>
                    </div>
                </div>
            </Container>
        </div>
    )
}

export default NavbarComp
