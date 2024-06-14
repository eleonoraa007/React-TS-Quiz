import { useContext } from "react"
import { ReduceContext, ReduceContextType } from "../../context/ReduceContext"
import Options from "./Options";

const Quiz = () => {
    const {state, dispatch} = useContext(ReduceContext) as ReduceContextType;
    const {questions, index} = state;

    const handleAnswer = (index: number, answer: number) => {
        dispatch({ type: "newAnswer", payload: {index, answer}})
    }

    return (
        <div>
            <div key={questions[index].id}>
                <h3>{questions[index].title}</h3>
                <Options question={questions[index]} onSelectAnswer={handleAnswer}/>
            </div>
        </div>
    );
}

export default Quiz;