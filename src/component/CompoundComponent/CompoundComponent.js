import React, { useState } from "react";
import TheOverlay from "./components/TheOverlay";
import Title from "../Title";

const CompoundComponent = () => {
  const [isShow, setIsShow] = useState();
  const toggleHandler = () => {
    setIsShow((prev) => !prev);
  };
  return (
    <>
      <Title text="Compound Components" />
      <TheOverlay isShow={isShow} toggle={toggleHandler}>
        <div className="p-5 bg-white rounded-md">
          <h3 className="text-xl">Hello</h3>
          <p className="my-2">
            I am combine with <b>TheOverLay</b> Component
          </p>
          <button
            onClick={toggleHandler}
            className="px-4 py-2 text-white bg-blue-500 rounded-md"
          >
            Close
          </button>
        </div>
      </TheOverlay>
      <button
        onClick={toggleHandler}
        className="block px-4 py-2 mx-auto text-white bg-blue-500 rounded-md"
      >
        Click Me
      </button>
    </>
  );
};

export default CompoundComponent;
