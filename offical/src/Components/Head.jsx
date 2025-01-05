import React from "react";

function Head() {
  return (
    <>
      <header className="bg-fuchsia-200 text-white">
        <div className=" container mx-auto flex items-center justify-between p-4">
          <div className=" ">
            <a href="#">
              {" "}
              <img src="\img\allstag.png " href="" className=" h-12  w-auto" />
            </a>
          </div>
          {/* navigation  */}
          <div className=" font">
            <nav className=" space-x-6">
              <a href=" #"> Home</a>
              <a href="#"> About</a>
              <a href="#"> Track Your Order</a>
              <a href="#"> Services</a>
              <a href=" #"> Contact</a>
            </nav>
          </div>
          {/* button  */}
          <button className="bg-fuchsia-900 px-4 py-2 rounded hover:bg-fuchsia-950">
            Login
          </button>
          <button className="bg-fuchsia-900 px-6 py-3 rounded hover:bg-fuchsia-950">
            SignUp
          </button>
        </div>
      </header>
    </>
  );
}

export default Head;
