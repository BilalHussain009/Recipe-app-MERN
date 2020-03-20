import axios from 'axios'
const getItems=(items)=>({
    type:'setItems',
    items
})
const setIng=(ing)=>{
    return{
        type:'setIng',
        ing
    }
}
export const startGetItems =(id)=>{
    return async (dispatch)=>{
        const items=await axios.get(`https://forkify-api.herokuapp.com/api/get?rId=${id}`)
        const numIng=items.data.recipe.ingredients.length;
        const periods=Math.ceil((numIng/3))
        const time=periods*15
        items.data.recipe.time=time
        items.data.recipe.serving=4
        dispatch(getItems(items.data))
        const unitLong=['tablespoons','tablespoon','ounce','ounces','teaspoon','teaspoons','cups','pounds']
        const unitShort=['tbsp','tbsp','oz','oz','tsp','tsp','cup','pound']
        const units = [...unitShort, 'kg', 'g'];

        const newIngredients=items.data.recipe.ingredients.map(el=>{
            let ingredient=el.toLowerCase()
            unitLong.forEach((unit,i)=>{
                ingredient=ingredient.replace(unit,unitShort[i])
            })
            ingredient = ingredient.replace(/ *\([^)]*\) */g, ' ');
            const arrIng = ingredient.split(' ');
            const unitIndex = arrIng.findIndex(el2 => units.includes(el2));
            let objIng;
            if (unitIndex > -1) {
              
                const arrCount = arrIng.slice(0, unitIndex);
                
                let count;
                if (arrCount.length === 1) {
                    count = eval(arrIng[0].replace('-', '+'));
                } else {
                    count = eval(arrIng.slice(0, unitIndex).join('+'));
                }

                objIng = {
                    count,
                    unit: arrIng[unitIndex],
                    ingredient: arrIng.slice(unitIndex + 1).join(' ')
                };

            } else if (parseInt(arrIng[0], 10)) {
                objIng = {
                    count: parseInt(arrIng[0], 10),
                    unit: '',
                    ingredient: arrIng.slice(1).join(' ')
                }
            } else if (unitIndex === -1) {
                objIng = {
                    count: 1,
                    unit: '',
                    ingredient
                }
            }
            return objIng
            

        })
        dispatch(setIng(newIngredients))
    }
}
export const startUpdateItem=(items)=>{
    return (dispatch)=>{
        dispatch(getItems(items))
    }
}