// / https://api.dictionaryapi.dev/api/v2/entries/en/keyboard
import { createContext, useContext, useEffect, useReducer } from "react";

const AppContext = createContext();

const initialState = {
  wordData: {},
  isLoading: true,
  error: "",
};

function reducer(state, action) {
  switch (action.type) {
    case "loading":
      return { ...state, isLoading: true };
    case "wordData/loaded":
      return { ...state, isLoading: false, wordData: action.payload };
    case "rejected":
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
  }
}

function MyProvider({ search, children }) {
  const [{ wordData, isLoading, error }, dispatch] = useReducer(
    reducer,
    initialState
  );
  console.log(search)
  useEffect(() => {
    async function getWordData() {
      dispatch({ type: "loading" });
      try {

        const res = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${search}`);
        if (!res.ok) throw Error("Failed getting data");
        const data = await res.json();
        console.log(data)

        dispatch({ type: "wordData/loaded", payload: data[0] });
      } catch {
        dispatch({
          type: "rejected",
          payload: "There was an error loading datas...",
        });
      }
    }
    getWordData();
  }, [search]);
  return (
    <AppContext.Provider value={{ wordData, isLoading, error }}>
      {children}
    </AppContext.Provider>
  );
}

function useWord() {
  const context = useContext(AppContext);
  if (context === undefined)
    throw new Error("Word was used outside the word Provider");
  return context;
}

export { MyProvider, useWord };
