import { useContext } from "react";
import { ReduceContext, ReduceContextType } from "./context/ReduceContext";
import { useQuestions } from "./hooks/useQuestions";
import Quiz from "./components/quiz/Quiz";
import StartScreen from "./components/view/StartScreen";
import Progress from "./components/widgets/Progress";
import FinishScreen from "./components/view/FinishScreen";
import Timer from "./components/widgets/Timer";
import styled from "styled-components";
import Footer from "./components/ui/Footer";
import NextButton from "./components/ui/NextButton";

const AppStyle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ErrorStyle = styled.div`
  text-align: center;
  font-size: 1.6rem;
  font-weight: 500;
  padding: 2rem;
  background-color: #495057;
  border-radius: 100px;
`;

const App = () => {
  const {state} = useContext(ReduceContext) as ReduceContextType;
  const {status} = state;
  useQuestions();

  return (
      <AppStyle>
          {status === 'loading' && <div>Loading</div>}
          {status === 'error' && <ErrorStyle>Error</ErrorStyle>}
          {status === 'ready' && <StartScreen />}
          {status === 'active' && (
            <>
              <Progress />
              <Quiz />
              <Footer>
                <Timer />
                <NextButton />
              </Footer>
            </>
          )}
          {status === 'finished' && (
            <FinishScreen />
            )}
      </AppStyle>
  );
}

export default App;