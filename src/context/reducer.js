export const initialState ={
    theme: false
}

 const reducer = (state = initialState,action)=>{

    switch(action.type){
        case 'THEME_CHANGE':
            return {
                theme: !state.theme
            }
        default:
            return state;    
    }
}

export default reducer;

