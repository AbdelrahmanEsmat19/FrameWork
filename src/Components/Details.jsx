import React from "react";

export default function Details() {
  return (
    <div className="flex flex-wrap font-medium text-[28px] leading-8 text-center bg-[#2c3e50] p-12 min-h-64 justify-center items-center text-white">
      <div className="lg:w-1/3 md:w-full pb-10 lg:pb-0 ">
        <h3>LOCATION</h3>
        <p className="text-base font-normal" >2215 John Daniel Drive</p>
        <p className="text-base font-normal">Clark, MO 65243</p>
      </div>
      <div className="lg:w-1/3 md:w-full pb-10 lg:pb-0 ">
        <h3>AROUND THE WEB</h3>
        <ul className="flex justify-center space-x-[.5rem] font-normal text-base pt-4">
          <li><i className="fa-brands fa-facebook border p-2  rounded-full"></i></li>
          <li><i className="fa-brands border p-2  rounded-full fa-twitter "></i></li>
          <li><i className="fa-brands border p-2  rounded-full fa-linkedin-in"></i></li>
          <li><i className="fa-solid border p-2  rounded-full fa-globe"></i></li>
        </ul>
      </div>
      <div className="lg:w-1/3 md:w-full pb-10 lg:pb-0 ">
        <h3>ABOUT FREELANCER</h3>
        <p className="font-normal text-base">
          Freelance is a free to use, licensed Bootstrap theme created by Route
        </p>
      </div>
    </div>
  );
}
