import { useState } from "react";

const Hook = () => {
  const [init, setInit] = useState(0);

  const incrementHandler = () => {
    setInit((prev) => prev + 1);
  };

  const decrementHandler = () => {
    setInit((prev) => prev - 1);
  };

  return {
    init,
    incrementHandler,
    decrementHandler,
  };
};

export default Hook;
