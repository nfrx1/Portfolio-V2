import React from "react"
import personalImage from "../../assets/personal-image.jpg"
import python from "../../assets/skills/Python.png"
import javascript from "../../assets/skills/JavaScript.png"
import express from "../../assets/skills/Express.png"
import mongodb from "../../assets/skills/MongoDB.png"
import mongoose from "../../assets/skills/Mongoose.js.png"
import nodejs from "../../assets/skills/Node.js.png"
import react from "../../assets/skills/React.png"
import redux from "../../assets/skills/Redux.png"
import tailwindcss from "../../assets/skills/TailwindCSS.png"
import Skill from "./Skill"

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
]

const About = () => {
  return (
    <section className="pt-24 md:pt-32 min-h-screen px-4 pb-16 max-w-5xl mx-auto space-y-20">
      <div className="card lg:card-side items-center bg-base-100/80 backdrop-blur-sm shadow-xl border border-base-content/10 p-6 md:p-10 gap-8 lg:gap-12 transition-all duration-300">
        <figure className="shrink-0">
          <img
            src={personalImage}
            alt="Dawood Ali Nouri"
            className="w-44 h-44 md:w-56 md:h-56 rounded-2xl object-cover shadow-lg ring-1 ring-base-content/10"
          />
        </figure>

        <div className="flex flex-col justify-center space-y-4 text-center lg:text-left">
          <div className="space-y-1">
            <h2 className="text-3xl md:text-4xl font-extrabold text-base-content">
              About Me
            </h2>
          </div>

          <p className="text-base md:text-lg leading-relaxed text-base-content/80">
            <span className="font-semibold text-base-content">
              Dawood Ali Nouri
            </span>{" "}
            — Full-Stack Developer & Computer Science Student based in Dhi Qar,
            Iraq. Building scalable, end-to-end web applications with a focus on
            modern frontend and backend architectures.
          </p>

          <p className="text-base md:text-lg leading-relaxed text-base-content/80">
            Passionate about bridging clean, intuitive UI with robust
            server-side engineering. Constantly learning, experimenting with new
            tech, and solving complex problems to deliver high-impact digital
            experiences.
          </p>
        </div>
      </div>
      <div className="space-y-8">
        <div className="text-center">
          <h3 className="text-2xl md:text-3xl font-bold tracking-tight">
            Technical Skills
          </h3>
          <p className="text-sm md:text-base opacity-70 mt-2">
            Technologies and tools I work with
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 justify-items-center items-center gap-4 md:gap-6">
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
  )
}

export default About
