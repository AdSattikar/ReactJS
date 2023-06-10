const reducer = (state,action) =>{
    if(action.type === "INC"){
        return (state = state +1)
    }
    if(action.type ==="DEC"){
        return (state === 0 ? state=0 : state = state-1)
    }
    return state
}

export default reducer;