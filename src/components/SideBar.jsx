import React from 'react'
import '../App.css'
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, NavLink, Routes, BrowserRouter } from 'react-router-dom'

const SideBar = () => {
  const [countries, setCountries] = useState([{ "flags": { "svg": "flag" }, "name": "India", "capitalInfo": { "latlng": [28.6, 77.2] } }])
  const [search, setSearch] = useState('')

  async function get_country() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    setCountries(data)
  }

  useEffect(() => {
    get_country()
  }, []);
  return (<>
    <form className="d-flex m-2" role="search">
      <input className="form-control me-2" onChange={(e) => setSearch(e.target.value.toLowerCase())} type="search" placeholder="Search" aria-label="Search" />
    </form>
    <nav className="nav flex-column p-lg-1 bg-black mt-3 mx-2">
      {countries.filter((item) => {
        return search.toLowerCase() === '' ? item : item.name.common.toLowerCase().includes(search)
      }).map((item) => {
        return <span key={`${item.cca2}`} className=' text-light remove-underline'><NavLink
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