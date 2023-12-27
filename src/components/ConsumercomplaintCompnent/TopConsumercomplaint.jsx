import { Image, Input } from "antd";
import React from "react";
import img from "../../assets/images/consumercomplaint/consumer_1200_670.webp";
import CollapsMenu from "./CollapsMenu";
import FromCompent from "./FromCompent";
const TopConsumercomplaint = () => {
  return (
    <div className="text-center">
      <Image src={img} preview={false} />

      <div className="text-xl md:text-2xl font-semibold">
        {" "}
        (Fast Action) Submit Your Complaint Online
      </div>
      <div className="py-3 ">
        Fight your Case with the help of Online Legal India
      </div>

      <div className=" text-sm pt-5">
        Customer Is GOD! If any company has failed to serve good service or good
        product, customers have right to file complaint against the company &
        request for compensation in consumer court/forum. Online Legal India
        will provide you with legal support until your case is resolved. Save
        Time – Get Justice!
      </div>

      <div class="flex flex-col justify-center lg:flex-row  items-center lg:space-x-10 xl:space-x-24 sm:px-20 ">
        <FromCompent />
        <CollapsMenu />
      </div>
    </div>
  );
};

export default TopConsumercomplaint;
