import React, { useEffect } from "react";
import port1 from "../assets/images/port1.png";
import port2 from "../assets/images/port2.png";
import port3 from "../assets/images/port3.png";

export default function Portfolio() {
  useEffect(() => {
    const imgList = document.querySelectorAll(".overlay");
    const lightBox = document.querySelector(".light-box");
    const itemLightBox = document.querySelector(".item");
    const iconX = document.querySelector(".icon-x");
    imgList.forEach((img) => {
      img.addEventListener("click", (e) => {
        lightBox.classList.replace("hidden", "flex");
        const imgSrc = e.target.parentNode.parentNode.querySelector("img").src;
        itemLightBox.style.backgroundImage = `url(${imgSrc.replace(
          window.location.origin,
          ""
        )})`;
        iconX.addEventListener("click", function () {
          lightBox.classList.replace("flex", "hidden");
        });
      });
    });
  }, []);

  return (
    <div className=" text-center pt-28">
      <h1 className="text-[40px] text-main font-bold">PORTFOLIO COMPONENT</h1>
      <div className="flex items-center justify-center mt-4">
        <div className="bg-line me-3 w-20 h-1"></div>
        <i className="fa-solid text-main fa-star"></i>
        <div className="bg-line ms-3 w-20 h-1"></div>
      </div>
      <div className="flex flex-wrap container mx-auto ">
        <div className="lg:w-1/3  p-8 ">
          <div className="relative">
            <img src={port1} className="rounded" alt="" />
            <div className="absolute overlay  cursor-pointer flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full bg-main opacity-0 transition duration-500 ease-in-out hover:opacity-80">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3  p-8 ">
          <div className="relative">
            <img src={port2} className="rounded" alt="" />
            <div className="absolute overlay cursor-pointer flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full bg-main opacity-0 transition duration-500 ease-in-out hover:opacity-80">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3  p-8 ">
          <div className="relative">
            <img src={port3} className="rounded" alt="" />
            <div className="absolute overlay cursor-pointer flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full bg-main opacity-0 transition duration-500 ease-in-out hover:opacity-80">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3  p-8 ">
          <div className="relative">
            <img src={port1} className="rounded" alt="" />
            <div className="absolute overlay cursor-pointer flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full bg-main opacity-0 transition duration-500 ease-in-out hover:opacity-80">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
        </div>

        <div className="lg:w-1/3  p-8 ">
          <div className="relative">
            <img src={port2} className="rounded" alt="" />
            <div className="absolute overlay cursor-pointer flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full bg-main opacity-0 transition duration-500 ease-in-out hover:opacity-80">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
        </div>
        <div className="lg:w-1/3  p-8 ">
          <div className="relative">
            <img src={port3} className="rounded" alt="" />
            <div className="absolute overlay cursor-pointer flex items-center justify-center bottom-0 left-0 right-0 top-0 h-full w-full bg-main opacity-0 transition duration-500 ease-in-out hover:opacity-80">
              <i className="fa-solid fa-plus text-8xl text-white"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="light-box hidden  fixed top-0 items-center justify-center  start-0  end-0 bottom-0 bg-light-box">
        <div className="item flex justify-end lg:w-[50%] w-[80%] translate-y-12 h-[70vh] ">
          <i class="fa-solid icon-x fa-xmark cursor-pointer m-5 text-3xl text-red-600"></i>
        </div>
      </div>
    </div>
  );
}
