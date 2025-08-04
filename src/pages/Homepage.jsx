import React from "react";
import Sidebar from "../component/Sidebar";
import { Main } from "../component/Main";


const Homepage = () => {
  return (
    <div className="homepage">
      <div className="d-flex gap-3">
        {/* sidebar */}
        <Sidebar />
        <div className="main-container">
          <Main />
        </div>
      </div>

      {/* main */}
      {/* searchbar */}
    </div>
  );
};

export default Homepage;
