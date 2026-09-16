import React from "react";
import portfolio from "../../assets/projects/Portfolio.png";
import fanbase from "../../assets/projects/Fanbase.png";
import portfolioV2 from "../../assets/projects/PortfolioV2.png";
import movieWorld from "../../assets/projects/movieWorld.png";

const PROJECTS_DATA = [
  {
    title: "Portfolio V1",
    description:
      "First personal website project developed using HTML and CSS to showcase initial web development skills.",
    image: portfolio,
    tags: ["HTML", "CSS"],
    githubUrl: "https://github.com/nfrx1/Portfolio",
    demoUrl: "https://nfrx1.github.io/Portfolio/",
  },
  {
    title: "FanBase API",
    description:
      "A Python library for the fanbase API that enables you to build automated bots.",
    image: fanbase,
    tags: ["Python"],
    githubUrl: "https://github.com/nfrx1/LearnProject",
    demoUrl: "",
  },
  {
    title: "Portfolio V2",
    description:
      "An enhanced version of my peronsal website, featuring an improved user interface and modern technologies",
    image: portfolioV2,
    tags: ["React", "JavaScript", "TailwindCSS"],
    githubUrl: "",
    demoUrl: "",
  },
  {
    title: "Movie World",
    description: 
      "Browse and discover movies with live data from TMDB — trending, top rated, by genre, with details and recommendations.",
    image: movieWorld,
    tags: ["React", "daisyUi", "motion", "TailwindCSS", "JavaScript"],
    githubUrl: "https://github.com/nfrx1/Movie-World",
    demoUrl: ""
  }
];

const Projects = () => {
  return (
    <section className="pt-24 md:pt-32 min-h-screen px-4 pb-16 max-w-6xl mx-auto space-y-12">
      <div className="text-center space-y-3">
        <h2 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          Featured Projects
        </h2>
        <p className="text-base md:text-lg opacity-70 max-w-xl mx-auto">
          A collection of web applications and tools I've built.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
        {PROJECTS_DATA.map((project, index) => (
          <div
            key={index}
            className="card bg-base-100 shadow-xl border border-base-300 hover:shadow-2xl hover:-translate-y-1 transition-all duration-300 w-full max-w-md overflow-hidden flex flex-col justify-between"
          >
            <figure className="relative h-48 w-full overflow-hidden bg-base-200">
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover object-top hover:scale-105 transition-transform duration-500"
              />
            </figure>

            <div className="card-body p-6 flex-1 flex flex-col justify-between">
              <div className="space-y-3">
                <h3 className="card-title text-xl md:text-2xl font-bold">
                  {project.title}
                </h3>
                <p className="text-sm md:text-base opacity-80 leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-2 pt-2">
                  {project.tags.map((tag, i) => (
                    <span
                      key={i}
                      className="badge badge-outline badge-primary text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              <div className="card-actions justify-end gap-3 mt-6 pt-4 border-t border-base-200">
                {project.demoUrl && (
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-outline btn-secondary"
                  >
                    Live Demo
                  </a>
                )}
                {project.githubUrl && (
                  <a
                    href={project.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-sm btn-primary"
                  >
                    Show Code
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
