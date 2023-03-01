import React, { useState } from "react";
import KnowledgeForm from "../components/KnowledgeForm";
import Solutions from "../components/Solutions";
import Loader from "../components/UI/Loader";
import useHttp from "../hooks/use-http";

const HomePage = () => {
  const [solutions, setSolutions] = useState([]);
  const { isLoading, error, sendRequest } = useHttp();

  const handleSubmit = (incident) => {
    console.log(incident);
    const applyData = (data) => {
      const loadedData = [];
      data.forEach((item) => {
        if (item.length > 0) {
          loadedData.push(item);
        }
      });
      setSolutions(loadedData);
    };
    sendRequest(
      {
        path: "/knowledge",
        method: "post",
        headers: { "Content-Type": "application/json" },
        body: incident,
      },
      applyData
    );
    console.log(solutions);
  };

  return (
    <div className="bg-white w-screen min-h-screen flex flex-col">
      <div className="flex justify-center">
        <h1 className="text-3xl uppercase underline font-bold mt-8">Accueil</h1>
      </div>
      <div className="mt-16 ml-8">
        {!isLoading && <KnowledgeForm onSubmit={handleSubmit} />}
      </div>
      <div className="h-full flex justify-center items-center">
        {isLoading && <Loader />}
        {solutions.length !== 0 && <Solutions solutions={solutions} />}
      </div>
    </div>
  );
};

export default HomePage;
