import { useContext } from "react";
import { ReduceContext, ReduceContextType } from "../../context/ReduceContext";
import { PropContext, PropContextProps } from "../../context/PropContext";
import styled from "styled-components";

const ResultStyle = styled.p`
    background-color: var(--color-theme);
    color: var(--color-light);
    border-radius: 100px;
    text-align: center;
    padding: 2rem 3rem;
    font-size: 2rem;
    font-weight: 500;
    margin-bottom: 1.6rem;
`;

const ResultSpanStyle = styled.span`
    font-size: 2.2rem;
    margin-right:4px;
`;

const HighscoreStyle = styled.p`
    font-size: 1.8rem;
    text-align: center;
    margin-bottom: 4.8rem;
`;

const FinishScreen = () => {

    const {state, dispatch} = useContext(ReduceContext) as ReduceContextType;
    const {points, highscore} = state;
    const {maxPossiblePoints} = useContext(PropContext) as PropContextProps;

    const percentage = (points / maxPossiblePoints) * 100;
    let emoji;
    if(percentage === 100) emoji = "💯";
    if(percentage >= 80 && percentage < 100) emoji = "💁‍♀️";
    if(percentage >= 50 && percentage < 80) emoji = "✔";
    if(percentage > 0 && percentage < 50) emoji ="🙅‍♀️";
    if(percentage === 0) emoji = "👎"; 

    return (
        <>
            <ResultStyle>
                <ResultSpanStyle>{emoji}</ResultSpanStyle> You scored {points} points out of {maxPossiblePoints} ({Math.ceil(percentage)}%)
            </ResultStyle>
            <HighscoreStyle>Highscore: {highscore} points</HighscoreStyle>
            <button
            className="btn"
            onClick={() => {
                dispatch({type: "restart"})}}>
                Restart quiz
            </button>
        </>
    )
}
export default FinishScreen;
