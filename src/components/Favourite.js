import React from 'react'
class Favourite extends React.Component {
    state={
        fav:JSON.parse(localStorage.getItem('favourites')) == null ? [] :
        JSON.parse(localStorage.getItem('favourites'))
    }
    Returner(el) {
        return <li><a href="#">{el.title}</a></li>
    }
    render() {
        return (

            <div className="dropdown">
                <a className="dropdown-toggle" href="#">
                    Favourites
            </a>

                <ul className="dropdown-list">
                    {this.state.fav==[]?"No item" :
                        this.state.fav.map(el => this.Returner(el))}
                    
                </ul>
            </div>


        )


    }
}
export default Favourite