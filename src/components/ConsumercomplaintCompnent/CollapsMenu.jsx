import React, { useState } from "react";
import { motion } from "framer-motion";
import { AiFillPlusCircle, AiFillMinusCircle } from "react-icons/ai";
import { BsArrowRight } from "react-icons/bs";
// import strategy from '../../assets/strategy.jpg'

const CollapsMenu = () => {
  const [open, setOpen] = useState(false);
  const [open1, setOpen1] = useState(false);
  const [open2, setOpen2] = useState(false);
  const [open3, setOpen3] = useState(false);
  const [open4, setOpen4] = useState(false);
  const [open5, setOpen5] = useState(false);
  const [open6, setOpen6] = useState(false);
  return (
    <>
      <div className=" py-1 w-full bg-black text-white">
        {/* <div className=' p-5 w-10/12 m-auto ' > */}

        {/* First */}
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          className="border-b bg-[#1E2222] rounded-b-md shadow-xl cursor-pointer  mt-8 "
        >
          <motion.div
            layout="position"
            onClick={() => setOpen1(!open1)}
            className="flex justify-between items-center w-full text-2xl px-4"
          >
            <div className="flex gap-4 py-3 items-center w-full">
              <div className="text-blue-500 md:text-sm text-sm ">01.</div>
              <div className="md:text-sm text-sm">
                [Updated] Consumer Protection Act, 2019
              </div>
            </div>
            {open1 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </motion.div>

          <div
            className={`${
              open1 ? "block" : "hidden"
            } mt-5 p-1 grid md:grid-cols-1`}
          >
            <div>
              {/* <img className='max-h-56 w-full object-contain rounded' src={strategy} alt="" /> */}
            </div>
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start text-center md:text-left">
              <p className="mt-3">
                We offer a comprehensive range of website design services,
                including custom website design, e-commerce website design,
                mobile website design, and website redesign.
              </p>

              {/* <span className='flex  gap-2 items-center py-3 text-xl ' >
                                    click Here
                                    <div className='p-3  bg-gradient-to-l rounded-full from-[#DD0A1C] to-[#F31ECE]' >
                                        <BsArrowRight />
                                    </div>
                                </span> */}
            </div>
          </div>
        </motion.div>

        {/* second */}
        <motion.div
          transition={{ layout: { duration: 1, type: "spring" } }}
          layout
          className="border-b bg-[#1E2222] rounded-b-md shadow-xl cursor-pointer  mt-8 "
        >
          <motion.div
            layout="position"
            onClick={() => setOpen2(!open2)}
            className="flex justify-between items-center text-2xl px-4"
          >
            <div className="flex gap-4 py-3 md:text-sm text-sm items-center w-[100%]">
              <div className="text-blue-500">02.</div>
              <div className="md:text-sm text-sm">
              Compensation & Penalties As Per Bill, 2019
              </div>
            </div>
            {open2 ? <AiFillMinusCircle /> : <AiFillPlusCircle />}
          </motion.div>

          <div
            className={`${
              open2 ? "block" : "hidden"
            } mt-5 p-4 grid md:grid-cols-1`}
          >
            <div>
              {/* <img className='max-h-56 w-full object-contain rounded' src={teacher} alt="" /> */}
            </div>
            <div className="flex flex-col items-center justify-center md:justify-start md:items-start text-center md:text-left">
              <p className="mt-3">
                Our live coaching classes are led by industry experts who have
                years of experience in their respective fields. They provide
                practical and actionable tips and advice that can help our
                clients take their online presence to the next level.
              </p>

              {/* <span className='flex  gap-2 items-center py-3 text-xl ' >
                                    click Here
                                    <div className='p-3  bg-gradient-to-l rounded-full from-[#DD0A1C] to-[#F31ECE]' >
                                        <BsArrowRight />
                                    </div>
                                </span> */}
            </div>
          </div>
        </motion.div>
        {/* </div> */}
      </div>
    </>
  );
};

export default CollapsMenu;
