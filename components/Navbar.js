import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="px-10">
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
    </nav>
  );
}
