import React from 'react'
import './Header.css'
import headerLogo from '../../Assets/logo.svg';
import { useSelector } from 'react-redux';
function Header() {
  let score = useSelector(state => state.score);
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