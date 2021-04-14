import React from "react"
import projectsData from "../../data/projects-data"
import * as projectStyles from "./projects.module.scss"
import Heading from "../layout/Heading"
import { FaExternalLinkAlt, FaGithub } from "react-icons/fa"

const Projects = () => {
  return (
    <div className="projects-anim">
      <Heading title="Recent projects" name="projects" />
      <section className={`${projectStyles.projects}`}>
        {projectsData.map(project => {
          return (
            <div
              href={project.link}
              className={`${projectStyles.card} card-anim`}
              key={project.id}
              rel="noopener noreferrer"
              target="_blank"
            >
              <img src={project.image} alt={project.title} />
              <div className={projectStyles.cardContent}>
                <header>
                  <h3>{project.title}</h3>
                  {project.githubLink ? (
                    <a
                      className={projectStyles.secondaryLink}
                      href={project.githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <FaGithub />
                    </a>
                  ) : null}
                  {project.link ? (
                    <>
                      <a
                        className={projectStyles.secondaryLink}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        <FaExternalLinkAlt />
                      </a>
                      <a
                        className={projectStyles.primaryLink}
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="project link to external site"
                      >
                        project link to external site
                      </a>
                    </>
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
