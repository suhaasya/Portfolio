import Layout from "../components/Layout";

export default function about() {
  return (
    <>
      <Layout>
        <h2 className="text-4xl font-bold mb-8 text-white">
          Hello, My name is Suhas Khobragade
        </h2>
        <p className=" text-white">
          i am front-end Developer located in{" "}
          <span className="india-text">India</span>.
          <br />
          Well-organised Person, Problem solver. Fan of Movies and TV series.
          <br />
          Interested in the Frontend spectrum and working on ambitious projects
          with positive people.
        </p>
      </Layout>
    </>
  );
}
