import React from "react";

function Head() {
  return (
    <>
      <header className="bg-fuchsia-200 text-white">
        <div className="container mx-auto flex items-center justify-between p-4">
          {/* Logo Section */}
          <div>
            <a href="#">
              <img src="/img/allstag.png" alt="Logo" className="h-12 w-auto" />
            </a>
          </div>
          {/* Navigation */}
          <nav className="flex space-x-6">
            <a href="#">Home</a>
            <a href="#">Collection</a>
            <a href="#">Contact Us</a>
            <a href="#">Track Your Order</a>
            <a href="#">Sales</a>
          </nav>
          {/* Buttons */}
          <div className="flex gap-2">
            <button className="bg-fuchsia-900 px-4 py-2 rounded hover:bg-fuchsia-950 flex items-center">
              <span role="img" aria-label="search">
                🔍
              </span>
              <span className="ml-1">Search</span>
            </button>
            <button className="bg-fuchsia-900 px-4 py-2 rounded hover:bg-fuchsia-950 flex items-center">
              <span role="img" aria-label="login">
                👤
              </span>
              <span className="ml-1">Login</span>
            </button>
            <button className="bg-fuchsia-900 px-4 py-2 rounded hover:bg-fuchsia-950 flex items-center">
              <span role="img" aria-label="cart">
                🛒
              </span>
              <span className="ml-1">Cart</span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
}

export default Head;
