import React from "react";

const WhyUs = () => {
  return (
    <div className="my-10">
      <div className="font-bold sm:my-10 text-center sm:text-4xl ">
        {" "}
        Why Us{" "}
      </div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3 px-2 sm:px-20 sm:gap-3 ">{[1,1,1,1,1,1].map(()=> <div
        className="bg-green-500 rounded-md text-center py-5 "
        style={{
          transform: "rotate(0deg)",
        }}
      >
        Recognized by Govt. of India{" "}
      </div>)}  </div>
      
    </div>
  );
};

export default WhyUs;
