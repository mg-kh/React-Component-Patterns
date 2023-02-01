import React from "react";
import Hook from "./Hook";
import Title from "../Title";

const ContainerView = () => {
  const { init, incrementHandler, decrementHandler } = Hook();

  return (
    <>
      <Title text="Container View Pattern" />
      <h3 className="py-3 text-2xl text-center">{init}</h3>
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

export default ContainerView;
