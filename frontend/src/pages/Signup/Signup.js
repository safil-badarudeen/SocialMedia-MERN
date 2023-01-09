import React from 'react'
import { Link } from 'react-router-dom'
import './signup.css'

function Signup() {
  return (
    <div className="mainContainerForSignUp">
        <div className="submainContainer">
            <div style={{flex:1,marginLeft:150,marginBottom:"170px"}}>
                <p className="logoText" >Soci<span className='part'>al</span></p>
                <p className="introText">Connect with your <span className='part' >family and friends</span></p>
            </div>
            <div style={{flex:3}}>
            <p className="createAccountText">Create New Account</p>
            <input type="text" className="inputText" placeholder="Username"/>
            <input type="text"  className="inputText" placeholder="Mobile number"/>
            <input type="email"  className="inputText" name="" id="" placeholder="email"/>
            <input type="password" className="inputText" placeholder="************"/>
            <button className='btnForSignUp'>Sign up</button>
            <Link to={'/login'}>
            <p style={{textAlign:'start',marginLeft:'30.6%'}}>Already have a account</p>
            </Link>
            </div>
        </div>
    </div>
  )
}

export default Signup