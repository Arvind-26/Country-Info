import React from 'react'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Routes, BrowserRouter } from 'react-router-dom'

const SideBar = () => {
  const [countries, setCountries] = useState([{ "flags": { "svg": "flag" }, "name": "India", "capitalInfo": { "latlng": [28.6, 77.2] } }])

  async function get_country() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    setCountries(data)
  }

  useEffect(() => {
    get_country()
  }, []);

  return (<>
      <nav className="nav flex-column p-lg-1 bg-black mt-3 mx-2">
        {countries.map((item) => {
          return <span key={item.cca2} className=' text-light'><NavLink
            to={`/country?cca2=${item.cca2}`}
            style={({ isActive }) => ({
              color: isActive
                ? "white"
                : "white",
            })}
          >{item.name.common}
          </NavLink></span>
        })}
      </nav>
  </>
  )
}

export default SideBar