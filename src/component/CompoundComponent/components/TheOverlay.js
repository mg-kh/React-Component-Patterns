import React from "react";

const TheOverlay = ({ isShow = false, toggle, ...props }) => {
  return (
    <>
      <div
        onClick={toggle}
        className={`fixed inset-0 w-full h-screen bg-black/70 ${
          isShow ? "block" : "hidden"
        }`}
      >
        <div className="flex items-center justify-center w-full h-full">
          {props.children}
        </div>
      </div>
    </>
  );
};

export default TheOverlay;
