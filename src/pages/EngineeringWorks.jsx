import React from "react";
import EngineeringWorks from "../components/engineering-works/EngineeringWorks";
import Navbar from "../components/common/Navbar";

function Index() {
  return (
    <div className="bg-white w-full min-h-screen flex flex-col items-center relative">
      {/* Navbar */}
      <div className="w-full absolute top-0 left-0 z-50">
        <Navbar />
      </div>
      
      <main className="w-full">
        <EngineeringWorks />
      </main>
    </div>
  );
}

export default Index;