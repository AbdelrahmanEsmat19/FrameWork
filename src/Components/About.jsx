import React from "react";

export default function About() {
  return (
    <div className="h-screen bg-main pt-36 lg:pt-0 text-center text-white justify-center items-center flex flex-col ">
      <h2>ABOUT COMPONENT</h2>
      <div className="flex items-center justify-center mt-4">
        <div className="bg-white me-3 w-20 h-1"></div>
        <i class="fa-solid text-white fa-star"></i>
        <div className="bg-white ms-3 w-20 h-1"></div>
      </div>
      <div className="flex flex-wrap container text-start px-24 pt-3">
        <p className="lg:w-1/2 w-full pb-5 lg:pb-0 lg:ps-5 lg:pe-4 ">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
        <p className="lg:w-1/2 w-full lg:pe-5">
          Freelancer is a free bootstrap theme created by Route. The download
          includes the complete source files including HTML, CSS, and JavaScript
          as well as optional SASS stylesheets for easy customization.
        </p>
      </div>
    </div>
  );
}
