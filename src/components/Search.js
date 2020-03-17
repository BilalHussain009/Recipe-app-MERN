import React from 'react';
import {searchQuery} from '../actions/searchcontroller';
import {connect} from 'react-redux'
class Search extends React.Component {
    searchHandle=(e)=>{
        this.setState({
            query:e.target.value
        })
        
    }
    submitHandler= async(e)=>{
        e.preventDefault()
        this.props.searchQuery(this.state.query)
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
const mapDispatchToProps=(dispatch)=>({
    searchQuery:(query)=>dispatch(searchQuery(query))
})
export default connect(undefined,mapDispatchToProps)(Search)