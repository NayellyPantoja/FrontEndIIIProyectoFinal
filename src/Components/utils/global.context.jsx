import {
  createContext,
  useContext,
  useState,
  useEffect,
  useReducer,
} from "react";

export const initialState = { theme: "", data: [] };

const reducer = (state, action) => {
  switch (action.type) {
    case "CHANGE_THEME":
      return { ...state, theme: action.payload };
    default:
      return state;
  }
};

export const ContextGlobal = createContext();

const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [dentists, setDentists] = useState([]);
  const url = "https://jsonplaceholder.typicode.com/users";

  useEffect(() => {
    fetch(url)
      .then((response) => response.json())
      .then((data) => setDentists(data));
  }, []);

  const handleThemeChange = () => {
    dispatch({
      type: "CHANGE_THEME",
      payload: state.theme === "dark" ? "" : "dark",
    });
  };

  useEffect(() => {
    document.body.className = state.theme === "dark" ? "dark" : "";
  }, [state.theme]);

  return (
    <ContextGlobal.Provider
      value={{ dentists, setDentists, theme: state.theme, handleThemeChange }}
    >
      {children}
    </ContextGlobal.Provider>
  );
};

export default ContextProvider;

export const useContextGlobal = () => useContext(ContextGlobal);
