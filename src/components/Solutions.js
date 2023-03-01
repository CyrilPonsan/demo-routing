import React from "react";

const Solutions = ({ solutions }) => {
  let content = (
    <ul>
      {solutions.map((item) => (
        <li>item</li>
      ))}
    </ul>
  );

  return (
    <div className="fixed top-0 right-0 w-[25rem] h-[100vh] border-l border-black">
      {content}
    </div>
  );
};

export default Solutions;
