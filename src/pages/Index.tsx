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
        "Worked on the performance optimization for the initial load of the application from login to home page. Reduced the 33kb main chunk size. This optimization also led to a notable improvement in overall loading time, providing a smoother and faster user experience for customers accessing the application.",
        "Led the development of 130+ reusable UI components, reducing front-end development time by 40% across Android, iOS, and Web platforms. It brought the uniformity throughout the application on all 3 platforms Android, iOS and Web. Implemented storybook for better visual, Interaction testing and assertions.",
        "Designed reusable custom screens that cut development time by 50%, reducing the codebase from 20K to 4K lines of code, increasing the multiple teams efficiency."
      ]
    },
    {
      title: "Software Developer - 2",
      company: "Nouveau Labs",
      period: "Nov 2021 - Jan 2023",
      description: [
        "Building React-Redux dashboards for cloud communication using Micro Fronted technique.",
        "Developed multiple dashboards for Cyber Security using Angular 11 framework and RxJs library.",
        "Solved multiple bugs in the existing dashboard and added new features.",
        "Created a demo web app using React-Redux in the front-end. Using Amazon-Amplify, Cognito services for credential management and Firebase Cloud messaging service for the incoming call notification.",
        "Deployed the code changes to different environments from Gitlab CI/CD using Terraform/Yaml, AWS S3, CloudFront, Route 53 and pipeline code optimization/fixes.",
        "Converted client Figma designs to dashboards with custom Material design components (Angular/React)."
      ]
    },
    {
      title: "Software Developer - 2",
      company: "Kantar",
      period: "Sep 2020 - Nov 2021",
      description: [
        "Engineering excellence tasks - Created user friendly interactive dashboards for the client using Angular, JavaScript, Lodash, SCSS and jQuery",
        "Worked on a 4-page application which contains 10+ views. Able to view/navigate sub modules in a single dashboard. Enable dashboard for the cross-platform Chrome, Edge and IE",
        "Design and create multiple data filters to see the different aspects of the data. Plotted user friendly 20 plus charts using HighCharts library.",
        "Added user management system for Admin to see the different activities and actions taken by the end users. Worked on exports of the same details in Excel."
      ]
    },
    {
      title: "Software Developer",
      company: "Kantar",
      period: "Jun 2019 - Aug 2020",
      description: [
        "Successfully built a dashboard for clients using ADO.NET technology. End users are also able to download the dashboard data in different Exports formats like Excel, PPT and PDF.",
        "Developed multiple dashboards for Cyber Security using Angular 11 framework and RxJs library.",
        "Created architectural design for data query through stored procedures(SP) in ADO.NET project and integrated the same data to dashboard."
      ]
    }
  ];

  const projects = [
    {
      title: "Inventory Management",
      tech: "Angular and SCSS",
      preview: "Preview",
      image: "https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Image Search",
      tech: "React",
      preview: "Preview",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "Crypto Tracker",
      tech: "Angular and Webhooks",
      preview: "Preview",
      image: "https://images.unsplash.com/photo-1621761191319-c6fb62004040?w=800&auto=format&fit=crop&q=60"
    },
    {
      title: "AWS Cognito",
      tech: "React",
      preview: "Preview",
      image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=800&auto=format&fit=crop&q=60"
    }
  ];

  const technicalStrengths = {
    "Programming Languages": {
      skills: ["JavaScript", "React", "Angular"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg"
    },
    "Libraries": {
      skills: ["Tanstack(React-Query)", "Storybook", "HighChart", "GraphQL", "MUI"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg"
    },
    "Frameworks": {
      skills: ["React-Redux", "Next.js", "RxJs", "ADO.NET"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redux/redux-original.svg"
    },
    "Tools": {
      skills: ["Cypress", "Jest", "Webpack", "Amazon Amplify"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/webpack/webpack-original.svg"
    },
    "Cloud Services": {
      skills: ["AWS S3", "CloudFront", "Firebase", "Route 53", "CI/CD"],
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original.svg"
    }
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
        className="h-screen flex flex-col items-center justify-center px-4 text-center relative"
        style={{
          backgroundImage: 'url(https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1800&auto=format&fit=crop&q=60)',
          backgroundSize: 'cover',
          backgroundPosition: 'center'
        }}
      >
        <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
        <div className="relative z-10">
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
        </div>
        <ChevronDown className="absolute bottom-8 animate-bounce h-6 w-6 text-muted-foreground z-10" />
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
              <div key={index} className="glass-card p-6 rounded-lg overflow-hidden">
                <div className="aspect-video mb-4 overflow-hidden rounded-lg">
                  <img 
                    src={project.image} 
                    alt={project.title}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                  />
                </div>
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
            {Object.entries(technicalStrengths).map(([category, { skills, icon }]) => (
              <div key={category} className="glass-card p-6 rounded-lg">
                <div className="flex items-center gap-4 mb-4">
                  <img src={icon} alt={category} className="w-8 h-8" />
                  <h3 className="text-lg font-semibold">{category}</h3>
                </div>
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
