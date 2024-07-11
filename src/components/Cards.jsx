import React from 'react'
import { useState, useEffect } from 'react'
import '../App.css'
import { Link } from 'react-router-dom'

const Cards = () => {
  const [countries, setCountries] = useState([{ "flags": { "svg": "flag" }, "name": "India" }])

  async function get_country() {
    const response = await fetch('https://restcountries.com/v3.1/all')
    const data = await response.json()
    setCountries(data)
  }

  useEffect(() => {
    get_country()
  }, []);
  return (<>
    <div className="row row-cols-1 row-cols-md-3 g-4 maindiv p-0 m-0 mb-3">
      {countries.map((item) => {
        return <Link key={`${item.cca2}`} to={`/country?cca2=${item.cca2}`} className='linktag'><div className="col">
          <div className="card h-100">
            <img src={item.flags.png} className=" card-img-top img-height" alt="..." />
            <div className="card-body">
              <h5 className="card-title">{item.name.common}</h5>
              <p className="card-text">
                
                  {item.region}
                
              </p>
            </div>
          </div>
        </div>
        </Link>
      })
      }
    </div>
  </>
  )
}

export default Cards
