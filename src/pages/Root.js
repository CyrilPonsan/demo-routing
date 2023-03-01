import React from "react";
import { Link, Outlet } from "react-router-dom";

const RootLayout = () => {
  return (
    <div className="flex">
      <div className="w-[15%] max-h-[100vh] min-h-[100vh] px-4 bg-black text-white">
        <div>
          <h2 className="py-2 text-3xl font-bold">DEMO ROUTING</h2>
        </div>
        <ul className="mt-16">
          <li>
            <Link to="/">Accueil</Link>
          </li>
          <li>
            <Link to="/about">A Propos</Link>
          </li>
          <li>
            <Link to="/contacts">Contacts</Link>
          </li>
        </ul>
      </div>
      <Outlet />
    </div>
  );
};

export default RootLayout;
