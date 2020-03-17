import React from 'react'
import { connect } from 'react-redux'
class SearchResults extends React.Component {
    state = {
        recipe: this.props.recipe,
        start:0,
        end:10,
        display: []
    }
    isEmpty(obj) {
        return !Object.keys(obj).length > 0;
    }
    recipeReturner(element) {
        
        return (
            <div>
                <h1>{element.title}</h1>
                <h2>{element.publisher}</h2>
                <img src={element.image_url}></img>
            </div>
        )
    }
    pageUp = () => {
        this.setState((prevState, props) => ({
            page: prevState.page + 1,
        }));
        this.Pagination()
        
    }
    pageDown = () => {
        this.setState((prevState, props) => ({
            page: prevState.page - 1,
        }));
    }
    
    Pagination(){
      
        const start = this.state.start
        const end=this.state.end
        const newArray = this.props.recipe.recipe.slice(start,end)
        this.setState({
            start:end,
            end:end+10,
            display: newArray 
        })
        
        console.log(this.state)
    }
    render() {
        return (
            <div>
                <button onClick={this.pageUp}>Next</button>
                <button onClick={this.pageDown}>Prev</button>
                {this.isEmpty(this.props.recipe) ? 'No Items' : this.state.display.map((element) => {
                    console.log('ad')
                    return this.recipeReturner(element)
                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    recipe: state.recipe
})
export default connect(mapStateToProps)(SearchResults);