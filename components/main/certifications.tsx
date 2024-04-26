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
      <div className="h-full w-full flex flex-col md:flex-row gap-10 px-10">
        <ProjectCard
          src="/2.jpg"
          title="Samsung Innovation Campus UAE Artificial
          Intelligence Course"
          description="AI, Machine Learning, and Deep Learning Course.
          Statistics, Probability, Calculus, Data Analysis,
          Preprocessing and Visualization"
        />
        <ProjectCard
          src="/1.jpg"
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
