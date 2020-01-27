import React from 'react';
import Modal from 'react-modal';
const customStyles = {
    content: {
        top: '50%',
        left: '50%',
        right: 'auto',
        bottom: 'auto',
        marginRight: '-50%',
        transform: 'translate(-50%, -50%)'
    }
};

class Projectmodal extends React.Component {
    conditionalName = () => {
        switch (this.props.selectedProject) {
            case 'Ecommerce':
                return this.props.projectInfo.maldini.name
            case 'Budget':
                return this.props.projectInfo.budget.name

            case 'Weather':
                return this.props.projectInfo.weather.name
            case undefined:
                return 'Closing'

        }
    }
    conditionalUnder = () => {
        switch (this.props.selectedProject) {
            case 'Ecommerce':
                return this.props.projectInfo.maldini.under
            case 'Budget':
                return this.props.projectInfo.budget.under

            case 'Weather':
                return this.props.projectInfo.weather.under
            case undefined:
                return 'Closing'

        }
    }
    conditionalTagline = () => {
        switch (this.props.selectedProject) {
            case 'Ecommerce':
                return this.props.projectInfo.maldini.tagline
            case 'Budget':
                return this.props.projectInfo.budget.tagline

            case 'Weather':
                return this.props.projectInfo.weather.tagline
            case undefined:
                return 'Closing'

        }
    }
    conditionalImage = () => {
        switch (this.props.selectedProject) {
            case 'Ecommerce':
                return this.props.projectInfo.maldini.image
            case 'Budget':
                return this.props.projectInfo.budget.image

            case 'Weather':
                return this.props.projectInfo.weather.image
            case undefined:
                return 'Closing'

        }
    }
    render() {
        return (
            <Modal
                className='Modal'
                isOpen={!!this.props.selectedProject}
                contnetLabel='Selected Option'
                onRequestClose={this.props.clearProjects}
                ariaHideApp={false}
                closeTimeoutMS={1000}
                shouldReturnFocusAfterClose={true}
            >
                <div className='Modal-image'>
                    <img src={this.conditionalImage()}></img>
                </div>
                <br></br>
                <div className='Modal-Description'>
                    <h1>{this.conditionalName()}</h1>
                    <h2>{this.conditionalUnder()}</h2>
                    <hr></hr>
                    <p>{this.conditionalTagline()}</p>
                    <a href='#' className='modal-github'>Github <img className='svg' src="https://img.icons8.com/windows/32/000000/github.png"></img></a>
                    <a href='#' className='modal-github'>Website<img className='svg' src="data:image/svg+xml;base64,PD94bWwgdmVyc2lvbj0iMS4wIiA/PjwhRE9DVFlQRSBzdmcgIFBVQkxJQyAnLS8vVzNDLy9EVEQgU1ZHIDEuMS8vRU4nICAnaHR0cDovL3d3dy53My5vcmcvR3JhcGhpY3MvU1ZHLzEuMS9EVEQvc3ZnMTEuZHRkJz48c3ZnIGVuYWJsZS1iYWNrZ3JvdW5kPSJuZXcgMCAwIDUwIDUwIiBoZWlnaHQ9IjUwcHgiIGlkPSJMYXllcl8xIiB2ZXJzaW9uPSIxLjEiIHZpZXdCb3g9IjAgMCA1MCA1MCIgd2lkdGg9IjUwcHgiIHhtbDpzcGFjZT0icHJlc2VydmUiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiPjxyZWN0IGZpbGw9Im5vbmUiIGhlaWdodD0iNTAiIHdpZHRoPSI1MCIvPjxjaXJjbGUgY3g9IjI1IiBjeT0iMjUiIGZpbGw9Im5vbmUiIHI9IjI0IiBzdHJva2U9IiMwMDAwMDAiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz48ZWxsaXBzZSBjeD0iMjUiIGN5PSIyNSIgZmlsbD0ibm9uZSIgcng9IjEyIiByeT0iMjQiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLWxpbmVjYXA9InJvdW5kIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjxwYXRoIGQ9Ik02LjM2NSw0MC40MzhDMTAuNzY2LDM3LjcyOSwxNy40NzksMzYsMjUsMzYgIGM3LjQxOCwwLDE0LjA0OSwxLjY4MiwxOC40NTEsNC4zMjUiIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiLz48cGF0aCBkPSJNNDMuNjM1LDkuNTYzQzM5LjIzNCwxMi4yNzEsMzIuNTIxLDE0LDI1LDE0ICBjLTcuNDE3LDAtMTQuMDQ5LTEuNjgyLTE4LjQ1MS00LjMyNSIgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIvPjxsaW5lIGZpbGw9Im5vbmUiIHN0cm9rZT0iIzAwMDAwMCIgc3Ryb2tlLW1pdGVybGltaXQ9IjEwIiBzdHJva2Utd2lkdGg9IjIiIHgxPSIxIiB4Mj0iNDkiIHkxPSIyNSIgeTI9IjI1Ii8+PGxpbmUgZmlsbD0ibm9uZSIgc3Ryb2tlPSIjMDAwMDAwIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS13aWR0aD0iMiIgeDE9IjI1IiB4Mj0iMjUiIHkxPSIxIiB5Mj0iNDkiLz48L3N2Zz4="></img></a>

                </div>

                {/* <button onClick={props.clearProjects}>Close</button> */}
            </Modal>
        )
    }

}
export default Projectmodal