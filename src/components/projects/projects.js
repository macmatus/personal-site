import React from "react"
import projectsData from "../../data/projects-data"
import * as projectStyles from "./projects.module.scss"
import Heading from "../layout/Heading"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const Projects = () => {
  return (
    <div className="projects-anim">
      <Heading title="Recent projects" link="/" name="projects" />
      <section className={`${projectStyles.projects}`}>
        {projectsData.map(project => {
          return (
            <div className={`${projectStyles.card} card-anim`} key={project.id}>
              <img src={project.image} alt={project.title} />
              <div className={projectStyles.cardContent}>
                <header>
                  <h3>{project.title}</h3>
                  {project.githubLink ? (
                    <a href="#/">
                      <FaGithub />
                    </a>
                  ) : null}
                  {project.link ? (
                    <a href="#/">
                      <FaExternalLinkAlt />
                    </a>
                  ) : null}
                </header>
                <p>{project.description}</p>
                <footer>
                  <div className={projectStyles.technologies}>
                    {project.technologies.map((technology, index) => (
                      <span key={index}>{technology}</span>
                    ))}
                  </div>
                </footer>
              </div>
            </div>
          )
        })}
      </section>
    </div>
  )
}

export default Projects
