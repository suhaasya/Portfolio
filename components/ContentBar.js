import React, { useEffect, useState } from "react";
import { MdOutlineMenu } from "react-icons/md";
import { ImCross } from "react-icons/im";
import Navbar from "./Navbar";
import useWindowSize from "../hooks/useWindowSize";

export default function ContentBar({ child }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const size = useWindowSize();

  useEffect(() => {
    if (size.width >= 976) {
      setMenuOpen(false);
    }
  }, [size]);

  function openMenu() {
    setMenuOpen((prev) => !prev);
  }
  return (
    <div className="flex-auto w-10/12  bg-bgblack p-10 leading-10">
      <div className="flex justify-end mb-16 mt-4">
        {/* <!-- Hamburger Icon --> */}
        <button
          id="menu-btn"
          className={
            menuOpen
              ? "open block hamburger lg:hidden focus:outline-none"
              : "block hamburger lg:hidden focus:outline-none"
          }
          onClick={openMenu}
        >
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>
      {menuOpen ? <Navbar /> : child}
    </div>
  );
}
