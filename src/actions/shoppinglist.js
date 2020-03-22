const isEmpty=(obj)=> {
    return !Object.keys(obj).length > 0;
}
const addToShoppingList=(list)=>({
    type:'addToList',
    list
})

export const startAddToShoppingList=(Old,New)=>{
    console.log(Old)
    console.log(New)
    if(isEmpty(Old)){
       
        return (dispatch)=>{
            dispatch(addToShoppingList(New))
        }
    }
    else{
        let tempNew=[...Old.list,...New]
        return (dispatch)=>{
            dispatch(addToShoppingList(tempNew))
        }
    }

 
}
export const startUpdateShoppingList=(list)=>{
    return (dispatch)=>{
        dispatch(addToShoppingList(list))
    }
}