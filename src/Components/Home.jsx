import logo from "../assets/images/avataaars.svg";
export function Home() {
  return (
    <div className="text-center text-white bg-main h-fit pt-28 pb-12 items-center flex justify-center flex-col">
      <img src={logo} className="w-60" alt="" />
      <h2>START FRAMEWORK</h2>
      <div className="flex items-center justify-center mt-4">
        <div className="bg-white me-3 w-20 h-1"></div>
        <i class="fa-solid text-white fa-star"></i>
        <div className="bg-white ms-3 w-20 h-1"></div>
      </div>
      <p className=" mt-4">
        Graphic Artist - Web Designer - Illustrator
      </p>
    </div>
  );
}
