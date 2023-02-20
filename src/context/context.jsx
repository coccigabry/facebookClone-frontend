import { createContext, useReducer } from 'react'
import authReducer from './reducer'


const INITIAL_STATE = {
    user: null,
    isFetching: false,
    error: false
}

const AuthContext = createContext(INITIAL_STATE)

const AuthProvider = ({ children }) => {
    const [state, dispatch] = useReducer(authReducer, INITIAL_STATE)


    return (
        <AuthContext.Provider value={{
            user: state.user,
            isFetching: state.isFetching,
            error: state.error,
            dispatch
        }}>
            {children}
        </AuthContext.Provider>
    )
}


export { AuthContext, AuthProvider }