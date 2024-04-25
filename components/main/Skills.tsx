import { Backend_skill, Full_stack, Skill_data } from "@/constants";
import React from "react";
import SkillDataProvider from "../sub/SkillDataProvider";
import SkillText from "../sub/SkillText";

const Skills = () => {
  return (
    <section
      id="skills"
      className="flex flex-col items-center justify-center gap-3 h-full relative overflow-hidden pb-80"
      style={{ transform: "scale(0.9" }}
    >
      <SkillText />

      <div>
        <div className="grid grid-rows-3 p-2">
          <div className="grid grid-cols-2 p-2 gap-10 items-center">
            <div className="text-[30px] font-bold ml-[10px] hidden md:block text-gray-300">
              <center>
                <h1>Front-End</h1>
                <br />
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                  {Skill_data.map((image, index) => (
                    <SkillDataProvider
                      key={index}
                      src={image.Image}
                      width={image.width}
                      height={image.height}
                      index={index}
                    />
                  ))}
                </div>
              </center>
            </div>
            <div className="text-[30px] font-bold ml-[10px] hidden md:block text-gray-300">
              <center>
                <h1>Back-End</h1>
                <br />
                <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
                        {Backend_skill.map((image, index) => (
                          <SkillDataProvider
                            key={index}
                            src={image.Image}
                            width={image.width}
                            height={image.height}
                            index={index}
                          />
                        ))}
                      </div>
              </center>
            </div>
          </div>
          <div className="grid grid-cols-2 p-2 gap-10 items-center">
            <div className="text-[30px] font-bold ml-[10px] hidden md:block text-gray-300">
              <h1>UI/UX Design</h1>
              <br />
            </div>
            <div className="text-[30px] font-bold ml-[10px] hidden md:block text-gray-300">
              <h1>Full Stack</h1>
              <br />
            </div>
          </div>
          <div className="p-2 items-center text-[30px] font-bold ml-[10px] hidden md:block text-gray-300">
            <h1>Source Control</h1>
            <br />
          </div>
        </div>
      </div>


      <div className="flex flex-row justify-around flex-wrap mt-4 gap-5 items-center">
        {Full_stack.map((image, index) => (
          <SkillDataProvider
            key={index}
            src={image.Image}
            width={image.width}
            height={image.height}
            index={index}
          />
        ))}
      </div>

      <div className="w-full h-full absolute">
        <div className="w-full h-full z-[-10] opacity-30 absolute flex items-center justify-center bg-cover">
          <video
            className="w-full h-auto"
            preload="false"
            playsInline
            loop
            muted
            autoPlay
            src="/cards-video.webm"
          />
        </div>
      </div>
    </section>
  );
};

export default Skills;
