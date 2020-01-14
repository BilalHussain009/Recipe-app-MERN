import React from 'react';
import Project from '../components/Projects';
import Navbar from '../components/Navbar';

import ContactForm from '../components/ContactForm';
const HomePage = () => (

        <div className='home'>
            <div className="area" >
                <Navbar />
                <ul className="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                </ul>
            </div >
            <div className='intro'>
                <h1>I'm Bilal Hussian.<br></br> I'm a Full Stack Web developer.</h1>
                <button className='introbtn'>Check Out My Work</button>

            </div>
            <Project />
            <ContactForm />

        </div>
)
export default HomePage