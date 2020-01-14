import React from 'react'
import AnchorLink from 'react-anchor-link-smooth-scroll'

const Navbar = () => (
    <ul className='nav'>
        <li><a target='_blank' href='https://github.com/BilalHussain009' ><img className='nav-link' src='https://i.ibb.co/k46XS1n/github-logo.png' />Github</a></li>
        <li><a target='_blank' href='https://stackoverflow.com/users/10436299/bilal' ><img className='nav-link' src='https://cdn.sstatic.net/Sites/stackoverflow/company/img/logos/so/so-icon.svg?v=f13ebeedfa9e' />Stackoverflow</a></li>
        <li><AnchorLink href='#projects' ><img className='nav-link' src='https://image.flaticon.com/icons/svg/1441/1441021.svg' />Projects</AnchorLink></li>
        <li><AnchorLink href='#contact' ><img className='nav-link' src='https://image.flaticon.com/icons/svg/1481/1481337.svg' />Contact</AnchorLink></li>
    </ul>

);
export default Navbar;