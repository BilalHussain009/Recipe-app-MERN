import React from 'react'
import axios from 'axios'
import Search from './Search'
import SearchResults from './SearchResults'
import RecipeDescription from './RecipeDescription'
import ShoppingList from './ShoppingList'
class HomePage extends React.Component {
    
    render() {
        return (
            <div className='home'>
                <Search/>
                <SearchResults/>
                <RecipeDescription/>
                <ShoppingList/>
                
            </div>

        )
    }

}
export default HomePage