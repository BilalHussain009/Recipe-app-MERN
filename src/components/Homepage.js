import React from 'react'
import axios from 'axios'
import Search from './Search'
import SearchResults from './SearchResults'
import RecipeDescription from './RecipeDescription'
class HomePage extends React.Component {
    
    render() {
        return (
            <div className='home'>
                <Search/>
                <SearchResults/>
                <RecipeDescription/>
            </div>
        )
    }

}
export default HomePage