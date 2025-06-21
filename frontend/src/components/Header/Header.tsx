import './Header.css'
import assets from '../../assets'
import { useContext } from 'react'
import { StoreContext } from '../../context/StoreContext'

const Header = () => {
  const {name} = useContext(StoreContext)
  return (
    <div className="header-slider">
      <div className="slider-track">
        <div className="slide"><img src={assets.img1} alt="Slide 1" /></div>
        <div className="slide"><img src={assets.img2} alt="Slide 2" /></div>
        <div className="slide"><img src={assets.img3} alt="Slide 3" /></div>
        <div className="slide"><img src={assets.img4} alt="Slide 4" /></div>
        <div className="slide"><img src={assets.img5} alt="Slide 5" /></div>
      </div>
      <div className='overlay_text'>
          <h1 className='txt1'>Hello {name} </h1>
          <h2 className='txt2'>“Catch the Wave. Ride the Cast”</h2>
          <h4 className='txt3'>Rent boats. Join live fish auctions. Support local fishermen, all in one platform.</h4>
          <h2 className='txt4'>“Empowering communities. One boat, one bid at a time.”</h2>
          <button>Register</button>
      </div>
    </div>
  )
}

export default Header;
