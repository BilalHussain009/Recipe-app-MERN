import React from 'react'
import { connect } from 'react-redux'
import {setNextPage} from '../actions/searchcontroller'
class SearchResults extends React.Component {
    state = {
        recipe: this.props.recipe,
        start:0,
        end:10,
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
        // if(end+10>this.props.recipe.recipe.length){
        //     console.log('error')
        // }
        let start=this.state.start+10
        let end=this.state.end+10
        this.setState({
            start,
            end
        }, this.props.setNextPage(start,end,this.props.recipe))
       
        
    }
    pageDown = () => {
        let start=this.state.start-10
        let end=this.state.end-10
        this.setState({
            start,
            end
        }, this.props.setNextPage(start,end,this.props.recipe))
    }
    
    
    render() {
        return (
            <div>
                <button onClick={this.pageUp}>Next</button>
                <button onClick={this.pageDown}>Prev</button>
               
                {this.isEmpty(this.props.recipe) ? 'No Items' : this.props.page.page.map((element) => {
                    return this.recipeReturner(element)
                })}
            </div>
        )
    }
}

const mapStateToProps = (state) => ({
    recipe: state.recipe,
    page:state.page
})
const mapDispatchToProps=(dispatch)=>({
    setNextPage:(start,end,recipe)=>dispatch(setNextPage(start,end,recipe))
})
export default connect(mapStateToProps,mapDispatchToProps)(SearchResults);