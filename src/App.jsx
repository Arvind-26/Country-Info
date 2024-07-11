import './App.css'
import Cards from './components/Cards'
import Footer from './components/Footer';
import Header from './components/Header'
import Map from './components/Map';
import Nav from './components/Nav';
import SideBar from './components/SideBar';

function App() {
  return (
    <>
      <div className="row">
        <div className="col p-0 fixed-top">
          <Header />
        </div>
      </div>
      <div className="row maindiv">
        <div className="col col-md-10 p-0 pt-5 px-2 border-end pb-3">
          <div className=' border-bottom'>
            <Map />
          </div>
          <div>
            <Nav/>
          </div>
        </div>
        <div className="col p-0 hit sticky-bottom bg-black overflow-auto d-md-block d-none">
          <SideBar />
        </div>
      </div>
      <div className="row">
        <div className="col p-0 border-top">
          <Footer />
        </div>
      </div>
    </>
  )
}

export default App