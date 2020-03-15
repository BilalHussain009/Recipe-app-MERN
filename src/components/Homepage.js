import React from 'react';
import axios from 'axios';
import Search from './Search'
class HomePage extends React.Component {
    
    render() {
        return (
            <div className='home'>
                <Search/>
            </div>
        )
    }

}
export default HomePage