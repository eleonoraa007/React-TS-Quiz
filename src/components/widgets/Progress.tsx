import { useContext } from "react";
import { ReduceContext, ReduceContextType } from "../../context/ReduceContext";
import { PropContext, PropContextProps } from "../../context/PropContext";
import styled from "styled-components";

const ProgressStyle = styled.header`
    margin-bottom: 4rem;
    display: grid;
    justify-content: space-between;
    gap: 1.2rem;
    grid-template-columns: auto auto;
    font-size: 1.8rem;
    color: var(--color-medium);
    width: 100%;
    height: 12px;
    grid-column: 1 / -1;

`;

const Progress = () => {
    const {state} = useContext(ReduceContext) as ReduceContextType;
    const {index, points} = state;
    const {numQuestions, maxPossiblePoints} = useContext(PropContext) as PropContextProps;

    return (
        <ProgressStyle>
            <p>Question {index + 1} / {numQuestions}</p>
            <p>{points} / {maxPossiblePoints}</p>
        </ProgressStyle>
    );
}
export default Progress;