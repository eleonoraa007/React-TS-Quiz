import { useContext } from "react";
import { ReduceContext, ReduceContextType } from "../../context/ReduceContext";
import { PropContext, PropContextProps } from "../../context/PropContext";

const NextButton = () => {

    const {state, dispatch} = useContext(ReduceContext) as ReduceContextType;
    const {answer, index} = state;
    const {numQuestions} = useContext(PropContext) as PropContextProps;

    if(answer === null) return null;

    const handleNext = () => {
        if(index < numQuestions - 1) {
            dispatch({ type: "newQuestion"});
        } else if(index === numQuestions - 1) {
            dispatch({ type: "finish" });
        }
    }

    return (
        <button className="btn" onClick={handleNext}>
            {index < numQuestions - 1 ? 'Next' : 'Finish'}
        </button>
    );
}
export default NextButton;
