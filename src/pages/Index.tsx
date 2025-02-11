
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
      company: "KreditBee",
      period: "Jan 2023 - Present",
      description: [
        "Led performance optimization reducing main chunk size by 33kb and improving loading time",
        "Developed 130+ reusable UI components, reducing development time by 40% across platforms",
        "Implemented Storybook for visual and interaction testing",
        "Designed custom screens reducing codebase from 20K to 4K lines of code"
      ]
    },
    {
      title: "Software Developer - 2",
      company: "Nouveau Labs",
      period: "Nov 2021 - Jan 2023",
      description: [
        "Built React-Redux dashboards using Micro Frontend technique",
        "Developed Cyber Security dashboards with Angular 11 and RxJs",
        "Implemented AWS services including Amplify, Cognito, and Firebase Cloud Messaging",
        "Managed CI/CD deployments using Terraform/Yaml, AWS S3, CloudFront, and Route 53"
      ]
    },
    {
      title: "Software Developer - 2",
      company: "Kantar",
      period: "Sep 2020 - Nov 2021",
      description: [
        "Created interactive dashboards using Angular, JavaScript, Lodash, and jQuery",
        "Developed cross-platform applications with multiple views and data filters",
        "Implemented 20+ charts using HighCharts library",
        "Built user management system with activity tracking and export capabilities"
      ]
    },
    {
      title: "Software Developer",
      company: "Kantar",
      period: "Jun 2019 - Aug 2020",
      description: [
        "Built dashboards using ADO.NET with multiple export formats",
        "Developed security dashboards with Angular 11 and RxJs",
        "Created architectural design for data queries using stored procedures"
      ]
    }
  ];

  const projects = [
    {
      title: "Inventory Management",
      tech: "Angular and SCSS",
      preview: "Preview"
    },
    {
      title: "Image Search",
      tech: "React",
      preview: "Preview"
    },
    {
      title: "Crypto Tracker",
      tech: "Angular and Webhooks",
      preview: "Preview"
    },
    {
      title: "AWS Cognito",
      tech: "React",
      preview: "Preview"
    }
  ];

  const technicalStrengths = {
    "Programming Languages": ["JavaScript", "React", "Angular"],
    "Libraries": ["Tanstack(React-Query)", "Storybook", "HighChart", "GraphQL", "MUI"],
    "Frameworks": ["React-Redux", "Next.js", "RxJs", "ADO .NET"],
    "Tools": ["Cypress", "Jest", "Webpack", "Amazon Amplify"],
    "Cloud Services": ["AWS S3", "CloudFront", "Firebase", "Route 53", "CI/CD"]
  };

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
        <div className="text-xl md:text-2xl text-muted-foreground mb-4 space-y-2">
          <p>Senior Software Engineer</p>
          <p className="text-base">Bangalore - 560008</p>
          <p className="text-base">pal.harendra95@gmail.com • +91-9790729403</p>
        </div>
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
            <a href="mailto:pal.harendra95@gmail.com">
              <Mail className="h-5 w-5" />
            </a>
          </Button>
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce h-6 w-6 text-muted-foreground" />
      </motion.header>

      <main className="container max-w-4xl mx-auto px-4 py-16">
        <section className="section-fade mb-20">
          <h2 className="text-3xl font-bold mb-8">Education</h2>
          <div className="glass-card p-6 rounded-lg">
            <h3 className="text-xl font-semibold">VIT Chennai</h3>
            <p className="text-muted-foreground">Bachelor of Technology in Computer Science</p>
            <p className="text-muted-foreground">CGPA: 8.03/10 (2015 – 2019)</p>
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
                  <ul className="list-disc list-inside space-y-2">
                    {exp.description.map((desc, i) => (
                      <li key={i} className="text-sm">{desc}</li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="section-fade mb-20">
          <h2 className="text-3xl font-bold mb-8">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {projects.map((project, index) => (
              <div key={index} className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-2">{project.title}</h3>
                <p className="text-muted-foreground mb-4">{project.tech}</p>
                <Button variant="outline" size="sm">
                  {project.preview}
                </Button>
              </div>
            ))}
          </div>
        </section>

        <section className="section-fade mb-20">
          <h2 className="text-3xl font-bold mb-8">Technical Skills</h2>
          <div className="grid gap-6">
            {Object.entries(technicalStrengths).map(([category, skills]) => (
              <div key={category} className="glass-card p-6 rounded-lg">
                <h3 className="text-lg font-semibold mb-4">{category}</h3>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill, i) => (
                    <Badge key={i} variant="secondary">
                      {skill}
                    </Badge>
                  ))}
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
              Feel free to reach out if you'd like to discuss potential collaborations!
            </p>
            <Button asChild>
              <a href="mailto:pal.harendra95@gmail.com">
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
