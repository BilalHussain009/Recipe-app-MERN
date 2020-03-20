const update=(ing)=>{
    return{
        type:'setIng',
        ing
    }
}
export const updateIng=(ing,old,New)=>{
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
        dispatch(update(newing))
    }
}