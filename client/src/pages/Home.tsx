/**
 * Neo-Brutalism Portfolio Design
 * - Sharp geometric shapes with thick borders
 * - Monochrome palette with cyan accent
 * - JetBrains Mono for technical labels, Space Grotesk for content
 * - Instant, snappy interactions
 */

import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Github, Linkedin, Mail, Download, Menu, X, ChevronLeft, ChevronRight, ExternalLink, BarChart3, Database } from "lucide-react";

type ProjectCategory = "all" | "ai" | "development" | "hackathons";

export default function Home() {
  const [activeSection, setActiveSection] = useState("home");
  const [activeEdu, setActiveEdu] = useState("sutd");
  const [activeExp, setActiveExp] = useState("komax");
  const [activeSkillTab, setActiveSkillTab] = useState("languages");
  const [activeProjectFilter, setActiveProjectFilter] = useState<ProjectCategory>("all");
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const projectsScrollRef = useRef<HTMLDivElement>(null);

  const scrollProjects = (direction: 'left' | 'right') => {
    if (projectsScrollRef.current) {
      const scrollAmount = 400;
      const newScrollLeft = projectsScrollRef.current.scrollLeft + 
        (direction === 'right' ? scrollAmount : -scrollAmount);
      projectsScrollRef.current.scrollTo({
        left: newScrollLeft,
        behavior: 'smooth'
      });
    }
  };

  // Update active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ["home", "education", "projects", "experience", "skills", "resume"];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const experiences = [
    {
      id: "komax",
      company: "Komax Singapore Pte.Ltd",
      logoUrl: "/komaxlogo.jpeg",
      role: "Software Engineer Intern",
      period: "Aug 2024 - Dec 2024",
      description:
        "Developed modular Angular/TypeScript dashboards for an internal tool, enabling real-time machine performance monitoring, predictive analytics, and optimized front-end engineering workflows.",
      achievements: [
        "Improved UI/UX by implementing intuitive Figma prototypes and integrated RESTful APIs for real-time data handling",
        "Ensured software quality using Jasmine unit tests, Angular Testbed, and RxJS for asynchronous data management, while leveraging CI/CD pipelines with GitLab and Docker to streamline deployments",
        "Collaborated in an Agile and Scrum environment with cross-functional teams using Jira and Confluence",
      ],
    },
    {
      id: "sutd-ta1",
      company: "SUTD",
      logoUrl: "/sutdlogo-new.jpg",
      role: "Teaching Assistant - Algorithms Course",
      period: "Jan 2025 - Apr 2025",
      description:
        "Working closely with the course instructor to understand the goals and objectives of the course, as well as to coordinate teaching activities. Focused on Algorithms and Data Structures basics.",
      achievements: [
        "Assist students in solving problems, guiding them through step-by-step solutions, and identifying any errors in their approach",
        "Conducted assessment checking and provided detailed feedback to students",
        "Coordinated with course instructor for curriculum delivery and student support",
      ],
    },
    {
      id: "ledger",
      company: "Ledger",
      logoUrl: "/ledgerlogo.jpeg",
      role: "Data and AI Engineer",
      period: "Mar 2025 - Present",
      description:
        "Building omnichannel POS and inventory management platform for Southeast Asian retailers with AI-powered features.",
      achievements: [
        "Shipped MVP and GTM collateral",
        "Built analytics dashboards for stockout alerts",
        "Developed ML models for demand forecasting",
      ],
    },
    {
      id: "wilmar",
      company: "Wilmar International Limited Singapore",
      logoUrl: "/wilmarlogo.png",
      role: "Application Analyst Intern",
      period: "May 2025 - Sep 2025",
      description:
        "Developed and enhanced enterprise web applications on SAP S/4HANA using Fiori, ABAP, and OData, improving performance, scalability, and user experience for HR and IT systems.",
      achievements: [
        "Implemented dynamic UI components with JavaScript, XML, and CSS, including color-coded analytics dashboards and conditional logic for data visualization",
        "Researched on SAP Joule to evaluate applications of generative AI, conversational analytics, and intelligent process automation for upcoming internal projects",
        "Collaborated with cross-functional teams for QA, deployment, and documentation, ensuring production-ready releases aligned with software development best practices",
      ],
    },
    {
      id: "sutd-ta2",
      company: "SUTD",
      logoUrl: "/sutdlogo-new.jpg",
      role: "Teaching Assistant - Computational Thinking and Design Course",
      period: "Sep 2025 - Dec 2025",
      description:
        "Assisted in teaching Python programming fundamentals and computational thinking concepts to first-year students.",
      achievements: [
        "Guided students through Python programming fundamentals including data structures, control flow, and functions",
        "Provided in-class guidance and one-on-one mentoring sessions to help students debug code and understand core concepts",
        "Evaluated course projects and assignments with constructive feedback",
      ],
    },
    {
      id: "sutd-ta3",
      company: "SUTD",
      logoUrl: "/sutdlogo-new.jpg",
      role: "Teaching Assistant - Algorithms Course",
      period: "Jan 2026 - Apr 2026",
      description:
        "Working closely with the course instructor to understand the goals and objectives of the course, as well as to coordinate teaching activities. Focused on Algorithms and Data Structures basics.",
      achievements: [
        "Assist students in solving problems, guiding them through step-by-step solutions, and identifying any errors in their approach",
        "Conducted assessment checking and provided detailed feedback to students",
        "Coordinated with course instructor for curriculum delivery and student support",
      ],
    },
  ];

  const allProjects = [
    {
      title: "AI-Powered Sign Language Recognition System",
      description:
        "Built an end-to-end sign language recognition model using 1D CNN + BiLSTM/Transformer architectures in TensorFlow, achieving 92.3% top-5 accuracy on 250 ASL classes. Integrated FLAN-T5 Transformer for natural language generation. Deployed an interactive Streamlit GUI for real-time gesture classification and translation.",
      tech: ["TensorFlow", "BiLSTM", "Transformer", "Streamlit"],
      category: "ai" as ProjectCategory,
    },
    {
      title: "HDB Resale Price Prediction using Machine Learning",
      description:
        "Built a predictive analytics model for Singapore's HDB resale prices using Neural Networks, Random Forest, XGBoost, and KNN, achieving R² of 0.97. Engineered integrated dataset by merging HDB resale records, CPI data, and amenity proximity via OneMap API. Deployed Streamlit-based interactive UI for real-time predictions.",
      tech: ["Python", "XGBoost", "Random Forest", "Streamlit"],
      category: "ai" as ProjectCategory,
    },
    {
      title: "Hotel Booking Web Application for Ascenda Loyalty",
      description:
        "Designed and developed a full-stack hotel booking web application using React.js, Node.js, and MySQL, enabling seamless end-to-end functionality from dynamic front-end interactions to robust server-side processing. Integrated Ascenda Loyalty's APIs for real-time data and Stripe's API for payment processing.",
      tech: ["React.js", "Node.js", "MySQL", "Stripe API"],
      category: "development" as ProjectCategory,
    },
    {
      title: "VoluntNear - Android Volunteer Matching App",
      description:
        "Developed an Android app connecting beneficiaries with volunteers using Android Studio. Implemented user registration, task creation, and task management features with real-time updates via Firebase. Applied Object Oriented Programming (OOP) and utilized Data Structures to enhance application performance.",
      tech: ["Java", "Android Studio", "Firebase"],
      category: "development" as ProjectCategory,
    },
    {
      title: "Memory Maze: Grid Escape - FPGA Multiplayer Game",
      description:
        "Developed a multiplayer arcade game on an FPGA using Alchitry Lucid, where the first player to cross a 4x4 matrix wins. The project provided insight into Beta CPU Datapath and low-level programming with Assembly language. Awarded the Audience Award for Best Project.",
      tech: ["FPGA", "Alchitry Lucid", "Assembly", "Beta CPU"],
      category: "development" as ProjectCategory,
    },
    {
      title: "Eggsplosion - Virtual Reality FPS Game",
      description:
        "Collaborated with a global team of 7 to develop a 3D FPS game for the Pico VR headset using Unity 2021, Python, and C#. Utilized GitHub, PicoDev for game development, and Rhino for graphics design. Completed in 4 weeks, achieving first place with a German grade of 1.0.",
      tech: ["Unity", "C#", "Python", "VR", "Pico VR"],
      category: "development" as ProjectCategory,
    },
    {
      title: "Crop Yield Prediction for ASEAN Countries",
      description:
        "Engineered a Machine Learning model employing multiple linear regression with the Pandas library in Python. The model accurately predicted crop yield by analyzing environmental, economic, and political factors in 10 ASEAN countries. Evaluated model performance using R-squared, t-test, and F-test. Awarded Best Project.",
      tech: ["Python", "Pandas", "Linear Regression", "Statistical Analysis"],
      category: "ai" as ProjectCategory,
    },
  ];

  const filteredProjects = activeProjectFilter === "all" 
    ? allProjects 
    : allProjects.filter(p => p.category === activeProjectFilter);

  return (
    <div className="min-h-screen">
      {/* Fixed Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card border-b-4 border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-xl font-bold mono tracking-tight">JANYA MALI</h1>
          <button
            className="md:hidden p-2 border-2 border-border hover:border-[var(--accent-hover)] transition-colors"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
          <div className="hidden md:flex gap-2">
            {["Home", "Projects", "Experience", "Skills", "Resume"].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`px-4 py-2 text-sm font-medium mono uppercase tracking-wider transition-all ${
                  activeSection === item.toLowerCase()
                    ? "bg-transparent text-foreground border-2 border-[var(--accent-hover)]"
                    : "bg-transparent text-foreground border-2 border-border hover:border-[var(--accent-hover)] hover:text-[var(--accent-hover)]"
                }`}
              >
                {item}
              </button>
            ))}
          </div>
        </div>
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-card border-t-2 border-border p-4">
            <div className="flex flex-col gap-2">
              {["Home", "Projects", "Experience", "Skills", "Resume"].map((item) => (
                <button
                  key={item}
                  onClick={() => {
                    scrollToSection(item.toLowerCase());
                    setMobileMenuOpen(false);
                  }}
                  className={`px-4 py-2 text-sm font-medium mono uppercase tracking-wider transition-all text-left ${
                    activeSection === item.toLowerCase()
                      ? "bg-transparent text-foreground border-2 border-[var(--accent-hover)]"
                      : "bg-transparent text-foreground border-2 border-border hover:border-[var(--accent-hover)] hover:text-[var(--accent-hover)]"
                  }`}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* Home Section */}
      <section
        id="home"
        className="min-h-screen pt-24 pb-20 relative overflow-hidden bg-card"
      >
        <div className="container relative z-10">
          <div className="grid lg:grid-cols-[2fr_1fr] gap-12 items-center">
            <div className="space-y-6">
              <div className="bg-card border-4 border-[var(--accent-hover)] p-8 heavy-shadow">
                <h2 className="text-5xl font-bold mb-4">Hi, I'm Janya.</h2>
                <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                  Computer Science and Design undergraduate at SUTD skilled in Python, Java, JavaScript, and SQL, with experience in full-stack development, machine learning, and data-driven systems. Proficient in building scalable applications using React, Node.js, and Docker, and integrating AI-powered features through TensorFlow and scikit-learn. Passionate about developing intelligent, high-performance software solutions that bridge data and technology.
                </p>
                <div className="flex gap-3">
                  <a
                    href="https://linkedin.com/in/janya-mali-sutd"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border-2 border-border hover:border-[var(--accent-hover)] transition-colors"
                  >
                    <Linkedin className="w-5 h-5" />
                    <span className="mono text-sm">LinkedIn</span>
                  </a>
                  <a
                    href="mailto:janyamali07@gmail.com"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border-2 border-border hover:border-[var(--accent-hover)] transition-colors"
                  >
                    <Mail className="w-5 h-5" />
                    <span className="mono text-sm">Email</span>
                  </a>
                  <a
                    href="https://janyaa07.github.io/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-secondary border-2 border-border hover:border-[var(--accent-hover)] transition-colors"
                  >
                    <Github className="w-5 h-5" />
                    <span className="mono text-sm">GitHub</span>
                  </a>
                </div>
              </div>
            </div>
            <div className="flex justify-center lg:justify-end">
              <div className="relative">
                <div className="w-64 h-64 lg:w-80 lg:h-80 rounded-full border-4 border-foreground heavy-shadow overflow-hidden">
                  <img
                    src="https://files.manuscdn.com/user_upload_by_module/session_file/310519663326578255/XmWIFJXbwEmRcTZt.jpg"
                    alt="Janya Mali"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section id="education" className="py-12 diagonal-clip bg-card relative -mt-12 pt-24">
        <div className="container">
          <h2 className="text-4xl font-bold mb-2 mono uppercase tracking-wider">
            <span className="text-muted-foreground text-2xl">01.</span> Education
          </h2>
          <div className="h-1 w-24 bg-[var(--accent-hover)] mb-8"></div>

          <div className="flex gap-4 mb-8 flex-wrap">
            {[
              { id: "sutd", logo: "/sutdlogo-full.jpg", alt: "SUTD" },
              { id: "tuberlin", logo: "/tuberlinlogo.png", alt: "TU Berlin" },
              { id: "dps", logo: "/dpslogo.jpg", alt: "DPS Pune" },
            ].map((edu) => (
              <button
                key={edu.id}
                onClick={() => setActiveEdu(edu.id)}
                className={`w-16 h-16 border-3 transition-all bg-white p-2 ${
                  activeEdu === edu.id
                    ? "border-[var(--accent-hover)] thick-border"
                    : "border-border hover:border-[var(--accent-hover)]"
                }`}
              >
                <img src={edu.logo} alt={edu.alt} className="w-full h-full object-contain" />
              </button>
            ))}
          </div>

          <div className="bg-background border-4 border-border p-8 heavy-shadow">
            {activeEdu === "sutd" && (
              <div>
                <h3 className="text-2xl font-bold mb-2">
                  Singapore University of Technology and Design
                </h3>
                <p className="mono text-sm text-muted-foreground mb-4">2022 - 2026</p>
                <div className="space-y-3">
                  <p className="text-lg font-semibold">
                    Bachelor of Engineering in Computer Science and Design
                  </p>
                  <p className="text-base text-muted-foreground">
                    Tracks: Software Engineering and Artificial Intelligence
                  </p>
                  <p className="text-base text-muted-foreground">
                    Wilmar-SUTD Scholarship Holder
                  </p>
                </div>
              </div>
            )}
            {activeEdu === "tuberlin" && (
              <div>
                <h3 className="text-2xl font-bold mb-2">Technical University of Berlin</h3>
                <p className="mono text-sm text-muted-foreground mb-4">July 2023 - Aug 2023</p>
                <div className="space-y-3">
                  <p className="text-lg font-semibold">Summer Program</p>
                  <p className="text-base text-muted-foreground">
                    Course on Gaming and Augmented Reality
                  </p>
                  <p className="text-base text-muted-foreground">
                    Grade: 1.0 German Grade
                  </p>
                </div>
              </div>
            )}
            {activeEdu === "dps" && (
              <div>
                <h3 className="text-2xl font-bold mb-2">Delhi Public School Pune</h3>
                <p className="mono text-sm text-muted-foreground mb-4">High School</p>
                <div className="space-y-3">
                  <p className="text-base text-muted-foreground">
                    96% in Class 12 CBSE Board Examination
                  </p>
                  <p className="text-base text-muted-foreground">
                    97.8% in Class 10 CBSE Board Examination
                  </p>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section
        id="projects"
        className="py-20 relative bg-card"
      >
        <div className="container relative z-10">
          <div className="flex items-center justify-between mb-8">
            <div>
              <h2 className="text-4xl font-bold mb-2 mono uppercase tracking-wider">
                <span className="text-muted-foreground text-2xl">02.</span> Projects
              </h2>
              <div className="h-1 w-24 bg-[var(--accent-hover)]"></div>
              <p className="text-sm text-muted-foreground mono mt-2">
                Showing {filteredProjects.length} of {allProjects.length} projects
              </p>
            </div>
            <div className="flex gap-2">
              <button
                onClick={() => scrollProjects('left')}
                className="p-3 bg-secondary border-2 border-border hover:border-[var(--accent-hover)] transition-colors"
                aria-label="Scroll left"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={() => scrollProjects('right')}
                className="p-3 bg-secondary border-2 border-border hover:border-[var(--accent-hover)] transition-colors"
                aria-label="Scroll right"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </div>
          </div>

          {/* Project Filter Tabs */}
          <div className="flex gap-3 mb-8 flex-wrap">
            {[
              { id: "all" as ProjectCategory, label: "All" },
              { id: "ai" as ProjectCategory, label: "AI" },
              { id: "development" as ProjectCategory, label: "Development" },
              { id: "hackathons" as ProjectCategory, label: "Hackathons" },
            ].map((filter) => (
              <button
                key={filter.id}
                onClick={() => setActiveProjectFilter(filter.id)}
                className={`px-5 py-2 mono text-sm uppercase tracking-wider border-2 transition-colors ${
                  activeProjectFilter === filter.id
                    ? "bg-transparent text-foreground border-[var(--accent-hover)]"
                    : "bg-transparent text-foreground border-border hover:border-[var(--accent-hover)]"
                }`}
              >
                {filter.label}
              </button>
            ))}
          </div>

          <div ref={projectsScrollRef} className="overflow-x-auto pb-4 scrollbar-hide">
            <div className="flex gap-6 min-w-max">
              {filteredProjects.map((project, idx) => (
                <div
                  key={idx}
                  className="w-80 bg-card border-4 border-border p-6 heavy-shadow flex-shrink-0 flex flex-col"
                >
                  <h3 className="text-xl font-bold mb-3">{project.title}</h3>
                  <p className="text-muted-foreground mb-4 text-sm leading-relaxed flex-grow">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-1 bg-secondary border-2 border-[var(--accent-hover)] text-xs mono"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <div className="flex gap-2 mt-auto">
                    <button className="flex-1 px-3 py-2 bg-secondary border-2 border-border hover:border-[var(--accent-hover)] hover:text-[var(--accent-hover)] transition-colors text-sm mono flex items-center justify-center gap-2">
                      <Github className="w-4 h-4" />
                      GitHub
                    </button>
                    <button className="flex-1 px-3 py-2 bg-secondary border-2 border-border hover:border-[var(--accent-hover)] hover:text-[var(--accent-hover)] transition-colors text-sm mono flex items-center justify-center gap-2">
                      <ExternalLink className="w-4 h-4" />
                      View
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 diagonal-clip bg-card relative -mt-12 pt-24">
        <div className="container">
          <h2 className="text-4xl font-bold mb-2 mono uppercase tracking-wider">
            <span className="text-muted-foreground text-2xl">03.</span> Experience
          </h2>
          <div className="h-1 w-24 bg-[var(--accent-hover)] mb-8"></div>

          {/* Horizontal Timeline */}
          <div className="relative mb-8 overflow-x-auto pb-4">
            <div className="flex justify-between items-start relative z-10 gap-4 min-w-max">
              <div className="absolute left-0 right-0 top-10 h-1 bg-[var(--accent-hover)] w-full z-0"></div>
              {experiences.map((exp) => (
                <div key={exp.id} className="flex flex-col items-center flex-1 min-w-[120px] relative">
                  <button
                    onClick={() => setActiveExp(exp.id)}
                    className={`w-20 h-20 rounded-full border-4 transition-all ${
                      activeExp === exp.id
                        ? "bg-white border-[var(--accent-hover)] relative z-20"
                        : "bg-white border-border hover:border-[var(--accent-hover)] relative z-20"
                    } flex items-center justify-center heavy-shadow`}
                  >
                    <img 
                      src={exp.logoUrl} 
                      alt={exp.company}
                      className="w-full h-full object-contain p-3"
                    />
                  </button>
                  <span className="mt-6 text-xs mono text-muted-foreground text-center whitespace-nowrap">
                    {exp.period}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Experience Details */}
          <div className="mt-12">
            {experiences
              .filter((exp) => exp.id === activeExp)
              .map((exp) => (
                <div key={exp.id} className="bg-background border-4 border-border p-8 heavy-shadow">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-2xl font-bold">{exp.role}</h3>
                      <p className="text-xl text-muted-foreground">{exp.company}</p>
                    </div>
                    <span className="mono text-sm text-muted-foreground">{exp.period}</span>
                  </div>
                  <p className="text-muted-foreground mb-6 leading-relaxed">{exp.description}</p>
                  <ul className="space-y-3">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <span className="text-primary text-xl mt-1">▸</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section
        id="skills"
        className="py-20 relative bg-card"
      >
        <div className="container relative z-10">
          <h2 className="text-4xl font-bold mb-2 mono uppercase tracking-wider">
            <span className="text-muted-foreground text-2xl">04.</span> Skills
          </h2>
          <div className="h-1 w-24 bg-[var(--accent-hover)] mb-8"></div>

          <div className="flex gap-4 mb-8 flex-wrap">
            {[
              { id: "languages", label: "Languages" },
              { id: "frameworks", label: "Frameworks" },
              { id: "tools", label: "Tools" },
              { id: "databases", label: "Databases" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveSkillTab(tab.id)}
                className={`px-6 py-3 mono text-sm uppercase tracking-wider border-3 transition-colors ${
                  activeSkillTab === tab.id
                    ? "bg-transparent text-foreground border-[var(--accent-hover)] thick-border"
                    : "bg-transparent text-foreground border-border hover:border-[var(--accent-hover)]"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="bg-card border-4 border-border p-8 heavy-shadow">
            {activeSkillTab === "languages" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Python", icon: "devicon-python-plain colored" },
                  { name: "JavaScript", icon: "devicon-javascript-plain colored" },
                  { name: "TypeScript", icon: "devicon-typescript-plain colored" },
                  { name: "SQL", icon: "devicon-azuresqldatabase-plain colored" },
                  { name: "Java", icon: "devicon-java-plain colored" },
                  { name: "C", icon: "devicon-c-plain colored" },
                  { name: "C++", icon: "devicon-cplusplus-plain colored" },
                  { name: "HTML", icon: "devicon-html5-plain colored" },
                  { name: "CSS", icon: "devicon-css3-plain colored" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-background border-2 border-border p-4 flex flex-col items-center gap-2 hover:border-[var(--accent-hover)] transition-colors"
                  >
                    <i className={`${skill.icon} text-4xl`}></i>
                    <span className="mono text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
            {activeSkillTab === "frameworks" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "React", icon: "devicon-react-original colored" },
                  { name: "Node.js", icon: "devicon-nodejs-plain colored" },
                  { name: "Express", icon: "devicon-express-original" },
                  { name: "Angular", icon: "devicon-angular-plain colored" },
                  { name: "TensorFlow", icon: "devicon-tensorflow-original colored" },
                  { name: "PyTorch", icon: "devicon-pytorch-original colored" },
                  { name: "scikit-learn", icon: "devicon-scikitlearn-plain colored" },
                  { name: "Pandas", icon: "devicon-pandas-plain colored" },
                  { name: "NumPy", icon: "devicon-numpy-plain colored" },
                  { name: "OpenCV", icon: "devicon-opencv-plain colored" },
                  { name: "Unity", icon: "devicon-unity-plain colored" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-background border-2 border-border p-4 flex flex-col items-center gap-2 hover:border-[var(--accent-hover)] transition-colors"
                  >
                    <i className={`${skill.icon} text-4xl`}></i>
                    <span className="mono text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
            {activeSkillTab === "tools" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "Git", icon: "devicon-git-plain colored" },
                  { name: "Docker", icon: "devicon-docker-plain colored" },
                  { name: "AWS Cloud", icon: "devicon-amazonwebservices-plain-wordmark colored" },
                  { name: "Tableau", icon: "devicon-python-plain colored", useLucide: "BarChart3" },
                  { name: "Power BI", icon: "devicon-azure-plain colored", useLucide: "Database" },
                  { name: "Figma", icon: "devicon-figma-plain colored" },
                  { name: "VS Code", icon: "devicon-vscode-plain colored" },
                  { name: "Jupyter", icon: "devicon-jupyter-plain colored" },
                  { name: "SAP ERP", icon: "devicon-sap-plain colored" },
                  { name: "GitHub", icon: "devicon-github-original" },
                  { name: "REST APIs", icon: "devicon-postman-plain colored" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-background border-2 border-border p-4 flex flex-col items-center gap-2 hover:border-[var(--accent-hover)] transition-colors"
                  >
                    {skill.useLucide === "BarChart3" ? (
                      <BarChart3 className="w-10 h-10 text-blue-500" />
                    ) : skill.useLucide === "Database" ? (
                      <Database className="w-10 h-10 text-yellow-600" />
                    ) : (
                      <i className={`${skill.icon} text-4xl`}></i>
                    )}
                    <span className="mono text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
            {activeSkillTab === "databases" && (
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {[
                  { name: "MySQL", icon: "devicon-mysql-plain colored" },
                  { name: "MongoDB", icon: "devicon-mongodb-plain colored" },
                  { name: "Firebase", icon: "devicon-firebase-plain colored" },
                  { name: "DynamoDB", icon: "devicon-dynamodb-plain colored" },
                  { name: "PostgreSQL", icon: "devicon-postgresql-plain colored" },
                ].map((skill) => (
                  <div
                    key={skill.name}
                    className="bg-background border-2 border-border p-4 flex flex-col items-center gap-2 hover:border-[var(--accent-hover)] transition-colors"
                  >
                    <i className={`${skill.icon} text-4xl`}></i>
                    <span className="mono text-sm">{skill.name}</span>
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Resume Section */}
      <section id="resume" className="py-16 diagonal-clip bg-card relative -mt-12 pt-20">
        <div className="container">
          <h2 className="text-4xl font-bold mb-2 mono uppercase tracking-wider">
            <span className="text-muted-foreground text-2xl">05.</span> Resume
          </h2>
          <div className="h-1 w-24 bg-[var(--accent-hover)] mb-8"></div>

          <div className="bg-background border-4 border-border p-6 heavy-shadow text-center max-w-md mx-auto">
            <h3 className="text-lg font-bold mb-2">Download My Resume</h3>
            <p className="text-muted-foreground mb-4 text-xs">
              Get a comprehensive overview of my experience, skills, and education.
            </p>
            <a
              href="/Janya_Mali_SWE_Resume.pdf"
              download="/Janya_Mali_SWE_Resume.pdf"
              className="inline-flex items-center px-4 py-2 text-sm mono uppercase tracking-wider bg-background hover:bg-background border-4 border-border hover:border-[var(--accent-hover)] heavy-shadow text-foreground hover:text-[var(--accent-hover)] transition-colors"
            >
              <Download className="w-5 h-5 mr-2" />
              Download Resume
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t-4 border-border bg-background">
        <div className="container text-center">
          <p className="mono text-sm text-muted-foreground">
            © 2026 Janya Mali. Built with React + Tailwind CSS.
          </p>
        </div>
      </footer>
    </div>
  );
}
