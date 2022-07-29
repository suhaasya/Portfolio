import React, { useRef, useState } from "react";
import Layout from "../components/Layout";
import { SiTwitter, SiGithub, SiLinkedin, SiMaildotru } from "react-icons/si";
import Link from "next/link";
import emailjs from "@emailjs/browser";

export default function contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const form = useRef();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }
  function submitForm(e) {
    e.preventDefault();
    console.log(formData);
    emailjs
      .sendForm(
        "service_hoppc83",
        "template_s5oyose",
        e.target,
        "goTCkRBpZgE-_YJWW"
      )
      .then((res) => console.log(res))
      .catch((err) => console.log(err));
    setFormData({ name: "", email: "", subject: "", message: "" });
  }
  return (
    <Layout>
      <form
        ref={form}
        className="grid grid-cols-2 gap-4 md:w-1/2"
        onSubmit={submitForm}
      >
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="input w-full input-accent max-w-xs"
        />
        <input
          type="text"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="input w-full input-accent max-w-xs"
        />
        <input
          type="text"
          name="subject"
          placeholder="Subject"
          value={formData.subject}
          onChange={handleChange}
          className="input w-full input-accent col-span-2"
        />

        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          className="textarea textarea-accent col-span-2"
          placeholder=""
          rows={"4"}
        ></textarea>

        <button className="btn btn-outline btn-accent col-start-2">
          Send Message!
        </button>
      </form>

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
