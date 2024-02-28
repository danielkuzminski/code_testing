//react
import { createContext, useReducer, useEffect } from "react";

//auth config
import {auth} from '../firebase/config'

//firebase
import { onAuthStateChanged } from "firebase/auth";

//first we create context
export const AuthContext = createContext()

//reducer dispatch function
export const authReducer = (state, action) => {
    switch (action.type) {
        case 'LOGIN':
            return {...state, user: action.payload}
        case 'LOGOUT':
            return {...state, user: null}
        case 'AUTH_IS_READY':
            return {...state, user: action.payload, authIsReady: true}
        default:
            return state
    }
}

//creating context provider component
export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(authReducer, {user: null, authIsReady: false})

    useEffect(() => {
        const unsub = onAuthStateChanged(auth, (user) => {
            dispatch({type: 'AUTH_IS_READY', payload: user})
            unsub()
        })
    },[])

    return (
        <AuthContext.Provider value={{...state, dispatch}}>
            {children}
        </AuthContext.Provider>
    )
}

// step by step creating auth context
// 1) create context variable
// 2) create context provider component (this is one of the possibilities)
//    this way makes the value easier to maintain
// 3) inside provider component create useReducer state and dispatch function
// 4) pass the useReducer state and dispatch as value in provider template
//    (use spread on state to avoid overwriting data)
// 5) in index.js import AuthContextProvider component, then wrap <App /> with it.
//    since now on, anything that would be included in App component will gain acces to context values