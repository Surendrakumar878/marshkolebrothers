import React from "react" ;
const Heading = ({ name = "heading", line = 44 }) => {
  console.log(typeof name.length);
  return (
    <div>
      <div class="font-bold my-5 text-center text-2xl text-black  m-auto      ">
        {name}
      </div>
    
    </div>
  );
};

export default Heading;
