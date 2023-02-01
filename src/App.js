import React from "react";
import ContainerView from "./component/ContainerView/ContainerView";
import TheProvider from "./component/TheProvider/TheProvider";
import CompoundComponent from "./component/CompoundComponent/CompoundComponent";

const App = () => {
  return (
    <>
      <ContainerView />
      <hr className="my-3" />
      <TheProvider />
      <hr className="my-3" />
      <CompoundComponent />
    </>
  );
};

export default App;
