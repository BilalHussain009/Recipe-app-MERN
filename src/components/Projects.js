import React from 'react'
import { Link } from 'react-router-dom'
import Projectmodal from '../components/Projectmodal'
class Project extends React.Component {
    state = {
        selectedProject: undefined
    }
    selectedProject = (name) => {
        this.setState(() => ({ selectedProject: name }))
        console.log(this.state.selectedProject)
    }
    clearProjects = () => {
        this.setState({ selectedProject: undefined })
    }
    render() {
        return (
            <section className="projects">
                <Projectmodal selectedProject={this.state.selectedProject} clearProjects={this.clearProjects} />

                <h1 id="projects" >MY PROJECTS</h1>

                <ul className="cards">
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--fence"></div>
                            <div className="card__content">
                                <button className="card__title" onClick={() => this.selectedProject('Ecommerce')}>React Ecommerce Store</button>
                                <p className="card__text"><ul><li>ReactJS</li><li>Redux</li><li>Firebase</li><li>PayPal</li></ul></p>
                                <a href="https://github.com/BilalHussain009/React-Demo-Store-E-commerce" target='_blank'><button className="btn btn--block card__btn">GitHub</button></a>
                                <a href="http://maldinifashion.herokuapp.com/" target='_blank'><button className="btn btn--block card__btn">Demo</button></a>

                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--river"></div>
                            <div className="card__content">
                                <button className="card__title" onClick={() => this.selectedProject('Budget')}>Budget App</button>
                                <p className="card__text">A simple React App for managing common expenses. This app includes all the CRUD operations with firebase</p>
                                <a href="https://github.com/BilalHussain009/Expensify-app-bilal" target='_blank'><button className="btn btn--block card__btn">GitHub</button></a>

                                <a href="https://expensify-bilal-app.herokuapp.com/dashboard" target='_blank'><button className="btn btn--block card__btn">Demo</button></a>

                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--record"></div>
                            <div className="card__content">
                                <button className="card__title" onClick={() => this.selectedProject('Weather')}>Wether App</button>
                                <p className="card__text">Simple Weather app for finding the forecast and temperature using location. This was built with node.js</p>
                                <a href="https://github.com/BilalHussain009/node-weather-app" target='_blank'><button className="btn btn--block card__btn">GitHub</button></a>

                                <a href="https://weatherappbilal.herokuapp.com/" target='_blank'><button className="btn btn--block card__btn">Demo</button></a>
                            </div>
                        </div>
                    </li>

                </ul>
            </section>
        )
    }
}
export default Project