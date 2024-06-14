import { useContext } from "react";
import { Question } from "../../interface/Question";
import { ReduceContext, ReduceContextType } from "../../context/ReduceContext";
import styled from "styled-components";

const OptionStyle = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.2rem;
    margin-bottom: 3.2rem;
`;

const AnswerStyle = styled.div`
    transform: translateX(2rem);
`;

type OptionsProp = {
    question: Question;
    onSelectAnswer: (questionIndex: number, answer: number) => void;
}

const Options = ({question, onSelectAnswer}: OptionsProp) => {
    const {state} = useContext(ReduceContext) as ReduceContextType;
    const {answer} = state;

    const hasAnswered = answer !== null;

    return (
        <OptionStyle>
            {question.options.map((option, index) => (
        <button
          className={`btn btn-option ${index === answer ? <AnswerStyle /> : ""} ${
            hasAnswered
              ? index === question.correctOption
                ? "correct"
                : "wrong"
              : ""
          }
          `}
          key={index}
                    disabled={hasAnswered}
                    onClick={() => onSelectAnswer(state.index, index)}
                >{option}</button>
      ))}
        </OptionStyle>
    );
}

export default Options;