import React from 'react';
import Header from '../components/Header';
import SignUpSignInComponent from "../components/SignUpSignIn";

function Signup() {
  return (
    <div>
        <Header />
        <div className='wrapper'>
            <SignUpSignInComponent/>
        </div>
    </div>
  )
}

export default Signup