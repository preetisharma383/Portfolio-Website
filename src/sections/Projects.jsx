import { ArrowUpRight, Github } from "lucide-react";


const projects = [
  {
    title: "Password Generator",
    description:
      "A sleek password generator built with HTML, CSS, and JavaScript. Allows users to generate strong passwords with customizable options, real-time strength indicator, and one-click copy to clipboard.",
    image: "/projects/project1.png",
    tags: ["HTML", "CSS", "JavaScript", "DOM"],
    link: "https://lnkd.in/emtvmC4p",
    github: "https://lnkd.in/ei7t2PTG",
  },
  {
    title: "SpendWise – Expense Tracker",
    description:
      "A responsive expense tracker that lets users add, manage, and track income and expenses. Uses LocalStorage for data persistence and strengthens core JavaScript logic without frameworks.",
    image: "/projects/project2.png",
    tags: ["HTML", "CSS", "JavaScript", "LocalStorage"],
    link: "https://lnkd.in/eiS7cD3J",
    github: "https://lnkd.in/eifPydup",
  },
  {
    title: "WebStudio – In-Browser Code Editor",
    description:
      "A zero-setup, offline-capable HTML/CSS/JS playground. Supports real-time preview, save/load via JSON, and keyboard shortcuts for an efficient learning experience.",
    image: "/projects/project3.png",
    tags: ["HTML", "CSS", "JavaScript"],
    link: "https://lnkd.in/e9y52UPD",
    github: "https://lnkd.in/eghvxWKd",
  },
  {
    title: "B2B Corporate Website (GAOTeK Inc)",
    description:
      "Worked on a live production-level B2B website during my internship at GAO Tech Inc. Focused on responsive design, lead capture forms, and SEO optimization.",
    image: "/projects/project4.png",
    tags: ["WordPress", "Elementor", "SEO", "Responsive Design"],
    link: "https://lnkd.in/eUCgYAte",
    github: "#",
  },
  {
    title: "Figma to Website Clone",
    description:
      "Converted a detailed Figma design into a pixel-perfect, responsive website using HTML, CSS, and JavaScript. Focused on layout accuracy and smooth interactions.",
    image: "/projects/project5.png",
    tags: ["HTML", "CSS", "JavaScript", "Figma"],
    link: "https://lnkd.in/ehfBdqbN",
    github: "https://lnkd.in/egaw8-H6",
  },
  {
    title: "Figma Starter Website Clone",
    description:
      "Replicated a Figma starter website with pixel-perfect accuracy, responsive layout, and clean UI. Hosted on Netlify for fast access.",
    image: "/projects/project6.png",
    tags: ["HTML", "CSS", "JavaScript", "Netlify"],
    link: "https://lnkd.in/ewkCZKCR",
    github: "https://lnkd.in/e7dzNhxA",
  },
  // {
  //   title: "BrainDrop – MERN Notes App",
  //   description:
  //     "A full-stack note-taking application built with the MERN stack. Includes authentication, rate limiting, confirmation modals, toast notifications, and a clean responsive UI.",
  //   image: "/projects/braindrop.png",
  //   tags: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
  //   link: "https://lnkd.in/eFJQ7fQc",
  //   github: "https://lnkd.in/eQxDu7MT",
  // },
  // {
  //   title: "MERN Product Store App",
  //   description:
  //     "A full-stack product management app allowing users to add, update, and delete products. Includes light/dark mode, image handling, and REST API integration.",
  //   image: "/projects/product-store.png",
  //   tags: ["React", "Node.js", "MongoDB", "Chakra UI", "Render"],
  //   link: "https://lnkd.in/eiD7UbgX",
  //   github: "https://lnkd.in/eTi23SXV",
  // },
  {
  title: "FlickFinder – Movie Guide App",
  description:
    "A responsive movie discovery app that allows users to search movies in real time and view IMDb ratings, posters, plots, and genres. Includes dark mode support and a clean, mobile-first UI powered by the OMDb API.",
  image: "/projects/project7.png",
  tags: ["HTML", "CSS", "JavaScript", "OMDb API"],
  link: "https://lnkd.in/ecAzj5Sz",
  github: "https://lnkd.in/eSxp8wFf",
}
];

export const Projects = () => {
  return (
    <section id="projects" className="py-32 relative overflow-hidden">
      {/* Bg glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 w-64 h-64 bg-highlight/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mx-auto max-w-3xl mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Featured Work
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Projects that
            <span className="font-serif italic font-normal text-white">
              {" "}
              showcase my skills.
            </span>
          </h2>
          <p className="text-muted-foreground animate-fade-in animation-delay-200">
            A collection of frontend and full-stack projects built through
            hands-on learning, internships, and real-world problem solving.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, idx) => (
            <div
              key={idx}
              className="group glass rounded-2xl overflow-hidden animate-fade-in"
              style={{ animationDelay: `${(idx + 1) * 100}ms` }}
            >
              {/* Image */}
              <div className="relative overflow-hidden aspect-video">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-card via-card/50 to-transparent opacity-60" />
                <div className="absolute inset-0 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href={project.link}
                    target="_blank"
                    className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                  >
                    <ArrowUpRight className="w-5 h-5" />
                  </a>
                  {project.github !== "#" && (
                    <a
                      href={project.github}
                      target="_blank"
                      className="p-3 rounded-full glass hover:bg-primary hover:text-primary-foreground transition-all"
                    >
                      <Github className="w-5 h-5" />
                    </a>
                  )}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 space-y-4">
                <h3 className="text-xl font-semibold group-hover:text-primary transition-colors">
                  {project.title}
                </h3>
                <p className="text-muted-foreground text-sm">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map((tag, tagIdx) => (
                    <span
                      key={tagIdx}
                      className="px-4 py-1.5 rounded-full bg-surface text-xs font-medium border border-border/50 text-muted-foreground hover:border-primary/50 hover:text-primary transition-all duration-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        
      </div>
    </section>
  );
};
