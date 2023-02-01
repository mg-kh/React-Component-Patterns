import React, { useContext } from "react";
import { TextContext } from "../context/TextContext";

const Text = () => {
  const { init } = useContext(TextContext);
  return <h3 className="text-xl italic font-bold">{init}</h3>;
};

export default Text;
