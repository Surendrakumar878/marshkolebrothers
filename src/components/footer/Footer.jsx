import { Image } from "antd";
import React from "react";
import { PiFacebookLogoLight, PiInstagramLogoLight, PiLinkedinLogoLight, PiTwitterLogo, PiYoutubeLogoLight } from "react-icons/pi";
const Footer = () => {
  return (
    <div>
      <div className="flex bg-gray-300 items-center justify-center">
        <div className="m-2 max-w-5xl items-center">
          <div className="flex flex-col items-center">
            <div> <Image src="fastinfo-group.svg" preview={false} /> </div>
            <div className=" text-xs sm:text-base text-center " >Online Legal India is a part of FastInfo Legal Services Pvt Ltd. Which is registered under the Companies Act, 2013, recognized by the Govt. of India.</div>
            
            <div> Disclaimer :</div>
            <div className=" text-xs sm:text-base text-center ">
            This is not a Government run Website and the form is not the actual registration form, it is just to collect information from our clients so that our expert can easily understand their business or needs. By proceeding forward with this website you are aware that we are a private company managing this website and providing assistance based on the request from our customers and the fee collected in this website is a consultancy fee.
            </div>

            <div className=" flex flex-wrap text-xs sm:text-base text-center justify-center ">
              <b className="text-center">

View Customer Reviews:
              </b>
Disha SharmaDR. NEWTON SHARMAVrushikesh GholapLokesh SharmaAditya EnterprisesShivanand MalageSharmistha mallikKamini CharanNAMMA KOPPALAKaustav GhoshSabari Krishnan K</div>
            <div className="m-2 text-2xl ">
              {" "}
              <a
                href="#"
                className="w-9 h-10 text-center   text-violet-600 hover:text-black pt-1 inline-block"
              >
               <PiFacebookLogoLight />
              </a>{" "}
              <a
                href="#"
                className="w-9 h-10 text-center   text-blue-600 hover:text-black pt-1 inline-block"
              >
                <PiTwitterLogo />
              </a>{" "}
              <a
                href="#"
                className="w-9 h-10 text-center   text-rose-600 hover:text-black pt-1 inline-block"
              >
                <PiLinkedinLogoLight />
              </a>{" "}
              <a
                href="#"
                className="w-9 h-10 text-center   text-red-600 hover:text-black pt-1 inline-block"
              >
              <PiYoutubeLogoLight />
              </a>{" "}
              <a
                href="#"
                className="w-9 h-10 text-center   text-orange-600 hover:text-black pt-1 inline-block"
              >
               <PiInstagramLogoLight />
              </a>{" "}
            </div>
            <div className="flex md:flex-row flex-col">
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="#">View Customer Reviews</a>
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="#">About us </a>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="#">Careers </a>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="#">Contact Us </a>{" "}
              </p>
              <p className="hover:text-blue-600 text-gray-500 font-medium m-2">
                {" "}
                <a href="#"> Blog s </a>{" "}
              </p>
            </div>
            <div className="text-gray-500 font-medium mt-4 text-xs">
              {" "}
              Copyrights 2019 - 2023 Online Legal India.{" "}
              <a href="#" className="text-blue-600">
              
Refund Policy Privacy Policy Terms and Conditions
              </a>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
