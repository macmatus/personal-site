import React from "react"
import Heading from "../layout/Heading"
import { FaSquare } from "react-icons/fa"
import img from "../../images/about-bike.jpg"

import * as aboutStyles from "./about.module.scss"

const About = () => {
  const skills = [
    "HTML",
    "CSS / SASS",
    "JavaScript",
    "React",
    "Gatsby",
    "GSAP",
    "Graphql",
    "Wordpress",
  ]

  const hobbies = ["Food", "Hiking", "Video games", "Motorbikes"]

  return (
    <section className={`${aboutStyles.container} about-anim`}>
      <Heading title="About me" name="about" />
      <div className={`${aboutStyles.content}`}>
        <div className="about-anim-left">
          <p>
            Hello! My name is Mac, and I have always been passionate about web
            design and development. My journey started when I was only 12 years
            old, and used to design avatars and create forums. Fast forward to
            today, I enjoy everything web development. I am currently employed
            by TopCashback as a UI/UX Developer.
          </p>
          <p>Some of the key technologies I have been using recently: </p>
          <div className={aboutStyles.skills}>
            {skills.map((skill, index) => {
              return (
                <div key={index} className={aboutStyles.skill}>
                  <FaSquare />
                  <p>{skill}</p>
                </div>
              )
            })}
          </div>
          <p>Some of my hobbies include:</p>
          <div className={aboutStyles.hobbies}>
            {hobbies.map((hobby, index) => {
              return (
                <div key={index} className={aboutStyles.hobby}>
                  <FaSquare />
                  <p>{hobby}</p>
                </div>
              )
            })}
          </div>
        </div>
        <div className={`${aboutStyles.image} about-anim-right`}>
          <img src={img} alt="Me on my Yamaha MT-09" />
        </div>
      </div>
    </section>
  )
}

export default About
