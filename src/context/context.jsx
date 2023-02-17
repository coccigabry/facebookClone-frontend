import { createContext, useReducer } from 'react'
import authReducer from './reducer'


const INITIAL_STATE = {
    user: {
        other: {
            _id: "63ef42aff6af9c3a97a12096",
            username: "Cocci Gabry",
            email: "CocciGabry@email.com",
            profilePicture: "https://th.bing.com/th/id/R.32cf5a349123840a0264964189edd50f?rik=ZnXVq3d6B3LaJw&pid=ImgRaw&r=0",
            coverPicture: "https://images.unsplash.com/photo-1556316782-1ec9b261c156?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1252&q=80",
            followers: [
                "63ef35bbc29b6f2fc53beacc",
                "63ef3638c29b6f2fc53beace",
                "63ef3694c29b6f2fc53bead0",
                "63ef36e3c29b6f2fc53bead2",
                "63ef3754c29b6f2fc53bead4",
                "63ef3820c29b6f2fc53bead6",
                "63ef3873c29b6f2fc53bead8",
                "63ef3917c29b6f2fc53beada",
                "63ef3a9fc29b6f2fc53beadc",
                "63ef3b00c29b6f2fc53beade",
            ],
            following: [
                "63ef35bbc29b6f2fc53beacc",
                "63ef3638c29b6f2fc53beace",
                "63ef3694c29b6f2fc53bead0",
                "63ef36e3c29b6f2fc53bead2",
                "63ef3754c29b6f2fc53bead4",
                "63ef3820c29b6f2fc53bead6",
                "63ef3873c29b6f2fc53bead8",
                "63ef3917c29b6f2fc53beada",
                "63ef3a9fc29b6f2fc53beadc",
                "63ef3b00c29b6f2fc53beade",
            ],
            city: "Genoa",
            desc: "Sweep the sheed!",
            job: "Web Developer",
            relationship: "2",
            online: true,
            IsAdmin: false,
        }
    },
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