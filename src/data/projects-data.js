import img from "../images/projects/finance-app.webp"
import img2 from "../images/projects/tcbjobs.png"
import img3 from "../images/projects/tcbabout.png"

const projectsData = [
  {
    id: 1,
    date: "Jan 20",
    image: img,
    title: "Digital vehicle service book",
    description:
      "This project is still in progress, however it soon will be avaiable for preview. For now, check out the Github repo for a sneak peek",
    technologies: ["React", "MaterialUI", "HTML", "SCSS"],
    link: "",
    githubLink: "https://github.com/",
  },
  {
    id: 2,
    image: img3,
    title: "TopCashback - About us",
    description:
      "An about us section of the TopCashback website dedicated solely to the ethos of the company and its history. Separated from the overall design/layout of the main site, allowed for extra design freedom.",
    technologies: ["ASP.Net", "HTML", "CSS", "Javascript"],
    link: "http://topcashback.co.uk/about",
  },
  {
    id: 3,
    image: img2,
    title: "TopCashback.jobs careers site",
    description:
      "Wordpress based careers site, solution for recruitment, employment information and company showcase. Plugins adaptation to manage job listings and GDPR regulations.",
    technologies: ["Wordpress", "PHP", "Javascript", "HTML", "CSS"],
    link: "http://topcashback.jobs/",
  },
]

export default projectsData
