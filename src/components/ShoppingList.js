import React from 'react'
import { connect } from 'react-redux'

import {startUpdateShoppingList, startAddToShoppingList} from '../actions/shoppinglist'
class ShoppingList extends React.Component {
    isEmpty(obj) {
        return !Object.keys(obj).length > 0;
    }
    removeItem=(el)=>{
        let my=[12,12]
        let tempList=this.props.list.list
        let temp2= tempList.filter((e)=>{
            if(e.ingredient==el){
                return false
            }
            return true
        })
        this.props.startUpdateShoppingList(temp2)
        
    }
    listReturner(element) {
        console.log(element)
        return (
            <div className='shopitem'>
                <h1>{element.count} {element.unit}</h1>
               
                <h1>{element.ingredient}</h1>
                <button className='btn third' onClick={()=>this.removeItem(element.ingredient)}>X</button>
            </div>
        )
    }
    render() {
        return (
            <div className="shoplist">
                {this.isEmpty(this.props.list) ? '' : this.props.list.list.map(element => {
                   return this.listReturner(element)

                })}
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    list: state.list
})
const mapDispatchToProps=(dispatch)=>({
    startUpdateShoppingList:(list)=>dispatch(startUpdateShoppingList(list))
})
export default connect(mapStateToProps,mapDispatchToProps)(ShoppingList) 