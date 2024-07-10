import React, { useEffect, useRef, useState } from 'react'
import Cards from './Cards'
import Country from './Country'
import '../App.css'
import { BrowserRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom'

const Nav = () => {
    const [url, setURL] = useState("\country?cca2=IN")
    const home = useRef()
    const country = useRef()
    const location = useLocation();
    
    useEffect(() => {
        if (location.pathname === '/') {
            home.current.classList.add('active-button');
            country.current.classList.remove('active-button');
        } else {
            setURL(location)
            home.current.classList.remove('active-button');
            country.current.classList.add('active-button');
        }
    }, [location])
    return (
        <>
            <div class="btn-group pt-3" role="group" aria-label="Basic example">
                <Link to="/" className='linktag'><button type="button" ref={home} id='home-but' class="btn button-col m-1 mb-0">Home</button></Link>
                <Link to={url} className='linktag'><button ref={country} type="button" id='cont-but' class="btn button-col m-1 mb-0">Country</button></Link>
            </div>
            <div className="tab-content mt-0 pt-0" id="pills-tabContent">
                <div className="tab-pane fade show content-col active mt-0 pt-0" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                    <Routes>
                        <Route exact path="/" element={<Cards />} />
                        <Route exact path="/country" element={<Country />} />
                    </Routes>
                </div>
            </div>
        </>
    )
}

export default Nav
