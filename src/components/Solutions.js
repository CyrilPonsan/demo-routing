import React from "react";

const Solutions = ({ solutions }) => {
  let content = (
    <ul>
      {solutions.map((item, i) => (
        <li className="p-4 flex flex-col gap-y-2" key={i}>
          {item}
          <div className="flex justify-end">
            <button className="btn text-xs">Enregistrer</button>
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <div className="overflow-auto fixed top-0 right-0 w-[25rem] h-[100vh] border-l border-gray-500/50">
      <div className="p-4 text-3xl font-bold">Réponses</div>
      <div> {content}</div>
    </div>
  );
};

export default Solutions;
