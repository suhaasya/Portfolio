import React from "react";
import Layout from "../components/Layout";
import { SiTwitter, SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";
import Link from "next/link";
import Form from "../components/Form";

export default function contact() {
  return (
    <Layout>
      <Form />
      <div className="flex gap-4 mt-4">
        <Link href={"https://twitter.com/suhaasya"}>
          <a>
            <SiTwitter fontSize={"3rem"} title="Twitter" />
          </a>
        </Link>
        <Link href={"https://github.com/suhaasya"}>
          <a>
            <SiGithub fontSize={"3rem"} title="Github" />
          </a>
        </Link>
        <Link href={"https://www.linkedin.com/in/khobragadesuhas/"}>
          <a>
            <SiLinkedin fontSize={"3rem"} title="Linkedin" />
          </a>
        </Link>
        <Link href={"mailto:suhaskhobragade41@gmail.com"}>
          <a>
            <SiMaildotru fontSize={"3rem"} title="Email" />
          </a>
        </Link>
      </div>
    </Layout>
  );
}
