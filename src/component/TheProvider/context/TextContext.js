import { createContext } from "react";

export const TextContext = createContext();

const TextContextProvider = ({ data, ...props }) => {
  return (
    <>
      <TextContext.Provider value={data}>{props.children}</TextContext.Provider>
    </>
  );
};

export default TextContextProvider;
