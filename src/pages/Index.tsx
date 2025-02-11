
import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const Index = () => {
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    observerRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
        }
      });
    });

    document.querySelectorAll(".section-fade").forEach((element) => {
      observerRef.current?.observe(element);
    });

    return () => observerRef.current?.disconnect();
  }, []);

  const skills = [
    { name: "React.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "CSS/SCSS", level: 90 },
    { name: "Testing (Jest/RTL)", level: 85 },
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Current Company",
      period: "2021 - Present",
      description: "Leading frontend development initiatives and mentoring junior developers.",
    },
    {
      title: "Frontend Developer",
      company: "Previous Company",
      period: "2018 - 2021",
      description: "Developed responsive web applications using React and TypeScript.",
    },
    {
      title: "Junior Developer",
      company: "First Company",
      period: "2016 - 2018",
      description: "Started career with HTML, CSS, and JavaScript development.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <Badge className="mb-4">Available for Opportunities</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Harendra Singh</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Senior Frontend Developer with 5+ years of experience
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/harendra-singh1995" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:your.email@example.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce h-6 w-6 text-muted-foreground" />
      </motion.header>

      <main className="container max-w-4xl mx-auto px-4 py-16">
        <section className="section-fade mb-20">
          <h2 className="text-3xl font-bold mb-8">Experience</h2>
          <div className="relative pl-8">
            <div className="timeline-line" />
            {experiences.map((exp, index) => (
              <div key={index} className="mb-8 relative">
                <div className="timeline-dot" />
                <div className="glass-card p-6 rounded-lg ml-4">
                  <h3 className="text-xl font-semibold">{exp.title}</h3>
                  <p className="text-muted-foreground mb-2">{exp.company} • {exp.period}</p>
                  <p className="text-sm">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-fade mb-20">
          <h2 className="text-3xl font-bold mb-8">Skills</h2>
          <div className="grid gap-6">
            {skills.map((skill, index) => (
              <div key={index}>
                <div className="flex justify-between mb-2">
                  <span className="font-medium">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="skill-bar">
                  <div 
                    className="skill-progress"
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-fade">
          <h2 className="text-3xl font-bold mb-8">Get in Touch</h2>
          <div className="glass-card p-8 rounded-lg text-center">
            <p className="text-lg mb-6">
              I'm always interested in hearing about new projects and opportunities.
            </p>
            <Button asChild>
              <a href="mailto:your.email@example.com">
                Send me an email
              </a>
            </Button>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Index;
