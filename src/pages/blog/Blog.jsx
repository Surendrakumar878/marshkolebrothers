import React from "react";
import img from "../../assets/images/Trademark-classification-in-India.webp";
import { Image, Input } from "antd";
import { MdOutlineSearch } from "react-icons/md";
const Blog = () => {
  return (
    <div className="bg-gray-100 ">
      <div class="sm:flex sm:flex-row sm:justify-center sm:px-32 gap-3">
        <div class="flex flex-col  max-w-full justify-center items-center ">
          {[1, 2, 3].map((e) => (
            <div class="overflow-hidden md:w-full bg-white m-1 shadow-lg flex flex-col justify-center text-black hover:text-white hover:bg-pink-500  rounded">
              <div class="h-26 w-full overflow-hidden">
                {" "}
                <img src={img} alt="" class="" />{" "}
              </div>
              <div class="text-sm m-2">30 March, 2023</div>
              <div class="font-medium text-normal m-2">
                When all seems to be against you, remember, a ship sometimes has
                to sail against the current, not with it.{" "}
              </div>
            </div>
          ))}
        </div>

        <div className="sm:w-1/2">
          <div className="flex gap-2">
            {" "}
            <Input placeholder="Search " /> <MdOutlineSearch />{" "}
          </div>
          <div>
            <h1 className="font-bold text-center"> Recent post </h1>
{[11,1,11,].map((e)=>(<div className="flex gap-2 mb-4 text-xs">
              {" "}
              <div>
                <Image
                  src={img}
                  width={130}
                  className="rounded-lg"
                  preview={false}
                />
              </div>
              <div>
                <p className="font-bold py-2">Trademark Classification in India</p>
                <p> Published On 27 Sep 2023</p>
              </div>
            </div>

)) }

            

          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
