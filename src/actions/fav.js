export const addToFavourite=(fav)=>{
     let favourite=[]
    
    if(JSON.parse(localStorage.getItem('favourites'))==null){
        favourite.push(fav)
       localStorage.setItem("favourites",JSON.stringify(favourite))
    }
    else{
        favourite=JSON.parse(localStorage.getItem('favourites'))
        favourite.push(fav)
        localStorage.setItem("favourites",JSON.stringify(favourite))
    }
}