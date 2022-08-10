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
    <div className="flex-auto w-10/12  bg-bgblack p-10 leading-10 h-full">
      <div className="text-right lg:mb-16">
        <button className="lg:hidden" onClick={openMenu}>
          {menuOpen ? (
            <ImCross size={"3.5rem"} />
          ) : (
            <MdOutlineMenu size={"3.5rem"} />
          )}
        </button>
      </div>
      {menuOpen ? <Navbar /> : child}
    </div>
  );
}
