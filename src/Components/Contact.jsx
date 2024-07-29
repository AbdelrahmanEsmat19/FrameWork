import React, { useState } from "react";

export default function Contact() {
  const [userName, setUserName] = useState("");
  const [userAge, setUserAge] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  return (
    <div className="h-fit flex flex-col justify-center items-center text-center pt-28">
      <h2 className="text-main ">CONATCT SECTION</h2>
      <div className="flex items-center justify-center mt-4">
        <div className="bg-line me-3 w-20 h-1"></div>
        <i class="fa-solid text-main fa-star"></i>
        <div className="bg-line ms-3 w-20 h-1"></div>
      </div>
      <form className="flex flex-col justify-center container mx-auto py-10 items-center">
        <div className="relative lg:w-[80%] w-[80%] mb-8">
          <input
            type="text"
            className="bg-red py-2 w-[80%] lg:w-1/2 outline-none border-b-2"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
            placeholder=""
          />
          <label
            className={`absolute w-[59%] top-0 end-0 start-0 text-sm transition-all duration-300 ease-in-out text-gray-600 ${
              userName ? "text-green-600 -top-6" : ""
            }`}
          >
            User Name
          </label>
        </div>

        <div className="relative lg:w-[80%] w-[80%] mb-8">
          <input
            type="number"
            className="bg-red py-2 w-[80%] lg:w-1/2 outline-none border-b-2"
            value={userAge}
            onChange={(e) => setUserAge(e.target.value)}
            placeholder=""
          />
          <label
            className={`absolute w-[59%] top-0 end-0 start-0 text-sm transition-all duration-300 ease-in-out text-gray-600 ${
              userAge ? "text-green-600 -top-6" : ""
            }`}
          >
            User Age
          </label>
        </div>

        <div className="relative lg:w-[80%] w-[80%] mb-8">
          <input
            type="email"
            className="bg-red py-2 w-[80%] lg:w-1/2 outline-none border-b-2"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
            placeholder=""
          />
          <label
            className={`absolute w-[59%] top-0 end-0 start-0 text-sm transition-all duration-300 ease-in-out text-gray-600 ${
              userEmail ? "text-green-600 -top-6" : ""
            }`}
          >
            User Email
          </label>
        </div>

        <div className="relative lg:w-[80%] w-[80%] mb-8">
          <input
            type="password"
            className="bg-red py-2 w-[80%] lg:w-1/2 outline-none border-b-2"
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder=""
          />
          <label
            className={`absolute w-[59%] top-0 end-0 start-0 text-sm transition-all duration-300 ease-in-out text-gray-600 ${
              userPassword ? "text-green-600 -top-6" : ""
            }`}
          >
            User Password
          </label>
        </div>

        <button className="bg-main p-3 rounded mt-8 hover:bg-green-600 text-white">
          send Message
        </button>
      </form>
    </div>
  );
}