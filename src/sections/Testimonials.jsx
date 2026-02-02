import { ChevronLeft, ChevronRight, Award } from "lucide-react";
import { useState } from "react";

const certificates = [
  {
    title: "Best Intern of the Month",
    issuer: "GAO Tek Inc.",
    year: "Oct 2025",
    description:
      "Recognized for outstanding performance, teamwork, and contributions during the internship period.",
    image: "/certificates/cert1.png",
  },
  {
    title: "Best Squad Leader of the Month",
    issuer: "GAO Tek Inc.",
    year: "Dec 2025",
    description:
      "Awarded for leadership, consistency, and significant contributions to the Web Content Uploading Squad.",
    image: "/certificates/cert2.png",
  },
  {
  title: "Full Stack Web Developer Internship (MERN)",
  issuer: "GLOBAL NEXT CONSULTING INDIA PRIVATE LIMITED",
  year: "Jul – Aug 2025",
  description:
    "Completed a remote internship as a Full Stack Web Developer working with the MERN stack. Built and maintained responsive web applications, developed REST APIs, assisted with backend database operations, and contributed to code reviews, bug fixes, and feature enhancements in a collaborative environment.",
  image: "/certificates/cert6.png",
},
{
  title: "Web Content & Web Development Internship",
  issuer: "GAO Tek Inc.",
  year: "Oct 2025 – Mar 2026",
  description:
    "Completed a 6-month remote internship at GAO Tek Inc., contributing to web content management and frontend development tasks. Worked on uploading and organizing product pages, improving website structure, collaborating with cross-functional teams, and maintaining accuracy and consistency across live production pages. Recognized for performance and leadership during the internship.",
  image: "/certificates/cert7.png",
},
  
  {
    title: "Web Development Fundamentals",
    issuer: "IBM",
    year: "Nov 2025",
    description:
      "Comprehensive training covering frontend and backend web development fundamentals with hands-on practice.",
    image: "/certificates/cert4.png",
  },

  {
    title: "Virtual Java Full Stack Internship",
    issuer: "EduSkills Foundation (AICTE)",
    year: "Jul 2025",
    description:
      "Completed a virtual internship covering Java, Spring Boot, HTML, CSS, JavaScript, and full-stack development.",
    image: "/certificates/cert5.png",
  },
  {
    title: "Government Certificate – Web Designer",
    issuer: "Maharashtra Business Training Board (MBTB)",
    year: "May 2025",
    description:
      "Government-certified Web Designer examination covering Front-End Development, MERN Stack fundamentals, HTML, CSS, and JavaScript. Achieved an A+ grade with a score of 89/100.",
    image: "/certificates/cert3.png",
  },
  

];

export const Testimonials = () => {
  const [activeIdx, setActiveIdx] = useState(0);

  const next = () => {
    setActiveIdx((prev) => (prev + 1) % certificates.length);
  };

  const previous = () => {
    setActiveIdx(
      (prev) => (prev - 1 + certificates.length) % certificates.length
    );
  };

  return (
    <section id="certificates" className="py-32 relative overflow-hidden">
      <div
        className="absolute top-1/2 left-1/2
       w-[800px] h-[800px] bg-primary/5
        rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"
      />

      <div className="container mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <span className="text-secondary-foreground text-sm font-medium tracking-wider uppercase animate-fade-in">
            Certificates & Achievements
          </span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6 animate-fade-in animation-delay-100 text-secondary-foreground">
            Recognitions that{" "}
            <span className="font-serif italic font-normal text-white">
              validate my journey.
            </span>
          </h2>
        </div>

        {/* Certificate Carousel */}
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="glass p-8 rounded-3xl md:p-12 glow-border animate-fade-in animation-delay-200">
              <div className="absolute -top-4 left-8 w-12 h-12 rounded-full bg-primary flex items-center justify-center">
                <Award className="w-6 h-6 text-primary-foreground" />
              </div>

              <div className="grid md:grid-cols-2 gap-8 items-center pt-4">
                {/* Certificate Image */}
                <img
                  src={certificates[activeIdx].image}
                  alt={certificates[activeIdx].title}
                  className="w-full rounded-xl object-contain bg-surface p-4"
                />

                {/* Certificate Content */}
                <div className="space-y-4">
                  <h3 className="text-2xl font-semibold">
                    {certificates[activeIdx].title}
                  </h3>
                  <p className="text-muted-foreground">
                    {certificates[activeIdx].description}
                  </p>
                  <div className="text-sm text-muted-foreground">
                    <span className="font-medium text-foreground">
                      {certificates[activeIdx].issuer}
                    </span>{" "}
                    • {certificates[activeIdx].year}
                  </div>
                </div>
              </div>
            </div>

            {/* Navigation */}
            <div className="flex items-center justify-center gap-4 mt-8">
              <button
                onClick={previous}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronLeft />
              </button>

              <div className="flex gap-2">
                {certificates.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setActiveIdx(idx)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${idx === activeIdx
                        ? "w-8 bg-primary"
                        : "bg-muted-foreground/30 hover:bg-muted-foreground/50"
                      }`}
                  />
                ))}
              </div>

              <button
                onClick={next}
                className="p-3 rounded-full glass hover:bg-primary/10 hover:text-primary transition-all"
              >
                <ChevronRight />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
