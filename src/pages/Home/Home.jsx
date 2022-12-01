import React from 'react'
import Footer from '../../components/Footer/Footer'
import Header from '../../components/Header/Header'
import ListSurat from '../../components/ListSurat/ListSurat'
import NavbarComp from '../../components/NavbarComp/NavbarComp'
import Scroll from '../../components/Scroll/Scroll'
import './home.css'

const Home = () => {
    return (
        <div className="home">
            <NavbarComp />
            <Header />
            <Scroll />
            <ListSurat />
            <Footer />
        </div>
    )
}

export default Home
