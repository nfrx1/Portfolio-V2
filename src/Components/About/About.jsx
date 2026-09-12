import React from "react";
import personalImage from "../../assets/personal-image.jpg";
import python from "../../assets/skills/Python.png";
import javascript from "../../assets/skills/JavaScript.png";
import express from "../../assets/skills/Express.png";
import mongodb from "../../assets/skills/MongoDB.png";
import mongoose from "../../assets/skills/Mongoose.js.png";
import nodejs from "../../assets/skills/Node.js.png";
import react from "../../assets/skills/React.png";
import redux from "../../assets/skills/Redux.png";
import tailwindcss from "../../assets/skills/TailwindCSS.png";
import Skill from "./Skill";

const SKILLS_DATA = [
  { name: "Python", level: "Advanced", icon: python },
  { name: "JavaScript", level: "Advanced", icon: javascript },
  { name: "Node.js", level: "Advanced", icon: nodejs },
  { name: "Express", level: "Intermediate", icon: express },
  { name: "React", level: "Advanced", icon: react },
  { name: "Redux", level: "Advanced", icon: redux },
  { name: "Tailwind CSS", level: "Advanced", icon: tailwindcss },
  { name: "MongoDB", level: "Intermediate", icon: mongodb },
  { name: "Mongoose", level: "Intermediate", icon: mongoose },
];

const About = () => {
  return (
    <section className="pt-24 md:pt-32 min-h-screen px-4 pb-16 max-w-6xl mx-auto space-y-16">
      {/* About Card Section */}
      <div className="flex justify-center items-center">
        <div className="card lg:card-side bg-base-100 shadow-xl border border-base-200 p-4 md:p-8 transition-all duration-300">
          <figure className="w-full lg:w-5/12 flex justify-center">
            <img
              src={personalImage}
              alt="Dawood Ali Nouri"
              className="w-full max-w-xs md:max-w-sm rounded-2xl object-cover shadow-md"
            />
          </figure>
          <div className="card-body px-2 md:px-8 py-4 lg:w-7/12 flex flex-col justify-center">
            <h2 className="card-title text-3xl md:text-4xl font-extrabold mb-4 text-primary">
              About Me
            </h2>
            <p className="text-base md:text-lg leading-relaxed opacity-90">
              Hello! I'm Dawood Ali Nouri, a 19-year-old Full-Stack Developer
              and Computer Science student from Dhi Qar, Iraq. Driven by a deep
              passion for technology and software engineering, I specialize in
              building end-to-end web applications. With a solid year of
              hands-on experience in both frontend and backend development, I
              bridge the gap between intuitive, dynamic user interfaces and
              scalable, robust server-side architecture. I am constantly
              exploring new technologies, refining my coding skills, and
              tackling complex technical challenges to turn ideas into impactful
              digital products.
            </p>
          </div>
        </div>
      </div>

      {/* Skills Section */}
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Technical Skills
          </h3>
          <p className="text-sm md:text-base opacity-70 mt-2">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center gap-4 md:gap-6 max-w-5xl mx-auto">
          {SKILLS_DATA.map((skill) => (
            <Skill
              key={skill.name}
              name={skill.name}
              level={skill.level}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;