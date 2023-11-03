import React, { useState } from 'react'
import './Header.css'
import headerLogo from '../../Assets/logo.svg';
function Header() {

    const [score, setScore] = useState(0);
  return (
    <div className="header-wrapper">
        <div className="logo-wrapper">
            <img src={headerLogo} alt="header logo" />
        </div>
            <div className="score-card">
                <p className='score-title'>score</p>
                <p className='score'>{score}</p>
            </div>
    </div>
  )
}

export default Header