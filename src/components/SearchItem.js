import React from 'react'
import {startGetItems} from '../actions/itemscontroller'
import {connect} from 'react-redux'
class SearchItem extends React.Component{
    styleReturner=()=>({
        backgroundImage:'linear-gradient(rgba(0, 0, 0, 0.7),rgba(0, 0, 0, 0.7)),   url(' + this.props.item.image_url + ')',
        backgroundSize:'cover',
        borderRadius: '10px',
        margin:'10px'

    })
    render(){
        return(
            <div className="mdc-card mini-card mdc-elevation--z4">
                <a className='rlink' href="#" onClick={()=>this.props.startGetItems(this.props.item.recipe_id)}>
                <div className="mdc-card__primary-action">
                    <div className="media-image mdc-card__media mdc-card__media--square" style={this.styleReturner()}>
                        <div className="mdc-card__media-content">
                            <div className="card-info">
                                <h1>{this.props.item.title.length>25?this.props.item.title.substring(0,25)+'...':this.props.item.title}</h1>
                                <h2>{this.props.item.publisher}</h2>
                            </div>
                        </div>
                    </div>
                </div>
                </a>
            </div>
            // <a onClick={()=>this.props.startGetItems(this.props.item.recipe_id)}>
            // <div className='search-box'>
                
            //     <div className='cont-box'>
            //         <h1 className='search-main'>{this.props.item.title.length>25?this.props.item.title.substring(0,25)+'...':this.props.item.title}</h1>
            //         <h2 className='search-sub'>{this.props.item.publisher}</h2>
            //     </div>
            //     <img className='search-img' src={this.props.item.image_url}></img>

            // </div>
            // </a>
        )
    }
}
const mapDispatchToProps=(dispatch)=>({
    startGetItems:(id)=>dispatch(startGetItems(id))
})
export default connect(undefined,mapDispatchToProps)(SearchItem);