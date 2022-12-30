import React from 'react'
import './Navbar.css'
import search from '../images/search.png'

const Navbar = () => {
  return (
    <div className="mainNavbar">
        <div>
                 <p>Social</p>
        </div>
        <div>
           <div>
              <img src={`${search}`} alt=""></img>
              <input type="text" name="" id=""></input>
           </div>

        </div>
        <div>
             <img src='' alt=""></img>
             <img src='' alt=""></img>
             <div>
             <img src='' alt=""></img>
             <p>Safil</p>
             </div>
        </div>
    </div>
  )
}

export default Navbar