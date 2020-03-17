import React from 'react';
import axios from 'axios';
import Search from './Search'
import SearchResults from './SearchResults'
class HomePage extends React.Component {
    
    render() {
        return (
            <div className='home'>
                <Search/>
                <SearchResults/>
            </div>
        )
    }

}
export default HomePage