import { Code2, Lightbulb, Rocket, Users } from "lucide-react";

const highlights = [
  {
    icon: Code2,
    title: "Clean Code",
    description:
      "Writing readable, maintainable code with a focus on scalability and best practices.",
  },
  {
    icon: Rocket,
    title: "Performance",
    description:
      "Building fast, responsive applications with efficient frontend and backend logic.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "Working effectively with designers, developers, and stakeholders to ship features.",
  },
  {
    icon: Lightbulb,
    title: "Problem Solving",
    description:
      "Breaking down complex problems and delivering practical, working solutions.",
  },
];

export const About = () => {
  return (
    <section id="about" className="py-32 relative overflow-hidden">
      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left Column */}
          <div className="space-y-8">
            <div className="animate-fade-in">
              <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase">
                About Me
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold leading-tight animate-fade-in animation-delay-100 text-secondary-foreground">
              Turning ideas into
              <span className="font-serif italic font-normal text-white">
                {" "}
                real-world applications.
              </span>
            </h2>

            <div className="space-y-4 text-muted-foreground animate-fade-in animation-delay-200">
              <p>
                I’m <strong>Preeti Sharma</strong>, a full stack developer with a
                strong foundation in the MERN stack. I enjoy building complete
                web applications — from intuitive user interfaces to reliable
                backend systems.
              </p>

              <p>
                My experience includes developing responsive frontends using
                React and Tailwind CSS, designing REST APIs with Node.js and
                Express, and working with databases like MongoDB and PostgreSQL.
                I focus on writing clean code and understanding how systems work
                end to end.
              </p>

              <p>
                I’m constantly learning, improving my skills through hands-on
                projects, and staying up to date with modern web development
                practices to build better, more scalable solutions.
              </p>
            </div>

            <div className="glass rounded-2xl p-6 glow-border animate-fade-in animation-delay-300">
              <p className="text-lg font-medium italic text-foreground">
                "I aim to build reliable, user-focused applications while
                continuously growing as a full stack developer and problem
                solver."
              </p>
            </div>
          </div>

          {/* Right Column - Highlights */}
          <div className="grid sm:grid-cols-2 gap-6">
            {highlights.map((item, idx) => (
              <div
                key={idx}
                className="glass p-6 rounded-2xl animate-fade-in"
                style={{ animationDelay: `${(idx + 1) * 100}ms` }}
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4 hover:bg-primary/20">
                  <item.icon className="w-6 h-6 text-primary" />
                </div>
                <h3 className="text-lg font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
