import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import { Helmet } from "react-helmet"

const Navbar = () => (
    <header className="main-header">
        <Helmet>
            <script>
                {`const header = document.querySelector('.main-header');

window.addEventListener('scroll', () => {
  const scrollPos = window.scrollY;
  if(scrollPos > 10){
    header.classList.add('scrolled');
  } else {
    header.classList.remove('scrolled');
  }
})`}
            </script>
        </Helmet>
        <div className="logo">
            <a href="#">PORTFOLIO</a>
        </div>

        <input type="checkbox" className="menu-btn" id="menu-btn"></input>
        <label htmlFor="menu-btn" className="menu-icon">
            <span className="menu-icon__line"></span>
        </label>

        <ul className="nav-links">
            <li className="nav-link">
                <AnchorLink href="#projects">PROJECTS</AnchorLink>
            </li>
            <li className="nav-link">
            <AnchorLink href='#contact'>CONTACT</AnchorLink>
            </li>
            <li className="nav-link">
                <a href="https://github.com/BilalHussain009" target='_blank'>GITHUB</a>
            </li>
            <li className="nav-link">
                <a href="https://stackoverflow.com/users/10436299/bilal" target='_blank'>STACKOVERFLOW</a>
            </li>
        </ul>
    </header>

);
export default Navbar;