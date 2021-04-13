import React from "react"
import * as contactStyles from "./contact.module.scss"
import Heading from "../layout/Heading"
import ContactBtn from "./ContactBtn"

const Contact = () => {
  return (
    <section className={`${contactStyles.contact} contact-anim`}>
      <Heading title="Let's collaborate" name="contact" />
      <p className={contactStyles.message}>
        If you would like to collaborate or just looking for a way to reach me,
        click on the button below to send me an email or get in touch with me on
        any of my social medias.
      </p>
      <ContactBtn />
    </section>
  )
}

export default Contact
