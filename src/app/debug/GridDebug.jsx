"use client";

import { useState } from "react";

const GridDebugTool = ({ columns = 12 }) => {
  const [showGrid, setShowGrid] = useState(false);

  const toggleGrid = () => {
    setShowGrid(!showGrid);
  };

  return (
    <div>
      {showGrid && (
        <div className="section-padding-x pointer-events-none fixed inset-0 z-[999]">
          <div className=" grid h-screen grid-cols-4 gap-x-fluid  md:grid-cols-8 xl:grid-cols-12  ">
            {[...Array(columns)].map((_, index) => (
              <div
                key={index}
                className="col-span-1 h-screen bg-[#F60000] opacity-25"
              />
            ))}
          </div>
        </div>
      )}
      <button
        className="text-7xl bg-secondary-400 text-accent-400 fixed bottom-4 right-4 z-[993939] rounded px-3 py-2"
        onClick={toggleGrid}
      >
        {showGrid ? "Hide Grid" : "Show Grid"}
      </button>
    </div>
  );
};

export default GridDebugTool;
