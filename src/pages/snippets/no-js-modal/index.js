import React from "react"
import BackButton from "../../../components/header/BackButton"

import * as styles from "./nojsmodal.module.scss"

const ScrollableNavigation = () => {
  return (
    <section className={styles.noJsModal}>
      <BackButton link="/#snippets" />
      <div className={styles.wrapper}>
        <a href="#demo-modal">Open Modal</a>
      </div>

      <div id="demo-modal" className={styles.modal}>
        <div className={styles.modalContent}>
          <h1>HTML/CSS Only Modal</h1>
          <h2>
            This modal uses the :target pseudoclass to trigger the visibility
            and opacity properties.
          </h2>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum quam
            ipsam repellat iste explicabo rem reprehenderit. Quos numquam aut
            sequi ab qui quae ad, hic aperiam, beatae incidunt mollitia
            veritatis!
          </p>
          <a href="#" className={styles.modalClose}>
            close
          </a>
        </div>
      </div>
    </section>
  )
}

export default ScrollableNavigation
