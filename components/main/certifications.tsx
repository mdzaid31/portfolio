import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="certifications"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2">
        My Certifications
      </h1>
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/2.jpg"
          title="Persona Adaptive AI Chat Application"
          description="Developed an innovative AI chatbot web application.
          Users can create personas and chat with them.
          Users can upload data files that the chatbot can use as
          a custom knowledge base.
          Flask (Python) for backend.
          OpenAI API as LLM.
          HTML jinja templates with Tailwindcss for frontend"
        />
        <ProjectCard
          src="/1.jpg"
          title="EduTrack Attendance Management System"
          description="Developed an attendance management system web
          application
          Stack Used: HTML CSS JS, PHP, MySQL"
        />
        <ProjectCard
          src="/CardImage.png"
          title="MyChatfolio"
          description="Portfolio Web application with personalised intelligent chatbot."
        />
      </div>
      <br />
    </div>
  );
};

export default Projects;
