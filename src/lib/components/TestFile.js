import React from "react";

const TestFile = () => {
  return (
    <div className="flex flex-col justify-center h-96 text-6xl items-center border-2 m-32 border-black">
      Testing Package
      <div className="text-xl flex gap-5 mt-5">
        <button className=" border-blue-500 border-2 px-5 py-2">test</button>
        <input className="bg-green-500" placeholder="TEST PLACEHOLDER" />
      </div>
    </div>
  );
};

export default TestFile;
