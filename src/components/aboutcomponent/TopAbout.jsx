import React from "react";
import img1 from "../../assets/images/about/vision-and-mission.webp";
import img2 from "../../assets/images/about/our-aim.webp";
import img3 from "../../assets/images/about/MD1.webp";
import zeenew from "../../assets/images/about/zeenews.webp";
import tedx from "../../assets/images/about/Ted-x.webp";
import forbes from "../../assets/images/about/footer-forbes-logo.webp";
import asia from "../../assets/images/about/Asia_One.webp";
import mid from "../../assets/images/about/midday9999.webp";
import oxf from "../../assets/images/about/oxford.webp";
import pea from "../../assets/images/about/Pearson_logo.webp";
import edu from "../../assets/images/about/educomp_logo_1.webp"

import { Image } from "antd";
const TopAbout = () => {
  return (
    <div>
      {/* <div className="  px-4 xl:px-40 py-14 xl:pt-20 ">
        <div class="font-bold text-2xl text-black m-2 text-center ">
          {" "}
          About Us
        </div>
        <div className=" text-xs sm:text-base text-center ">
          FastInfo Legal Services Pvt Ltd. is registered under the Companies
          Act, 2013, recognised by the Govt. of India, which is specialized in
          providing legal help and providing people legal information just in
          their hands to easily use it.
        </div>

        <div className=" text-xs sm:text-base text-center ">
          Our core team consists of skilled and proficient qualified Advocates,
          along with a diligent team of other professionals, all under one roof.
          They provide solution to all the individual, business person,
          corporate body and others to get better help for the issues faced by
          them in their everyday life.
        </div>
      </div> */}
      <div class="flex justify-center">
        <div class="flex flex-col max-w-7xl justify-center items-center">
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img src={img1} alt="" class="" />{" "}
            </div>
            <div class="grid p-2">
              <div class="font-bold text-xl text-black m-2 mt-10">
                VISION & MISSION
              </div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  FastInfo Legal Services Pvt. Ltd is a company, providing legal
                  help to the customer with ease and with a motive to resolve
                  their issues at a go. Our company vision is to solve the
                  customer issue smoothly, so that trust is built between our
                  clients and us. “We assure our clients with the best provided
                  service with a good quality, to create better everyday life
                  for poeple"
                </a>
              </div>
            </div>
          </div>
          <div class="overflow-hidden w-3/4 bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="grid p-2">
              <div class="font-bold text-xl text-black m-2 mt-10">OUR AIM</div>
              <div class="text-gray-500 m-2 text-sm">
                <a href="">
                  We provide with the best of services to all our clients and
                  understand their needs and problems and so that accordingly we
                  can file the complaint with sincerity, thus helping them to
                  resolve their issues, in no time.
                </a>
              </div>
            </div>
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <img src={img2} alt="" class="" />{" "}
            </div>
          </div>
          <div class="overflow-hidden w-3/4 rounded-xl bg-white m-4 shadow-lg flex flex-col md:flex-row justify-center">
            <div class="h-26 w-full overflow-hidden">
              {" "}
              <Image
                src={img3}
                alt=""
                className=""
                style={{ borderRadius: "50%" }}
              />
              <div className="font-bold text-lg text-center ">
                RAJESH KEWAT
                <p className="font-bold text-lg text-center">
                  Founder of Online Legal India
                </p>
              </div>
            </div>
            <div>
              <div class="sm:flex sm:flex-row flex justify-center flex-col gap-2 sm:gap-6 p-2">
                <div className="flex justify-center">
                  <Image src={zeenew} width={100} className="m-auto" />
                </div>
                <div class="font-bold text-base text-black text-center sm:text-left ">
                  Meet Rajesh Kewat, The Small Town Entrepreneur Behind Online
                  Legal India's Success
                </div>
              </div>

              <div class="sm:flex sm:flex-row flex justify-center flex-col gap-2 sm:gap-6 p-2">
                <div className="flex justify-center">
                  <Image src={tedx} width={100} className="m-auto" />
                </div>
                <div class="font-bold text-base text-black text-center sm:text-left ">
                  Meet Rajesh Kewat, The Small Town Entrepreneur Behind Online
                  Legal India's Success
                </div>
              </div>
              <div class="sm:flex sm:flex-row flex justify-center flex-col gap-2 sm:gap-6 p-2">
                <div className="flex justify-center">
                  <Image src={forbes} width={100} className="m-auto" />
                </div>
                <div class="font-bold text-base text-black text-center sm:text-left ">
                  Meet Rajesh Kewat, The Small Town Entrepreneur Behind Online
                  Legal India's Success
                </div>
              </div>
              <div class="sm:flex sm:flex-row flex justify-center flex-col gap-2 sm:gap-6 p-2">
                <div className="flex justify-center">
                  <Image src={asia} width={100} className="m-auto" />
                </div>
                <div class="font-bold text-base text-black text-center sm:text-left ">
                  Rajesh Kewat, the MD of FastInfo Legal Services Pvt Ltd, owns
                  a movie-like story; a man who lost everything for his love &
                  attained great success within just 500 days with his
                  innovative business. Mid Day
                </div>
              </div>
              <div class="sm:flex sm:flex-row flex justify-center flex-col gap-2 sm:gap-6 p-2">
                <div className="flex justify-center">
                  <Image src={mid} width={100} className="m-auto" />
                </div>
                <div class="font-bold text-base text-black text-center sm:text-left ">
                  Rajesh Kewat Conferred with Businessman of the Year Award at
                  Brands Impact NFA 2022.
                </div>
              </div>
              <div
                className="flex justify-center sm:px-44 gap-2 flex-wrap my-3  p-3  "
                style={{ border: "1px solid black" }}
              >
               
                <Image width={110} src={oxf} /> 
                <Image width={110} src={pea} />{" "}
                <Image width={110} src={edu} />{" "}
              </div>
              <div className="text-end font-bold text-sm  " >‘Kahin par pohochne ke liye, kahin se nikalna bohot zaroori hota hai’ </div>
              <div className="text-end font-bold text-sm  " >- Yeh Jawani Hain Deewani </div>
              <div className="text- font-bold text-sm  " >The Founder & MD of Online Legal India, Mr. Rajesh Kewat actually had the courage to sacrifice his well paid job at Oxford and turn his startup dream into a crore turnover company.
 </div>
 <div className="text-end font-bold text-sm  " >- Rajesh Kewat </div>
             
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopAbout;
