import { Question } from "../interface/Question";

export interface State {
    questions: Question[];
    status: 'loading' | 'error' | 'ready' | 'active' | 'finished';
    index: number,
    answer: number | null,
    points: number;
    highscore: number;
    secondsRemaining: number | null;
}

export type Action = 
    | { type: "dataReceived", payload: Question[] }
    | { type: "dataFailed" }
    | { type: "start" }
    | { type: "newAnswer", payload: {index: number, answer: number} }
    | { type: "newQuestion" }
    | { type: "finish" }
    | { type: "restart" }
    | { type: "tick" };

export const initialState: State = {
    questions: [],
    status: 'loading',
    index: 0,
    answer: null,
    points: 0,
    highscore: 0,
    secondsRemaining: null,
}
const SECOND_PER_QUESTION = 30;

export function reducer(state: State, action: Action): State {
    console.log('Reducer called with action:', action); 
    switch (action.type) {
        case "dataReceived":
          return { ...state, questions: action.payload, status: "ready" };
        case "dataFailed":
          return { ...state, status: "error" };
        case "start":
          return {
            ...state,
            status: "active",
            secondsRemaining: state.questions.length * SECOND_PER_QUESTION,
          };
        case "newAnswer":
            const {answer, index} = action.payload;
            const question = state.questions[index];
            return {
                ...state,
                answer: answer,
                points:
                answer === question.correctOption
                    ? state.points + question.points
                    : state.points,
            };
        case "newQuestion":
          return { ...state, index: state.index + 1, answer: null };
        case "finish":
          return {
            ...state,
            status: "finished",
            highscore:
              state.points > state.highscore ? state.points : state.highscore,
          };
        case "restart":
          return { ...initialState, questions: state.questions, status: "ready" };
        case "tick":
          return {
            ...state,
            secondsRemaining: state.secondsRemaining! - 1,
            status: state.secondsRemaining === 0 ? "finished" : state.status,
          };
        default:
          throw new Error("Action unknown");
      }
    }