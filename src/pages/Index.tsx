import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ThemeToggle } from "@/components/ThemeToggle";

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
    { name: "JavaScript", level: 95 },
    { name: "React.js", level: 95 },
    { name: "TypeScript", level: 90 },
    { name: "Redux", level: 90 },
    { name: "HTML/CSS", level: 90 },
    { name: "Next.js", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Testing (Jest/RTL)", level: 85 },
  ];

  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "Jellyfish.com",
      period: "Feb 2022 - Present",
      description: "Working on flagship products using React, Redux, and TypeScript. Implementing complex features, optimizing performance, and mentoring junior developers.",
    },
    {
      title: "Software Engineer",
      company: "Talentica Software",
      period: "Aug 2020 - Jan 2022",
      description: "Led front-end development for multiple client projects. Developed reusable components and implemented responsive designs using React and modern web technologies.",
    },
    {
      title: "Software Engineer",
      company: "Knoldus Software LLP",
      period: "July 2018 - Aug 2020",
      description: "Developed and maintained web applications using React, Redux, and Node.js. Collaborated with cross-functional teams to deliver high-quality solutions.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="fixed top-4 right-4 z-50">
        <ThemeToggle />
      </div>
      
      <motion.header 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="h-screen flex flex-col items-center justify-center px-4 text-center"
      >
        <Badge className="mb-4">Open to Opportunities</Badge>
        <h1 className="text-4xl md:text-6xl font-bold mb-6">Harendra Singh</h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-4">
          Senior Software Engineer at Jellyfish.com
        </p>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl">
          I specialize in building exceptional web applications with React, TypeScript, and modern web technologies. With 5+ years of experience, I focus on creating efficient, scalable, and user-friendly solutions.
        </p>
        <div className="flex gap-4">
          <Button variant="outline" size="icon" asChild>
            <a href="https://github.com/harendra21" target="_blank" rel="noopener noreferrer">
              <Github className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="https://linkedin.com/in/harendra-singh1995" target="_blank" rel="noopener noreferrer">
              <Linkedin className="h-5 w-5" />
            </a>
          </Button>
          <Button variant="outline" size="icon" asChild>
            <a href="mailto:harendrasingh2821@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce h-6 w-6 text-muted-foreground" />
      </motion.header>

      <main className="container max-w-4xl mx-auto px-4 py-16">
        <section className="section-fade mb-20">
          <h2 className="text-3xl font-bold mb-8">About Me</h2>
          <div className="glass-card p-6 rounded-lg">
            <p className="text-lg leading-relaxed">
              I am a passionate Software Engineer with over 5 years of experience in web development. 
              Currently working at Jellyfish.com, I specialize in building scalable web applications 
              using React, TypeScript, and modern frontend technologies. I have a strong focus on 
              code quality, performance optimization, and creating exceptional user experiences.
            </p>
          </div>
        </section>

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
              Feel free to reach out if you'd like to discuss potential collaborations 
              or just want to connect!
            </p>
            <Button asChild>
              <a href="mailto:harendrasingh2821@gmail.com">
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
