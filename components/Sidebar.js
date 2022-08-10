import Link from "next/link";
import Navbar from "./Navbar";

export default function Sidebar() {
  return (
    <div className="lg:flex-auto lg:w-60 lg:bg-black  lg:block hidden">
      <Link href={"/"}>
        <button className="text-5xl font-black text-white lg:p-9">Suhas</button>
      </Link>

      <Navbar />
    </div>
  );
}
