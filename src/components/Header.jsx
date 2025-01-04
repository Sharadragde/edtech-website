import React from "react";

const Header = () => {
  return (
    <>
      <div className="h-20 flex items-center justify-between mx-8 ">
        <img src="../assets/images/edtech-logo.jpg" className="w-48"></img>
        <div className="flex items-center gap-8 text-[#21405e]">
          <p>Courses</p>
          <p>AboutUs</p>
          <p>ContactUs</p>
          <div className="flex gap-4">
            <button className="h-8 w-20 rounded-xl font-semibold cursor-pointer text-white text-sm bg-[#50c2c3]">
              Login
            </button>
            <button className="h-8 w-20 rounded-xl font-semibold cursor-pointer text-white text-sm bg-[#50c2c3]">
              Sign Up
            </button>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
};

export default Header;