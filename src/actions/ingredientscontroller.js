const update=(ing)=>{
    return{
        type:'setIng',
        ing
    }
}
const getItems=(items)=>({
    type:'setItems',
    items
})

export const updateIng=(ing,old,New,item)=>{
    let item1=item.items;
    item1.recipe.serving=New;
    console.log(item1)

    let newing=[]
    ing.forEach(element => {
        let tempElement=element
        let tempCount=element.count
        tempCount*=(New/old)
        tempCount=Math.round(tempCount * 10) / 10
        tempElement.count=tempCount
        newing.push(tempElement)
        
    });    
    return (dispatch)=>{
        dispatch(getItems(item1))
        dispatch(update(newing))
    }
}