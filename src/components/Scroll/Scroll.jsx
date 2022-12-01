import React, { useEffect, useState } from 'react';
import './scroll.css';

const Scroll = () => {
    const [toTop, setToTop] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if(window.scrollY > 100) {
                setToTop(true)
            } else {
                setToTop(false)
            }
        })
    }, []);

    const handleScroll = () => {
        window.scrollTo({
            top: 0,
            behavior: 'auto'
        })
    };

    return (
        <div>
            {
                toTop &&         
                <div className="scroll" onClick={handleScroll}>
                    <span className="scroll__value">
                        <i class="fa-solid fa-arrow-up"></i>
                    </span>
                </div>
            }
        </div>
    )
}

export default Scroll
