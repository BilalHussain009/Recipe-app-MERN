import React , { Component } from 'react'
import axios from 'axios'
import Search from './Search'
import SearchResults from './SearchResults'
import RecipeDescription from './RecipeDescription'
import ShoppingList from './ShoppingList'
import Favourite from './Favourite'
class HomePage extends React.Component {
    
    render() {
        return (
            <div className='home'>
                <Favourite/>
                <Search/>
                <SearchResults/>
                <RecipeDescription/>
                <ShoppingList/>
                Component
            </div>

        )
    }

}
export default HomePage