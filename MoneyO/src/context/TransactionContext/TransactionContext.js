import {useReducer, createContext} from "react"
import TransactionReducer from "./TransactionReducer"

const INITIAL_STATE={
    details: [],
    error: false,
}

export const TransactionContext = createContext(INITIAL_STATE)

export const TransactionContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(TransactionReducer, INITIAL_STATE)

    return(
        <TransactionContext.Provider value={{
            details:state.details,
            error: state.error,
            dispatch
        }}>
            {children}
        </TransactionContext.Provider>
    )
}