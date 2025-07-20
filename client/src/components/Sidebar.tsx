import React from "react";
import FacebookIcon from "./ui/FacebookIcon";
import GithubIcon from "./ui/GithubIcon";
import LinkedInIcon from "./ui/LinkedInIcon";
import InstagramIcon from "./ui/InstagramIcon";
import Link from "next/link";

const Sidebar = () => {
  return (
    <aside className="w-[20%] h-[100vh] bg-gray-900 text-white lg:flex flex-col items-center p-6 shadow-md hidden ">
      <span className="flex self-start py-3 items-center ">
        <div className="bg-[url('/aaryan.jpeg')] border-3 border-green-600 h-[60px] w-[60px] rounded-full leading-relaxed bg-center bg-cover"></div>
        <span>
          <h2 className="text-lg font-semibold ml-3">Aaryan</h2>
          <p className="text-sm text-gray-400 ml-3">Hello from the Developer</p>
        </span>
      </span>

      <p className="self-start text-sm text-gray-300 leading-relaxed pt-3">
        Hello, I’m{" "}
        <span className="font-semibold text-white">Aaryan Sharma</span>. This
        platform is built to explore and demonstrate the capabilities of modern
        Large Language Models (LLMs) using LangChain. The project is intended
        strictly for{" "}
        <span className="text-white font-semibold">educational</span> purposes —
        focusing on concept experimentation, prompt engineering, and real-world
        integration scenarios.
        <br />
        <br />
        Please note: I am not the creator of the AI model itself. This
        implementation uses Google’s{" "}
        <span className="font-semibold text-white">Gemini</span> model
        integrated with the LangChain framework to showcase conversational AI
        and natural language workflows.
        <br />
        <br />
        Whether you're a fellow learner or a curious mind, I hope this
        demonstration provides insights into the evolving world of AI-driven
        applications.
      </p>

      <h2 className="py-5 self-start text-white font-bold text-[18px]">
        Connect with me:
      </h2>
      <ul className="self-start flex gap-5">
        <Link href={"https://www.facebook.com/aaryan.sharma.772791"}>
          <FacebookIcon />
        </Link>
        <Link href={"https://github.com/Aaryan10-sudo"}>
          <GithubIcon />
        </Link>
        <Link href={"https://www.linkedin.com/in/aaryan-sharma-6a508a317/"}>
          <LinkedInIcon />
        </Link>
        <Link href={"https://www.instagram.com/aaryansh1011/"}>
          <InstagramIcon />
        </Link>
      </ul>

      <div className="mt-auto text-xs text-gray-500">© 2025 Langchain Demo</div>
    </aside>
  );
};

export default Sidebar;
