import { useContext } from "react";
import { PropContext, PropContextProps } from "../../context/PropContext";
import { ReduceContext, ReduceContextType } from "../../context/ReduceContext";
import styled from "styled-components";

const StartStyle = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const StartScreen = () => {
    const {numQuestions} = useContext(PropContext) as PropContextProps;
    const {dispatch} = useContext(ReduceContext) as ReduceContextType;

    return (
        <StartStyle>
            <h2>Welcome to the React Quiz</h2>
            <h3>{numQuestions} questions to test your React knowledge</h3>
            <button
                className="btn"
                onClick={() => {
                    console.log("Button clicked");
                    dispatch({ type: "start" })
                }}
            >
                Let's start
            </button>
        </StartStyle>
    )
}
export default StartScreen;