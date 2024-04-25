"use client";
import React from "react";
import { motion } from "framer-motion";
import {
  slideInFromLeft,
  slideInFromRight,
  slideInFromTop,
} from "@/utils/motion";
import { SparklesIcon } from "@heroicons/react/24/solid";
import Image from "next/image";

const HeroContent = () => {
  // Function to handle downloading the CV
  const handleDownloadCV = () => {
    // Specify the path to your CV
    const cvPath = "/cv.pdf";
    // Open the CV in a new tab/window
    window.open(cvPath, "_blank");
  };

  return (
    <motion.div
      initial="hidden"
      animate="visible"
      className="flex flex-row items-center justify-center px-20 mt-40 w-full z-[20]"
    >
      <div className="h-full w-full flex flex-col gap-5 justify-center m-auto text-start">
        <motion.div
          variants={slideInFromTop}
          className="Welcome-box py-[8px] px-[7px] border border-[#7042f88b] opacity-[0.9]"
        >
          <SparklesIcon className="text-[#b49bff] mr-[10px] h-5 w-5" />
          <h1 className="Welcome-text text-[13px]">
            Fullstack Developer Portfolio
          </h1>
        </motion.div>

        <motion.div
          variants={slideInFromLeft(0.5)}
          className="flex flex-col gap-6 mt-6 text-6xl font-bold text-white max-w-[600px] w-auto h-auto"
        >
          <span>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
              {" "}
              Hamdan Mohammad{" "}
            </span>
          </span>
        </motion.div>

        <motion.p
          variants={slideInFromLeft(0.8)}
          className="text-lg text-gray-400 my-5 max-w-[600px]"
        >
          Dedicated and skilled Bachelor of Engineering graduate with a focus on
          Software Engineering. Proficient in Python development and AI, with
          experience in creating innovative solutions such as virtual real
          estate chatbots and automatic mailing scripts. Strong understanding of
          Full Stack Web Development, AI, and Machine Learning concepts.
          Effective communicator and team player.
        </motion.p>
        <motion.a
          variants={slideInFromLeft(1)}
          className="py-2 button-primary text-center text-white cursor-pointer rounded-lg max-w-[200px]"
          title="Click this to download my resume"
          onClick={handleDownloadCV} // Add onClick event handler
        >
          My Resume!
        </motion.a>
        <br />
        <br />
        <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Work Experience
        </h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              April 2023 - Present
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Viewit - Internship
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              *Developed a virtual real estate agent chatbot using Large
              Language Models (LLM).
              <br />
              *Innovated with unique features like feedback and conversability.
              <br />
              *Learnt app deployment and hosting with Streamlit Cloud.
              <br />
              *Developed APIs with Flask and FastAPI.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              May 2022 - December 2022
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Ioncure Pvt. Ltd - Internship
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              *Developed automatic mailing script for mail campaigns with
              Python.
              <br />
              *Web Scraping and Data Entry with Python & Excel.
              <br />
              *Research & Development.
              <br />
              *Managed my team & learnt leadership skills.
            </p>
          </li>
        </ol>
        <br />

        <h1 className="text-[30px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500">
          Education
        </h1>
        <ol className="relative border-s border-gray-200 dark:border-gray-700">
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2021 - 2024
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              Bachelor of Engineering (B.E), Software Engineering
            </h3>
            <p className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">
              Univertisty of Bolton, Rak.
            </p>
          </li>
          <li className="mb-10 ms-4">
            <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
            <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
              2019 - 2021
            </time>
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white">
              High School Diploma
            </h3>
            <p className="text-base font-normal text-gray-500 dark:text-gray-400">
              Mount Litera Zee School, Jamshedpur
            </p>
          </li>
        </ol>
      </div>
      <motion.div
        variants={slideInFromRight(0.8)}
        className="w-full h-full flex justify-center items-center"
        style={{ marginTop: "-600px" }}
      >
        <Image
          src="/mainIconsdark.svg"
          alt="work icons"
          height={650}
          width={650}
        />
      </motion.div>
    </motion.div>
  );
};

export default HeroContent;
