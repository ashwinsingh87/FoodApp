import React from "react";
const Shimmer = () => {
  return (
    <div className="flex flex-wrap mt-16 justify-center ">
      {Array(10)
        .fill("")
        .map((e, index) => 
(          <div key={index} className="w-72 m-2 border-solid border-2 h-80  bg-gray-300 shadow-lg p-3 ">
          </div>
)        )}
    </div>
  );
};

export default Shimmer;
