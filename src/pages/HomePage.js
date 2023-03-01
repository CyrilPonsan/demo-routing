import React, { useEffect, useState } from "react";
import KnowledgeForm from "../components/KnowledgeForm";
import useHttp from "../hooks/use-http";

const HomePage = () => {
  const [solutions, setSolutions] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  useEffect(() => {
    const applyData = (data) => {
      setSolutions(data);
    };
    sendRequest(
      {
        path: "/knowledge",
        method: "post",
      },
      applyData
    );
  }, [sendRequest]);

  const handleSubmit = (incident) => {
    console.log(incident);
  };

  return (
    <div className="bg-white w-screen min-h-screen flex flex-col items-center">
      <h1 className="text-3xl uppercase underline font-bold mt-8">Accueil</h1>
      <div className="h-full flex items-center">
        {solutions.length === 0 && <KnowledgeForm onSubmit={handleSubmit} />}
      </div>
    </div>
  );
};

export default HomePage;
