import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="lg:flex-auto lg:w-2/12 lg:bg-black  lg:block hidden">
      <Link href={"/"}>
        <button className="text-5xl font-black p-10 text-white">Suhas</button>
      </Link>

      <div className="px-10">
        <ul className="flex flex-col gap-4">
          <li className="hover:text-white">
            <Link href={"/about"}>About</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/skills"}>My Skills</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/portfolio"}>Work</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"/contact"}>Contact</Link>
          </li>
          <li className="hover:text-white">
            <Link href={"https://blog.suhaskhobragade.tech/"}>Blog</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
