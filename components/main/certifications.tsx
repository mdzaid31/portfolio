import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Certifications = () => {
  return (
    <div
      className="flex flex-col items-center justify-center"
      id="certifications"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-2">
        My Certifications
      </h1>
      <div
        className="h-full flex flex-col md:flex-row gap-10 px-10"
        style={{ width: "900px" }}
      >
        <ProjectCard
          src="/sample.png"
          title="Samsung Innovation Campus UAE AI Certification"
          description="AI, Machine Learning, and Deep Learning Course.
          Statistics, Probability, Calculus, Data Analysis,
          Preprocessing and Visualization"
        />
        <ProjectCard
          src="/sample.png"
          title="Shaw Academy - Web development"
          description="Front End Web Development Course
          HTML, CSS, JS
          Made an online grocery webpage concept that lets you
          order and outputs your total price."
        />
      </div>
      <br />
    </div>
  );
};

export default Certifications;
