import React from "react";

const Rainbow = (WrappedComponent) => {
  const colors = ["red", "blue", "green", "orange", "yellow", "purple"];
  const randomColor = colors[Math.floor(Math.random() * 6)]; //use 6 because we have 6 input colors
  const className = randomColor + "-text"; //red-text same like bootstrap
  return (props) => (
    <div className={className}>
      <WrappedComponent {...props} />
    </div>
  );
};

export default Rainbow;
