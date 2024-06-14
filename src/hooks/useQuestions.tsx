import { useContext, useEffect } from "react";
import { ReduceContext } from "../context/ReduceContext";

export const useQuestions = () => {
    const context = useContext(ReduceContext);
    if(!context) {
        throw new Error('useQuestions must be used within a ReduceProvider');
    }
    const {state, dispatch} = context;
    const {status} = state; 

    useEffect(() => {
        if(status === 'loading') {
        const fetchQuestions = async () => {
            try {
                const response = await fetch('../questions.json', {
                    headers: {
                        "Content-Type": "application.json",
                        "Accept": "application.json"
                    }
                });
                if(!response.ok) {
                    throw new Error(`Http error. status: ${response.status}`);
                }
                const data = await response.json();
                console.log("Questions fetched", data);
                dispatch({ type: "dataReceived", payload: data})
            } catch(err) {
                console.log("Failed to fetch data", err);
                dispatch({ type: "dataFailed" })
            }
        };

        fetchQuestions();
    }
    }, [dispatch, status]);

    return { questions: state.questions };
}