import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

const pageTransitionsFunction = () => {
  gsap.registerPlugin(ScrollTrigger)
  let tl = gsap.timeline()

  const basicDuration = 2
  const fastDuration = 1
  const easingMode = "Power4.easeOut"

  const cleanUpFunction = className => {
    const items = document.querySelectorAll(className)
    items.forEach(item => (item.style = ""))
  }

  tl.from(".animate", {
    opacity: 0,
    y: "-20px",
    duration: basicDuration,
    stagger: 0.4,
    ease: easingMode,
  })

  tl.from(
    ".fadein",
    {
      opacity: 0,
      duration: basicDuration,
      ease: easingMode,
    },
    "-=2"
  )

  tl.from(
    ".cta-anim",
    {
      opacity: 0,
      scale: 0.5,
      duration: fastDuration,
      ease: easingMode,
    },
    "-=1"
  )

  tl.from(".socials-anim", {
    opacity: 0,
    y: "10px",
    duration: fastDuration,
    ease: easingMode,
  })

  let aboutTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".about-anim",
      start: "center bottom",
      once: true,
    },
  })

  aboutTrigger
    .addLabel("start")
    .from(".about-anim", {
      opacity: 0,
      duration: basicDuration,
      ease: easingMode,
    })
    .from(
      ".about-anim-left",
      {
        opacity: 0,
        x: "-100px",
        ease: easingMode,
        duration: fastDuration,
      },
      "-=2"
    )
    .from(
      ".about-anim-right",
      {
        opacity: 0,
        x: "100px",
        ease: easingMode,
        duration: fastDuration,
      },
      "-=2"
    )

  let st = gsap.timeline({
    scrollTrigger: {
      trigger: ".projects-anim",
      start: "center bottom",
      once: true,
    },
  })

  st.addLabel("start")
    .from(".projects-anim", {
      opacity: 0,
      duration: basicDuration,
      ease: easingMode,
    })
    .from(
      ".card-anim",
      {
        opacity: 0,
        y: "-20px",
        duration: fastDuration,
        ease: easingMode,
        stagger: 0.2,
      },
      "-=2"
    )

  st.eventCallback("onComplete", () => cleanUpFunction(".card-anim"))

  let st2 = gsap.timeline({
    scrollTrigger: {
      trigger: ".snippets-anim",
      start: "center bottom",
      once: true,
    },
  })

  st2
    .addLabel("start")
    .from(".snippets-anim", {
      opacity: 0,
      duration: basicDuration,
      ease: easingMode,
    })
    .from(
      ".snippet-anim",
      {
        opacity: 0,
        y: "-20px",
        duration: fastDuration,
        stagger: 0.2,
        ease: easingMode,
      },
      "-=2"
    )

  st2.eventCallback("onComplete", () => cleanUpFunction(".snippet-anim"))

  let contactTrigger = gsap.timeline({
    scrollTrigger: {
      trigger: ".contact-anim",
      start: "center bottom",
      once: true,
    },
  })

  contactTrigger.addLabel("start").from(".contact-anim", {
    opacity: 0,
    duration: basicDuration,
    ease: easingMode,
  })
}

export default pageTransitionsFunction
