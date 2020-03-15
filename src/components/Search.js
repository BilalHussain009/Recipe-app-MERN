import React from 'react';
import axios from 'axios';
class Search extends React.Component {
    searchHandle=(e)=>{
        this.setState({
            query:e.target.value
        })
        
    }
    submitHandler= async(e)=>{
        e.preventDefault()
        const res=await axios.get('https://forkify-api.herokuapp.com/api/search?q=pizza')
        console.log(res)
    }
    state={
        query:''
    }
    render() {
        return (
            <div className='home'>
                <form onChange={this.searchHandle} onSubmit={this.submitHandler}>
                    <input type='text'></input>
                    <input type='submit'></input>
                </form>
            </div>
        )
    }

}
export default Search