import React from 'react'
import SideBar from './SideBar'

const Header = () => {
  return (<>


    <nav className="navbar bg-black fixed-top font-monospace border-bottom">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#"><h3 className='mb-0'>Country Info</h3></a>
        <button className="navbar-toggler bg-white d-md-none" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
          <div className="offcanvas-header bg-black">
            <h5 className="offcanvas-title text-white" id="offcanvasNavbarLabel">Countries</h5>
            <button type="button" className="btn-close bg-white" data-bs-dismiss="offcanvas" aria-label="Close"></button>
          </div>
          <div className="offcanvas-body bg-black">
            <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
              <SideBar />
            </ul>
          </div>
        </div>
      </div>
    </nav>
  </>
  )
}

export default Header
