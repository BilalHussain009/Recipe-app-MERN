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
                               
                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--river"></div>
                            <div className="card__content">
                                <button className="card__title" onClick={() => this.selectedProject('Budget')}>Budget App</button>
                                <p className="card__text"><ul><li>Javascript</li><li>CSS</li><li>HTML</li><li>Jquery</li></ul></p>
                               

                            </div>
                        </div>
                    </li>
                    <li className="cards__item">
                        <div className="card">
                            <div className="card__image card__image--record"></div>
                            <div className="card__content">
                                <button className="card__title" onClick={() => this.selectedProject('Weather')}>Wether App</button>
                                <p className="card__text"><ul><li>NodeJS</li><li>Express</li><li>Darksky API</li><li>SASS</li></ul></p>

                            </div>
                        </div>
                    </li>

                </ul>
            </section>
        )
    }
}
export default Project