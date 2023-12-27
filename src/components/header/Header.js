import React, { useState } from "react";
import { NavLink, Link } from "react-router-dom";
import { GiHamburgerMenu } from "react-icons/gi";
import { MdMarkEmailRead } from "react-icons/md";
import { IoLogoWhatsapp, IoMdArrowDropdown } from "react-icons/io";
import { RiShieldUserFill } from "react-icons/ri";
import { FaPhone } from "react-icons/fa";
// import Button from "./Button";
// import logo from '../assets/ColorLogo.png'
import { motion } from "framer-motion";
import { BsYoutube, BsTwitter, BsCart } from "react-icons/bs";
import { DiGithubAlt } from "react-icons/di";
import { AiOutlineClose } from "react-icons/ai";
import { AiFillInstagram } from "react-icons/ai";
import { FaFacebookF, FaTelegramPlane, FaLinkedinIn } from "react-icons/fa";
import { Button, Dropdown, Image, Menu, Space } from "antd";
// import { useMyCartQuery } from "../services/profile";
// import { getToken } from "../services/studentStorage";
// import ButtonLogout from "./ButtonLogout";
// import { removeToken } from "../services/LocalStorage";
// import { useNavigate } from "react-router-dom";
// import { useGetStudentProfileQuery } from "../services/profile";
// import img from "../assets/Unknown.png";
import useDropdownMenu from 'react-accessible-dropdown-menu-hook';
import FeaturesLink from "./Features";
const Header = ({ sticky }) => {
  // const navigate = useNavigate();
  // const token = getToken("token");
  // const { data } = useMyCartQuery(token);
  // console.log(data);
  const [open, setOpen] = useState(false);
  const [toggle,setToggle]=useState(false)

  const LogOut = () => {
    // removeToken("token");
    // navigate("/signup/login");
  };
  // const { data: Data } = useGetStudentProfileQuery(token);
 





  const state = [
    {
        categoryName: "Incorporation",
        links: [{
            name: " Private Limited Company",
            route: "privatelimitedcompany"
        },
        {
            name: "LLP Registration",
            route: "project-management"
        }, {
            name: "One Person Company",
            route: "integration"
        }, {
            name: "Public Limited Company",
            route: "hosting"
        },
        {
          name: "Section 8 Company",
          route: "integration"
      }, {
          name: "Nidhi Company",
          route: "hosting"
      }]
    },
    
]












 






const state2 = [
  {
      categoryName: "Trademark",
      links: [{
          name: "Trademark Registration",
          route: "code-review"
      },
      {
          name: "Trademark Renewal",
          route: "project-management"
      }, {
          name: "Trademark Objection",
          route: "integration"
      }, {
          name: "Trademark Opposition",
          route: "hosting"
      },
      {
        name: "Trademark Hearing",
        route: "integration"
    }, {
        name: "Trademark Assignment",
        route: "hosting"
    },
    {
      name: "Logo Design",
      route: "integration"
  }, {
      name: "Series Trademark",
      route: "hosting"
  }
    ]
  },
  {
      categoryName: "Copyright",
      links: [{
          name: "Copyright Registration",
          route: "discussion"
      },
  ]
  },
  {
    categoryName: "Patent",
    links: [{
        name: "Patent Search",
        route: "discussion"
    },
    {
        name: "Provisional Patent",
        route: "question-answer"
    }, {
        name: "Permanent Patent",
        route: "team-management"
    },]
}
]











const state3 = [
  {
      categoryName: "Legal Help",
      links: [{
          name: "Code Review",
          route: "code-review"
      },
      {
          name: "Legal Notice",
          route: "project-management"
      }, {
          name: "Online Legal Advice",
          route: "integration"
      }, {
          name: "Advice on Divorce",
          route: "hosting"
      }]
  },
  {
      categoryName: "Legal Drafting",
      links: [{
          name: "Rent Deed Drafting",
          route: "discussion"
      },
      {
          name: "Partnership Deed Drafting",
          route: "question-answer"
      }, {
          name: "Sale Deed Drafting",
          route: "team-management"
      },
      {
        name: "Lease Deed Drafting",
        route: "question-answer"
    }, {
        name: "Joint Venture Deed",
        route: "team-management"
    },]
  }
]

  return (
    <>
      <div className="text-black">
     
        {/* Top Portion */}
        <motion.div
          animate={{ scale: 1 }}
          initial={{ scale: 3 }}
          transition={{ duration: 0.5 }}
        >
          <div className="bg-[#757574] text-black h-[50px] hidden md:block text-sm  font-body">
            <div className="w-full h-full flex justify-between items-center text-white px-20 ">
              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 1 }}
                className="flex gap-2 items-center"
              >
                <span className="text-xl">
                  <FaPhone />
                </span>
                <a
                  className=" no-underline text-sm text-white tracking-wide"
                  href="mailto:info@"
                >
                  {" "}
                  <u className="no-underline "> 08069029400 </u>{" "}
                </a>
                <span className="text-xl">
                  <MdMarkEmailRead />
                </span>
                Email :
                <a
                  className=" text-sm text-white tracking-wide"
                  href="mailto:info@"
                >
                  {" "}
                  <u className="no-underline ">
                    {" "}
                    info@onlinelegalindia.com{" "}
                  </u>{" "}
                </a>
              </motion.div>

              <motion.div
                animate={{ scale: 1 }}
                initial={{ scale: 0 }}
                transition={{ duration: 1 }}
                className="flex  gap-6 text-lg"
              >
                <Link
                  to="https://www.facebook.com"
                  target="_blank"
                  title="facebook"
                  className="text-white text-sm  hover:text-gold hover:scale-125 duration-300 "
                >
                  Login Now
                </Link>

                <Link
                  to="https://github.com/"
                  target="_blank"
                  title="github"
                  className="duration-300 text-white text-xl hover:scale-125 hover:text-gold"
                >
                  <RiShieldUserFill />
                </Link>
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* <Header /> */}
        <header
          className={` ${
            sticky
              ? "sticky md:h-16  transition-all md:px-20 md:opacity-80 md:bg-white z-30 "
              : null
          }  flex justify-between items-center px-4 md:px-24 h-24 w-full 
            bg-white duration-700`}
        >
          <NavLink to="/">
            <Image className="   " preview={false} src="logo6-1.svg" alt="" />{" "}
            {/* online logo */}
          </NavLink>

          <nav className="z-30 ">
            {open ? (
              <button onClick={() => setOpen(!open)} className="md:hidden">
                <AiOutlineClose className="h-8 w-8 text-black" />
              </button>
            ) : (
              <button onClick={() => setOpen(!open)} className="md:hidden">
                <GiHamburgerMenu className="h-8 w-8 text-black" />
              </button>
            )}
            <ul
              className={`${sticky ? "md:bg-white z-30" : ""} ${
                open ? "translate-x-0" : "translate-x-full"
              } fixed left-0
                right-0 min-h-screen bg-white/80 text-black space-y-4 p-4  md:relative md:flex md:min-h-0 md:space-y-0 md:space-x-6 md:p-0 md:translate-x-0 transition duration-200 transfrom items-center `}
            >{toggle?
              <div className="sm:flex sm:flex-row sm:gap-4">
              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="hover:text-pink-first"
                onClick={() => setOpen(!open)}
              >
                <NavLink className={"sm:text-sm text-sm"} to="/">Home</NavLink>
              </motion.li>

              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="hover:text-pink-first"
                onClick={() => setOpen(!open)}
              >
                <NavLink to="about" className={"sm:text-sm text-sm"}>About Us</NavLink>
              </motion.li>

              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="hover:text-pink-first"
                onClick={() => setOpen(!open)}
              >
                <NavLink to="contact" className={"sm:text-sm text-sm"}>Contact</NavLink>
              </motion.li>

              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="hover:text-pink-first"
              >
                <NavLink to="career" onClick={() => setOpen(!open)}>
                  <button className={"sm:text-sm text-sm"}>Career </button>
                </NavLink>
              </motion.li>

              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.8 }}
                className="hover:text-pink-first"
              >
                <NavLink to="blog" onClick={() => setOpen(!open)}>
                  <button className={"sm:text-sm text-sm"}>Blog</button>
                </NavLink>
              </motion.li>
              </div>
              :
              <div className="sm:flex sm:flex-row sm:gap-4">

             
              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.2 }}
                className="hover:text-pink-first"
                onClick={() => setOpen(!open)}
              >
                <NavLink className={"sm:text-sm text-sm"} to="/consumercomplaint">Consumer Complaint</NavLink>
              </motion.li>

              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="hover:text-pink-first"
                onClick={() => setOpen(!open)}
              >
                <NavLink to="about" className={"flex"}>
                <FeaturesLink state={[...state]} name={"  Company Registration"}/><IoMdArrowDropdown /> </NavLink>
              </motion.li>

              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.4 }}
                className="hover:text-pink-first"
                onClick={() => setOpen(!open)}
              >
                <NavLink to="contact" className={"flex"}> 
                <FeaturesLink state={[...state2]} name={"  Trademark & IPR"}/><IoMdArrowDropdown /> </NavLink>
              </motion.li>

              <motion.li
                initial={{ y: "-5vh", opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6 }}
                className="hover:text-pink-first"
              >
                <NavLink to="service" onClick={() => setOpen(!open)}>
                  <button className="flex">
                   <FeaturesLink state={[...state3]} name={"  Legal Services"}/><IoMdArrowDropdown />  </button>
                </NavLink>
              </motion.li>
              </div>
              }
              <Button onClick={()=>setToggle(!toggle)} > ::: </Button>
            
            </ul>
          </nav>
        </header>
      </div>
    </>
  );
};

export default Header;
