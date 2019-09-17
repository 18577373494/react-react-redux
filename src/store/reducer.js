const reducer = (state={age:0}, action) => {
    const age  = state.age
    switch (action.type){
        case 'add':
            return {age:age+1}
        case 'del':
                return {age:age-1}
        default:
            return state
    }
}
export default reducer