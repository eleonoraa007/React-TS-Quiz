import { ReactNode, createContext, useContext } from "react"
import { ReduceContext, ReduceContextType } from "./ReduceContext"

export interface PropContextProps {
    numQuestions: number;
    maxPossiblePoints: number;
}

type ChildrenContext = {
    children: ReactNode;
}

export const PropContext = createContext<PropContextProps | undefined>(undefined)

const PropProvider = ({children}: ChildrenContext) => {
    const {state} = useContext(ReduceContext) as ReduceContextType;
    const {questions} = state;

    const numQuestions = questions.length;
    const maxPossiblePoints = questions.reduce((prev, cur) => prev + cur.points, 0);

    return (
        <PropContext.Provider value={{numQuestions, maxPossiblePoints}}>
            {children}
        </PropContext.Provider>
    );
}
export default PropProvider;