import React, { useEffect, useState, useRef } from 'react'
import '../App.css'

const Map = () => {
    const [countries, setCountries] = useState([{ "flags": { "svg": "flag" }, "name": "India"}])
    const nameref = useRef()
    const [index, setIndex] = useState(0)

    async function get_country() {
        const response = await fetch('https://restcountries.com/v3.1/all')
        const data = await response.json()
        setCountries(data)
    }

    useEffect(() => {
        get_country()
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % countries.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [countries.length])

    useEffect(() => {
        nameref.current.classList.remove('slide-right')
        document.getElementById('flag').classList.remove('slide-right')
        document.getElementById('capital').classList.remove('slide-right')
        nameref.current.offsetWidth
        document.getElementById('capital').offsetWidth
        document.getElementById('flag').offsetWidth
        nameref.current.classList.add('slide-right')
        document.getElementById('capital').classList.add('slide-right')
        document.getElementById('flag').classList.add('slide-right')
    }, [index])

    return (
        <div className=''>
            <img id='flag' src={countries[index].flags.png} className=' img-fluid p-4 vignette slide-right position-relative' alt="map-image" />
            <div ref={nameref} className=' z-3 text-white position-absolute slide-right info-div mt-5'>
                {countries[index].name.common}
            </div>
            <div id='capital' className='z-3 text-white position-absolute slide-right info-div2 mt-5'>
                <div>
                    Capital - {" " + countries[index].capital}
                </div>
                <div>
                    Region - {" " + countries[index].region}
                </div>
                <div>
                    Area - {" " + countries[index].area},
                </div>
            </div>
        </div>
    )
}

export default Map