import React from "react";
import Switcher from "./Switcher";

function Header() {
  return (
    <header className="bg-purple-500 text-white font-bold text-3xl dark:bg-slate-800">
      <div className="container flex justify-between p-5 mx-auto items-center uppercase">
        <h1>Image Gallery by Pixabay</h1>
        <Switcher />
      </div>
    </header>
  );
}

export default Header;
