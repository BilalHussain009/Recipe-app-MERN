import axios from 'axios';

const setRecipe=(recipe)=>({
    type:'set',
    recipe
});
export const searchQuery=(query)=>{
    console.log('hi')
    return async(dispatch)=>{
        const res=await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
        const recipes=res.data.recipes
        dispatch(setRecipe(recipes))
    }
}