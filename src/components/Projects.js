import React from 'react'
import { Link } from 'react-router-dom'
import Projectmodal from '../components/Projectmodal'
import anime from "animejs"
class Project extends React.Component {
    componentDidUpdate = () => {

    }
    state = {
        selectedProject: undefined
    }

    selectedProject = (name) => {
        this.setState({ selectedProject: name })
        console.log(this.state.selectedProject)

    }
    clearProjects = () => {
        this.setState({ selectedProject: undefined })

    }

    projectInfo = {
        maldini: {
            name: 'Maldini Fashion',
            under: 'E-commerce Store',
            tagline: 'A Demo Store Built with react , redux , firebase and node and have integration of Paypal gateway',
            image: 'https://i.ibb.co/YWqmXqv/Capture.png',
            github: 'https://github.com/BilalHussain009/React-Demo-Store-E-commerce',
            link: 'http://maldinifashion.herokuapp.com/'

        },
        budget: {
            name: ' Budget App',
            under: 'Personal Finance Manager',
            tagline: 'Application Built for users to manage their daily expanses and keep track of what they are spending and how much theya are spending. Users can alse login with Google to save data on the cloud and access data from other devices',
            image: 'https://i.ibb.co/XCsqK67/pic.png',
            github: 'https://github.com/BilalHussain009/Expensify-app-bilal',
            link: 'https://expensify-bilal-app.herokuapp.com/'
        },
        weather: {
            name: 'Weahter App',
            under: 'Application for quick weather updates of your area',
            tagline: 'Weather app for user to quickly get their local forecast ,it was built with node.js and is using the dark sky api. Currently the app only fetches the weather of user entered location ,in future i am planning to add functunality to select location from a map',
            image: 'https://i.ibb.co/Z60pSWW/Weather-app.png',
            github: 'https://github.com/BilalHussain009/node-weather-app',
            link: 'https://weatherappbilal.herokuapp.com/'
        },
        recipe:{
            name:'Recipe App',
            under:'Find a recipe quick and adjust ingredients accoridng to servings',
            tagline:'This application is using a recipie Api to fetch and display recipes to user the user has option to manually ajust the ingredients and serving , user can also mark recipe as favourite for later use!',
            image:'https://i.ibb.co/25GXy45/Capture.png',
            github:'https://github.com/BilalHussain009/Recipe-app-MERN',
            link:'https://recipe-mern-app-bilal.herokuapp.com/'
        }
    }

    render() {
        return (
            <section className="projects">
                <Projectmodal projectInfo={this.projectInfo} selectedProject={this.state.selectedProject} clearProjects={this.clearProjects} />

                <h1 id="projects" >MY PROJECTS</h1>

                <ul className="cards">

                    <li className="cards__item">
                        <button className="card__title" onClick={() => this.selectedProject('Ecommerce')}>
                            <div className="card">
                                <div className="card__image card__image--fence"></div>
                                <div className="card__content">
                                    <button className="card__title" onClick={() => this.selectedProject('Ecommerce')}>React Store</button>
                                    <p className="card__text"><ul><li>ReactJS</li><li>Redux</li><li>Firebase</li><li>PayPal</li></ul></p>

                                </div>
                            </div>
                        </button>
                    </li>

                    <li className="cards__item">
                        <button className="card__title" onClick={() => this.selectedProject('Budget')}>

                            <div className="card">
                                <div className="card__image card__image--river"></div>
                                <div className="card__content">
                                    <a className="card__title" onClick={() => this.selectedProject('Budget')}>Budget App</a>
                                    <p className="card__text"><ul><li>Javascript</li><li>CSS</li><li>HTML</li><li>Jquery</li></ul></p>


                                </div>
                            </div>
                        </button>
                    </li>
                    <li className="cards__item">
                        <button className="card__title" onClick={() => this.selectedProject('Weather')}>

                            <div className="card">
                                <div className="card__image card__image--record"></div>
                                <div className="card__content">
                                    <button className="card__title" onClick={() => this.selectedProject('Weather')}>Wether App</button>
                                    <p className="card__text"><ul><li>NodeJS</li><li>Express</li><li>Darksky API</li><li>SASS</li></ul></p>

                                </div>
                            </div>
                        </button>
                    </li>
                    <li className="cards__item">
                        <button className="card__title" onClick={() => this.selectedProject('Recipe')}>

                            <div className="card">
                                <div className="card__image card__image--kekw"></div>
                                <div className="card__content">
                                    <button className="card__title" onClick={() => this.selectedProject('Recipe')}>Recipe App</button>
                                    <p className="card__text"><ul><li>Axios</li><li>ReactJS</li><li>Font-Awsome</li><li>SASS</li></ul></p>

                                </div>
                            </div>
                        </button>
                    </li>


                </ul>
            </section>
        )
    }
}
export default Project