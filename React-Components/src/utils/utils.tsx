

export const ratingFun= (rating:number) => {
    if (rating===1){
        return  <span>⭐</span>

    }
    if (rating===2){
        return  <span>⭐⭐</span>

    }
    if (rating===3){
        return  <span>⭐⭐⭐</span>

    }
    if (rating===4){
        return  <span>⭐⭐⭐⭐</span>

    }
    if (rating===5){
        return  <span>⭐⭐⭐⭐⭐</span>
}

}