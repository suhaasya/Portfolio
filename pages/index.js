import Link from "next/link";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <h2 className=" text-xl md:font-bold leading-tight md:text-8xl text-white">
          Hi, <br /> I'm Suhas, <br /> Web Developer
        </h2>

        <Link href={"/contact"}>
          <button className="btn btn-outline btn-accent mt-10">
            Contact me!
          </button>
        </Link>
      </Layout>
    </>
  );
}
