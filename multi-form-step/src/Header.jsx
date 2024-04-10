import React from 'react'
import headerImg from './assets/bg-sidebar-mobile.svg'
import { Link } from 'react-router-dom';

const Header = () => {
  return (
      <header className="header">
        <nav>
          <ol>
            <li>
              <Link to="/info" >
                <span className="circle">1</span>
                <div><p>STEP 1</p>
                <p>YOUR INFO</p>
              </div></Link>
            </li>
            <li>
              <Link to="/plan" >
                <span>2</span>
                <div><p>STEP 2</p>
                <p>SELECT PLAN</p>
              </div></Link>
            </li>
            <li>
              <Link to="/addon" >
                <span>3</span>
                <div><p>STEP 3</p>
                <p>ADD-ONS</p>
              </div></Link>
            </li>
            <li>
              <Link to="/summ" >
                <span>4</span>
                <div><p>STEP 4</p>
                <p>SUMMARY</p>
              </div></Link>
            </li>

          </ol>
        </nav>
    </header>
  )
} 

export default Header;
