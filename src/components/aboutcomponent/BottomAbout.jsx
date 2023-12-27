import { Image } from "antd";
import React from "react";
import tata from "../../assets/images/about/associated-tata.webp";
import icici from "../../assets/images/about/associated-icici.webp";
import paytm from "../../assets/images/about/associated-paytm.webp";
import newzee from "../../assets/images/about/zeenews.webp";
import tedx from "../../assets/images/about/Ted-x.webp";
import asia from "../../assets/images/about/Asia_One.webp";
import oli from "../../assets/images/about/oli-fic-iso-certified.webp";
const BottomAbout = () => {
  return (
    <div>
      <div>
        <div className="font-bold sm:my-10 text-center sm:text-4xl ">
         Associated with
        </div>
        <div
          className="grid grid-cols-2 sm:grid sm:grid-cols-3 align-middle sm:px-48 gap-5   my-3  p-3  "
        
        >
          <div className=" shadow-2xl  flex justify-center sm:w-72  " >
            <Image preview={false} width={"40%"} src={tata} />
          </div>
          <div className=" shadow-2xl flex justify-center sm:w-72 sm:pt-5 " >
            <Image preview={false} width={"60%"} src={icici} />
          </div>
          <div className="   shadow-2xl flex justify-center w-56 py-4 sm:w-72 sm:pt-6  " >
            <Image preview={false} width={"40%"} src={paytm} />
          </div>
        </div>
      </div>

      <div className="flex flex-col sm:justify-center sm:flex sm:flex-row ">
        <div>
        
          <div className="font-bold sm:my-10 text-center sm:text-4xl ">
          Appreciated / Awarded by
          </div>
          <div
            className="flex justify-center gap-2 flex-wrap my-3  p-3  "
            // style={{ border: "1px solid black" }}
          >   
          <div className=" shadow-2xl flex justify-center w-64 sm:py-2  " >
            <Image width={110} src={newzee} />
            </div>
            <div className=" shadow-2xl flex justify-center w-64 sm:pt-2  " >
            <Image width={110} src={tedx} /> 
            
             </div>
             <div className=" shadow-2xl flex justify-center w-64 sm:pt-5  " >
            <Image width={110} src={asia} /> 
            </div>
          </div>
        </div>{" "}
        <div>
          <div className="font-bold sm:my-10 text-center sm:text-4xl ">
            {" "}
            Certified / Recognized by{" "}
          </div>
          <div
            className="flex justify-center gap-2 flex-wrap my-3  p-3  "
            // style={{ border: "1px solid black" }}
          >
            {" "}
            <div className=" shadow-2xl flex justify-center w-72 sm:py-2  " >
            <Image width={50} src={oli} />
            </div>
            {/* <Image width={110} src={pea} /> <Image width={110} src={edu} />{" "} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BottomAbout;
