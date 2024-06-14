import { ReactNode, createContext, useReducer } from "react";
import { Action, State, initialState, reducer } from "../hooks/useReducer";

export interface ReduceContextType {
    state: State;
    dispatch: React.Dispatch<Action>;
}

interface ChildrenContext {
    children: ReactNode;
}

export const ReduceContext = createContext<ReduceContextType | undefined>(undefined);

const ReduceProvider = ({children}: ChildrenContext) => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ReduceContext.Provider value={{state, dispatch}}>
            {children}
        </ReduceContext.Provider>
    );
}

export default ReduceProvider;