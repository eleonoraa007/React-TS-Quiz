import { useContext, useEffect } from "react";
import { ReduceContext, ReduceContextType } from "../../context/ReduceContext";
import styled from "styled-components";

const TimerStyle = styled.div`
    float: left;
    font-size: 1.8rem;
    color: var(--color-medium);
    border: 2px solid var(--color-dark);
    padding: 1.35rem 2.8rem;
    border-radius: 100px;
`;

const Timer = () => {
    const {state, dispatch} = useContext(ReduceContext) as ReduceContextType;
    const {secondsRemaining} = state;
    const mins = Math.floor(secondsRemaining! / 60);
    const seconds = secondsRemaining! % 60;

    useEffect(() => {
        const id = setInterval(() => {
            dispatch({ type: "tick" });
        }, 1000);
        return () => clearInterval(id);
    }, [dispatch]);

    return (
        <TimerStyle>
            {mins < 10 && '0'}
            {mins}:{seconds < 10 && '0'}
            {seconds}
        </TimerStyle>
    )
}

export default Timer;
