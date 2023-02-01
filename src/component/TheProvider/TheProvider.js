import React from "react";
import TextContainer from "./components/TextContainer";
import Title from "../Title";

// contexts
import Hook from "./Hook";
import TextContextProvider from "./context/TextContext";

const TheProvider = () => {
  const { init, incrementHandler, decrementHandler } = Hook();

  return (
    <>
      <Title text="The Provider Pattern" />
      <TextContextProvider data={{ init }}>
        <TextContainer />
      </TextContextProvider>

      <div className="text-center">
        <button
          onClick={decrementHandler}
          className="px-10 py-2 ml-1 bg-gray-200 rounded-md"
        >
          -
        </button>
        <button
          onClick={incrementHandler}
          className="px-10 py-2 ml-1 bg-gray-200 rounded-md"
        >
          +
        </button>
      </div>
    </>
  );
};

export default TheProvider;
