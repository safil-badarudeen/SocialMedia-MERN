import React from 'react'
import {Link} from 'react-router-dom'
import './login.css'

function Login() {
  return (
    <div className="mainContainerForSignUp">
    <div className="submainContainer">
        <div style={{flex:1,marginLeft:150,marginBottom:"170px"}}>
            <p className="logoText" >Soci<span className='part'>al</span></p>
            <p className="introText">Connect with your <span className='part' >family and friends</span></p>
        </div>
        <div style={{flex:3}}>
        <p className="createAccountText">Login to your Account</p>

        <input type="email"  className="inputText" name="" id="" placeholder="email"/>
        <input type="password" className="inputText" placeholder="************"/>
        <button className='btnForSignUp'>Log In</button>
        <Link to={'/signup'}>
        <p style={{textAlign:'start',marginLeft:'30.6%'}}>Dont have an account</p>
        </Link>
        </div>
    </div>
</div>
  )
}

export default Login