import React from 'react'
import { connect } from 'react-redux'
import { startUpdateItem } from '../actions/itemscontroller'
import { Fraction } from 'fractional'
import { updateIng } from '../actions/ingredientscontroller'
import { startAddToShoppingList } from '../actions/shoppinglist'
import {addToFavourite} from '../actions/fav'
class RecipeDescription extends React.Component {

    state = {
        item: this.props.item,
        ing: this.props.ing
    }
    isEmpty(obj) {
        return !Object.keys(obj).length > 0;
    }
    updateServing(type) {

        if (type == 'add') {
            let oldserving = this.props.item.items.recipe.serving
            let newserving = oldserving + 1
            this.props.updateIng(this.props.ing.items, oldserving, newserving,this.props.item)
        }
        else {
            let oldserving = this.props.item.items.recipe.serving
            let newserving = oldserving - 1
            this.props.updateIng(this.props.ing.items, oldserving, newserving,this.props.item)
        }


    }
    gcd(a, b) {
        if (!b) return a;

        return gcd(b, a % b);
    };
    descripReturner(ing) {
        var frac = new Fraction(ing.count)
        if (ing.ingredient.includes('_')) {
            return
        }
        if (ing.ingredient.includes(':')) {
            return <h1 className='title'>{ing.ingredient}</h1>
        }
        return (
            <div>

                <h1>
                    {frac + ' ' + ing.unit + ' ' + ing.ingredient}
                </h1>
            </div>
        )
    }
    addToShoppingList = () => {
        let Old
        let New

        this.props.list == {} ?
            Old = [] :
            Old = this.props.list
        New = this.props.ing.items
        this.props.startAddToShoppingList(Old, New)
    }


    render() {
        return (
            <div className='description'>
                
                <div className='image-box'>
                    {this.isEmpty(this.props.item) ? '' : <img className='des-image' src={this.props.item.items.recipe.image_url}></img>}
                </div>
                <h1 className='description-title'>
                    {this.isEmpty(this.props.item) ? '' : this.props.item.items.recipe.title}
                </h1>
                {this.isEmpty(this.props.ing) ? '' :
                    <div className='serving-controller'>
                        <button className="btn first" onClick={() => addToFavourite(this.props.item.items.recipe)}>Add to Favourite</button>
                        <div className='serving-time'>
                            <h2> {this.isEmpty(this.props.item) ? '' : this.props.item.items.recipe.time}Minutes</h2>
                        </div>
                        <div className='serving-qty'>
                            <p>{this.isEmpty(this.props.item) ? '' : this.props.item.items.recipe.serving} Servings</p>
                            <button className="btn first" onClick={() => { this.updateServing('add') }}>+</button>
                            <button className="btn third" onClick={() => { this.updateServing('sub') }}>-</button>
                        </div>
                    </div>}


                {this.isEmpty(this.props.ing) ? '' :
                    this.props.ing.items.map((el) => this.descripReturner(el))
                }
                {
                    this.isEmpty(this.props.ing) ? '' : <button onClick={this.addToShoppingList}>ADD TO SHOPPING LIST</button>
                }
                {
                    this.isEmpty(this.props.ing) ? '' :
                        <div>
                            <h1>HOW TO COOK IT</h1>
                            <a href={this.isEmpty(this.props.ing) ? '#' : this.props.item.items.recipe.source_url} target="_blank">DIRECTIONS</a>
                        </div>
                }

            </div>
        )
    }
}
const mapStateToProps = (state) => ({
    item: state.item,
    ing: state.ing,
    list: state.list
})
const mapDispatchToProps = (dispatch) => ({
    updateIng: (ing, oldserving, newserving,item) => dispatch(updateIng(ing, oldserving, newserving,item)),
    startUpdateItem: (items) => dispatch(startUpdateItem(items)),
    startAddToShoppingList: (Old, New) => dispatch(startAddToShoppingList(Old, New)),
})
export default connect(mapStateToProps, mapDispatchToProps)(RecipeDescription);