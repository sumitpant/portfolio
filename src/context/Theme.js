import React ,{createContext ,useContext ,useReducer} from 'react'

 export const ThemeContext = createContext();

export const StateProvider = ({reducer , initialState, children})=>{
    return <ThemeContext.Provider value={ useReducer(reducer, initialState)}>

        {children}
    </ThemeContext.Provider>

} 

export const useStateValue =() => useContext(ThemeContext)


