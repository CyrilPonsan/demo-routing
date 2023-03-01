import React, { useEffect, useState } from "react";
import KnowledgeForm from "../components/KnowledgeForm";
import Solutions from "../components/Solutions";
import useHttp from "../hooks/use-http";

const HomePage = () => {
  const [solutions, setSolutions] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  const handleSubmit = (incident) => {
    console.log(incident);
    const applyData = (data) => {
      setSolutions(data.toto);
    };
    sendRequest(
      {
        path: "/knowledge",
        method: "post",
      },
      applyData
    );
    console.log(solutions);
  };

  return (
    <div className="bg-white w-screen min-h-screen flex flex-col items-center">
      <h1 className="text-3xl uppercase underline font-bold mt-8">Accueil</h1>
      <div className="h-full flex items-center">
        {solutions.length === 0 && <KnowledgeForm onSubmit={handleSubmit} />}
        {/*     {solutions.length !== 0 && <Solutions solutions={solutions} />} */}
      </div>
    </div>
  );
};

export default HomePage;
