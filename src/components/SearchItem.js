import React from 'react'
import {startGetItems} from '../actions/itemscontroller'
import {connect} from 'react-redux'
class SearchItem extends React.Component{
    render(){
        return(
            <a onClick={()=>this.props.startGetItems(this.props.item.recipe_id)}>
            <div className='search-box'>
                
                <div className='cont-box'>
                    <h1 className='search-main'>{this.props.item.title.length>25?this.props.item.title.substring(0,25)+'...':this.props.item.title}</h1>
                    <h2 className='search-sub'>{this.props.item.publisher}</h2>
                </div>
                <img className='search-img' src={this.props.item.image_url}></img>

            </div>
            </a>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    startGetItems:(id)=>dispatch(startGetItems(id))
})
export default connect(undefined,mapDispatchToProps)(SearchItem);