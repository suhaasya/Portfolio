import React from "react";
import Layout from "../components/Layout";
import {
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiGit,
  SiGithub,
  SiLinux,
  SiNextdotjs,
} from "react-icons/si";

export default function skills() {
  return (
    <>
      <Layout>
        <h2 className="text-4xl font-bold text-white">Skills</h2>
        <h4 className="text-2xl mt-8 font-bold text-white">Frontend</h4>
        <div className="flex gap-4 mt-4">
          <SiTailwindcss fontSize={"3rem"} title="Tailwind CSS" />
          <SiJavascript fontSize={"3rem"} title="Javascript" />
          <SiReact fontSize={"3rem"} title="React" />
          <SiNextdotjs fontSize={"3rem"} title="Next.js" />
        </div>
        <h4 className="text-2xl mt-8 font-bold text-white">Tools</h4>
        <div className="flex gap-4 mt-4">
          <SiGit fontSize={"3rem"} title="Git" />
          <SiGithub fontSize={"3rem"} title="Github" />
          <SiLinux fontSize={"3rem"} title="Linux" />
        </div>
      </Layout>
    </>
  );
}
