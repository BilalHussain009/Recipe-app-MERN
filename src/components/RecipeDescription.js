import React from 'react'
import { connect } from 'react-redux'
import { startUpdateItem } from '../actions/itemscontroller'
import  {Fraction} from 'fractional'
import {updateIng} from '../actions/ingredientscontroller'
class RecipeDescription extends React.Component {

    state = {
        item: this.props.item,
        ing:this.props.ing
    }
    isEmpty(obj) {
        return !Object.keys(obj).length > 0;
    }
    updateServing(type) {

        if(type=='add'){
            let oldserving=this.props.item.items.recipe.serving
            let newserving=oldserving+1
            this.props.updateIng(this.props.ing.items,oldserving,newserving)
        }
        else{
            let oldserving=this.props.item.items.recipe.serving
            let newserving=oldserving-1
            this.props.updateIng(this.props.ing.items,oldserving,newserving)
        }

        
    }
    gcd(a, b) {
        if (!b) return a;
      
        return gcd(b, a % b);
      };
    descripReturner(ing) {
        var frac=new Fraction(ing.count)
        if(ing.ingredient.includes('_')){
           return
        }
        if(ing.ingredient.includes(':')){
        return <b>{ing.ingredient}</b>
        }
        return (
            <div>

                <h1>
                    {frac+ ' '+ing.unit + ' '+ing.ingredient}
                </h1>
            </div>
        )
    }


    render() {
        return (
            <div className='description'>
                <h1 className='description-title'>
                    {this.isEmpty(this.props.item) ? 'no items' : this.props.item.items.recipe.title}
                </h1>
                <div className='image-box'>
                    {this.isEmpty(this.props.item) ? 'no items' : <img className='des-image' src={this.props.item.items.recipe.image_url}></img>}
                </div>
                <div>
                    <div>
                        <h2> {this.isEmpty(this.props.item) ? 'no items' : this.props.item.items.recipe.time}Minutes</h2>
                    </div>
                    <div>
                        <p>4 Servings</p>
                        <button onClick={() => { this.updateServing('add') }}>+</button>
                        <button onClick={() => { this.updateServing('sub') }}>-</button>
                    </div>
                </div>

                {this.isEmpty(this.props.ing) ? 'no items' :
                        this.props.ing.items.map((el) => this.descripReturner(el))
                }
        
            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    item: state.item,
    ing:state.ing
})
const mapDispatchToProps = (dispatch) => ({
    updateIng:(ing,oldserving,newserving)=>dispatch(updateIng(ing,oldserving,newserving)),
    startUpdateItem: (items) => dispatch(startUpdateItem(items))
})
export default connect(mapStateToProps, mapDispatchToProps)(RecipeDescription);