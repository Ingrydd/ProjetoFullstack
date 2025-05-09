import { createContext, useReducer, useContext } from "react";

const BookContext = createContext();

const initialState = {
  query: "",
  loading: false,
  error: "",
  results: [],
};

function reducer(state, action) {
  switch (action.type) {
    case "SET_QUERY":
      return { ...state, query: action.payload };
    case "SEARCH_START":
      return { ...state, loading: true, error: "", results: [] };
    case "SEARCH_SUCCESS":
      return { ...state, loading: false, results: action.payload };
    case "SEARCH_ERROR":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
}

export function BookProvider({ children }) {
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <BookContext.Provider value={{ state, dispatch }}>
      {children}
    </BookContext.Provider>
  );
}

export function useBookContext() {
  return useContext(BookContext);
}
