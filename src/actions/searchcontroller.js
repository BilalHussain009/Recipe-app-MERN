import axios from 'axios';

const setRecipe = (recipe) => ({
    type: 'set',
    recipe
});
const setPage = (page) => ({
    type: 'setPage',
    page
})

export const setNextPage = (start, end, recipe) => {

    const recipes = recipe.recipe.slice(start, end)
    if(recipes==[]){
        return null
    }
    console.log(recipe, start, end)
    console.log(recipes)
    return (dispatch) => {
        dispatch(setPage(recipes))
    }
}
export const searchQuery = (query) => {
    console.log('hi')
    return async (dispatch) => {
        const res = await axios.get(`https://forkify-api.herokuapp.com/api/search?q=${query}`)
        const recipes = res.data.recipes
        const page = recipes.slice(0, 10)
        dispatch(setPage(page))
        dispatch(setRecipe(recipes))
    }
}