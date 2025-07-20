import ChatPage from "@/components/ChatPage";
import Sidebar from "@/components/Sidebar";
import FacebookIcon from "@/components/ui/FacebookIcon";
import GithubIcon from "@/components/ui/GithubIcon";
import InstagramIcon from "@/components/ui/InstagramIcon";
import LinkedInIcon from "@/components/ui/LinkedInIcon";
import React from "react";

const page = () => {
  return (
    <div className="flex">
      <Sidebar />

      {/* Main Chat Section */}
      <div className="w-full">
        <ChatPage />
      </div>
    </div>
  );
};

export default page;
