import Link from "next/link";
import Form from "../components/Form";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Layout>
        <h2 className="text-4xl sm:text-6xl font-bold leading-tight md:text-8xl text-white">
          Hi, <br /> I{"'"}m Suhas, <br /> Web Developer
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
