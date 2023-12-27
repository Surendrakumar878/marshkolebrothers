import React from "react";
import img from "../../assets/images/services/Consumer-Complaint-OLI.webp";
import img2 from "../../assets/images/services/trademark.webp";
import img3 from "../../assets/images/services/GST-LOI.webp";
import img4 from "../../assets/images/services/fssai.webp";
import img5 from "../../assets/images/services/Corporate-Related-Services-OLI.webp";
import { FcCallback, FcFeedback } from "react-icons/fc";
import { FaHeadset } from "react-icons/fa";
import { MdSettingsSuggest } from "react-icons/md";
const Contact = () => {
  const service = [
    {
      name: "Consumer Complaint.",
      img: img,
      des: " Being a Consumer, at the time of purchase, one if deceived by the seller should be aware",
    },
    {
      name: "Trademark Registration Online",
      img: img2,
      des: " Get your Trademark registration from anywhere in India and protect your Brand Name/Logo/Slogan.",
    },
    {
      name: "GST Services.",
      img: img3,
      des: " Being a Consumer, at the time of purchase, one if deceived by the seller should be aware",
    },
  ];
  return (
    <div>
      <div class=" px-3 ">
        <div class="bg-white flex justify-center">
          <div class="bg-white shadow-lg sm:mt-20 md:w-[80%] grid gap-3 lg:flex lg:gap-4 justify-center">
            <div class="lg:w-1/2 h-auto  ">
              <div className="bg-green-500 py-10 rounded-2xl ">
                <div class="text-white m-6 font-medium">
                  {" "}
                  Contact Information{" "}
                </div>
                <div class="text-white m-6 text-sm flex">
                  <ion-icon name="location-sharp" class="m-2"></ion-icon>
                  <div> 4329 Travis Street, Red Fort L.A., 34950 </div>
                </div>
                <div class="text-white m-6 text-sm flex">
                  <ion-icon name="call-outline" class="m-2"></ion-icon>
                  <div> +1 987-6543-210 </div>
                </div>
                <div class="text-white m-6 text-sm flex">
                  <ion-icon name="mail-outline" class="m-2"></ion-icon>
                  <div> admin@tailwind.org </div>
                </div>
                <div class="text-white m-6 text-sm flex">
                  <ion-icon name="globe-outline" class="m-2"></ion-icon>
                  <div> www.tailwind.org </div>
                </div>
              </div>
            </div>
            <div class="flex flex-col md:grid md:grid-cols-2 md:gap-5 max-w-7xl justify-center items-center">
              {service?.map((e) => (
                <div class="overflow-hidden w-full md:w-full bg-white  shadow-sm flex flex-col justify-center">
                  <div class=" w-full overflow-hidden">
                    {" "}
                    <img src={e.img} alt="" class=" w-full rounded-2xl" />{" "}
                  </div>
                  {/* <div class="text-sm text-gray-500 m-2">30 March, 2023</div> */}
                  <div class="font-bold text-lg text-black m-2"> {e.name}</div>
                  <div class="text-gray-500 m-2 text-sm">
                    <a href="">{e.des}</a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-2 sm:grid sm:grid-cols-4 bg-gray-200 sm:px-16 ">
        <div className="flex justify-center py-5 gap-2"> <FcCallback className="text-3xl"/> <p className="font-bold text-2xl">call back </p> </div>
        <div className="flex justify-center py-5 gap-2"> <FaHeadset className="text-3xl"/> <p className="font-bold text-2xl">call back </p> </div>
        <div className="flex justify-center py-5 gap-2"> <FcFeedback className="text-3xl"/> <p className="font-bold text-2xl">call back </p> </div>
        <div className="flex justify-center py-5 gap-2"> <MdSettingsSuggest className="text-3xl"/> <p className="font-bold text-2xl">call back </p> </div>
      </div>
      <div class="w-full lg:w-full ">
        <div class="w-full lg:w-full overflow-contain h-min">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d387193.315540303!2d-74.26054823358196!3d40.697147766721685!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c24fa5d33f083b%3A0xc80b8f06e177fe62!2sNew%20York%2C%20NY%2C%20USA!5e0!3m2!1sen!2sin!4v1656264173526!5m2!1sen!2sin"
            className="w-full"
            // width="375"
             height="330"
            //  style="border:0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
