import React, { useState } from "react";

const KnowledgeForm = (props) => {
  const [type, setType] = useState("");
  const [marque, setMarque] = useState("");
  const [modele, setModele] = useState("");
  const [def, setDef] = useState("");

  const handleTypeChange = (e) => {
    setType(e.target.value);
  };

  const handleMarqueChange = (e) => {
    setMarque(e.target.value);
  };

  const handleModeleChange = (e) => {
    setModele(e.target.value);
  };

  const handleDefChange = (e) => {
    setDef(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    props.onSubmit({
      def,
      type,
      marque,
      modele,
    });
  };

  return (
    <form className="flex flex-col gap-y-2" onSubmit={handleSubmit}>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="typeMateriel">Type</label>
        <input
          className="py-2 px-4 border border-lightgray"
          type="text"
          value={type}
          onChange={handleTypeChange}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="marque">Marque</label>
        <input
          className="py-2 px-4 border border-lightgray"
          type="text"
          value={marque}
          onChange={handleMarqueChange}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="modele">Modele</label>
        <input
          className="py-2 px-4 border border-lightgray"
          type="text"
          value={modele}
          onChange={handleModeleChange}
        />
      </div>
      <div className="flex flex-col gap-y-1">
        <label htmlFor="def">Incident</label>
        <input
          className="py-2 px-4 border border-lightgray"
          type="text"
          value={def}
          onChange={handleDefChange}
        />
      </div>
      <div className="flex justify-end">
        <button className="px-3 py-1 bg-blue-700 text-blue-200 hover:bg-blue-900 cursor-pointer rounded-md">
          Submit
        </button>
      </div>
    </form>
  );
};

export default KnowledgeForm;
