import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

const Country = () => {
    const queryParams = new URLSearchParams(window.location.search)
    const cca2 = queryParams.get("cca2")
    const [countries, setCountries] = useState([{ "flags": { "svg": "flag" }, "name": "India", "maps": { "googleMaps": "maps" }, "capitalInfo": { "latlng": [22, 77] } }])
    const [latlng, setLatLng] = useState([])
    const [tf, setTF] = useState(false)

    async function get_country() {
        const response = await fetch(`https://restcountries.com/v3.1/alpha/${cca2}`)
        const data = await response.json()
        setCountries(data)
        setLatLng(data[0].capitalInfo.latlng)
        setTF(true)
    }

    useEffect(() => {
        get_country()
    });
    return (
        <>
            <div className='p-3'>
                <img src={countries[0].flags.png} alt="" className='' />
                <div className='text-light style'>{countries[0].name.common}</div>
                <div class="accordion mb-3" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                Official Name
                            </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>{countries[0].name.official}</strong>
                            </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Capital
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>{countries[0].capital}</strong></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Region
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>{countries[0].region}</strong></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Area
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>{countries[0].area} sq.km</strong></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Population
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>{countries[0].population} Peoples</strong></div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header">
                            <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                                Continent
                            </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse" data-bs-parent="#accordionExample">
                            <div class="accordion-body">
                                <strong>{countries[0].continents}</strong></div>
                        </div>
                    </div>
                    
                </div>
                {tf && <MapContainer center={latlng} zoom={13} scrollWheelZoom={false}>
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    <Marker position={latlng}>
                        <Popup>
                            {countries[0].name.common}
                        </Popup>
                    </Marker>
                </MapContainer>}
            </div>
        </>
    )
}

export default Country
