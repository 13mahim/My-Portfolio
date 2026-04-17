import React from "react";
import { motion } from "motion/react";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Github, 
  Linkedin, 
  ExternalLink, 
  GraduationCap, 
  Calendar,
  Briefcase,
  Code2,
  Award,
  ChevronRight
} from "lucide-react";

interface SectionHeaderProps {
  title: string;
  icon: React.ElementType;
  key?: React.Key;
}

const SectionHeader = ({ title, icon: Icon }: SectionHeaderProps) => (
  <motion.div 
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    viewport={{ once: true }}
    className="flex items-center gap-4 mb-12"
  >
    <div className="p-3 rounded-xl bg-purple-500/10 border border-purple-500/20 text-purple-400">
      <Icon size={24} />
    </div>
    <h2 className="text-3xl font-display font-bold tracking-tight bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
      {title}
    </h2>
    <div className="h-[1px] flex-1 bg-gradient-to-r from-purple-500/50 to-transparent ml-4" />
  </motion.div>
);

interface CardProps {
  children: React.ReactNode;
  className?: string;
  key?: React.Key;
}

const Card = ({ children, className = "" }: CardProps) => (
  <motion.div 
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    className={`glass-card p-6 glow-border transition-all duration-300 ${className}`}
  >
    {children}
  </motion.div>
);

export default function App() {
  const skills = [
    "HTML", "CSS", "JavaScript (JS)", "React.js", "Next.js", 
    "Node.js/Express", "PHP (Laravel)", "SQL (PostgreSQL)", "Docker", "GitHub"
  ];

  const projects = [
    {
      title: "SkillBridge - Tutoring Platform",
      description: "A full-stack tutoring platform connecting students with expert tutors. Facilitates seamless learning experiences through advanced features and an intuitive interface.",
      github: "https://github.com/13mahim/SkillBridge.git",
      live: "https://frontend-eta-five-90.vercel.app",
      tags: ["Full Stack", "React", "Collaboration"],
      image: "/src/skilbrige.jpeg"
    },
    {
      title: "Planora — Event Management Platform",
      description: "A full-stack event management platform where users can create, join, and manage events with support for public/private events, invitations, payments, and reviews.",
      github: "https://github.com/13mahim/Planora-NEW.git",
      live: "https://planora-new-frontend.vercel.app",
      tags: ["Full Stack", "Express", "Node.js"],
      image: "/src/planora.png"
    }
  ];

  const education = [
    {
      degree: "B.Sc (Hon's) at department of chemistry",
      institution: "Government B.L college, Khulna",
      meta: "Running 4th Year | Duration: 4 Years",
      major: "Chemistry"
    },
    {
      degree: "Higher Secondary Certificate (H.S.C)",
      institution: "Satkhira Government College",
      meta: "Passing Year: 2020 | Duration: 2 Years",
      major: "Science",
      result: "5.00 (Out of 5.00)"
    },
    {
      degree: "Secondary School Certificate (S.S.C)",
      institution: "Nakipur HC Pilot model high school",
      meta: "Passing Year: 2018 | Duration: 2 Years",
      major: "Science",
      result: "5.00 (Out of 5.00)"
    }
  ];

  const trainings = [
    "National Skill Standard Basic (360 Hrs.) Progress Computer Training Institute (35266), BL college road Daulatpur, Khulna.",
    "EDGE Khulna University CSE PHP (Laravel) Course in Khulna University.",
    "Programming Hero."
  ];

  return (
    <div className="min-h-screen selection:bg-purple-500/30 font-sans">
      <div className="atmosphere" />
      
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#030014]/80 backdrop-blur-md">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full overflow-hidden border border-purple-500/30 glow-border">
              <img 
                src="/src/my%20pic.png" 
                alt="MD. FAHAD HASAN"
                className="w-full h-full object-cover"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/developer/100/100";
                }}
              />
            </div>
            <div className="font-display font-bold text-xl bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent hidden sm:block">
              FH
            </div>
          </div>
          <div className="flex gap-8 text-sm font-medium text-gray-400">
            {["Home", "Projects", "Skills", "Education"].map((item) => (
              <a 
                key={item} 
                href={`#${item.toLowerCase()}`}
                className="hover:text-purple-400 transition-colors"
              >
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto px-6 pt-32 pb-24">
        {/* Hero Section */}
        <section id="home" className="flex flex-col-reverse lg:grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center lg:text-left"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-xs font-semibold mb-6 uppercase tracking-widest mx-auto lg:mx-0">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-purple-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-purple-500"></span>
              </span>
              Web Developer
            </div>
            <h1 className="text-5xl md:text-6xl lg:text-8xl font-display font-bold mb-8 leading-[0.9] tracking-tight">
              MD. <br className="hidden lg:block" />
              <span className="bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
                FAHAD HASAN
              </span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed mb-10 max-w-xl mx-auto lg:mx-0">
              As a passionate Web Developer, I am a firm believer in writing clean code and effective problem-solving. 
              I am dedicated to achieving organizational goals and creating high-quality digital solutions.
            </p>
            
            <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
              <a 
                href="mailto:fahad13mahim@gmail.com"
                className="px-8 py-4 rounded-xl bg-purple-600 hover:bg-purple-700 text-white font-semibold transition-all shadow-[0_0_20px_rgba(168,85,247,0.4)] flex items-center gap-2"
              >
                <Mail size={18} /> Contact Me
              </a>
              <div className="flex items-center gap-4 px-4">
                <a href="https://github.com/13mahim" target="_blank" className="p-3 rounded-full border border-white/10 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 transition-all">
                  <Github size={20} />
                </a>
                <a href="https://www.linkedin.com/in/fahad-hasan-489aa7193" target="_blank" className="p-3 rounded-full border border-white/10 hover:border-purple-500/50 text-gray-400 hover:text-purple-400 transition-all">
                  <Linkedin size={20} />
                </a>
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8, rotate: -5 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 0.8 }}
            className="relative w-full max-w-[300px] md:max-w-[400px] lg:max-w-none mx-auto lg:mx-0"
          >
            <div className="absolute inset-0 bg-gradient-to-tr from-purple-500/20 to-blue-500/20 blur-3xl" />
            <div className="relative aspect-[4/5] rounded-[2rem] overflow-hidden border-2 border-white/10 glow-border">
              <img 
                src="/src/my%20pic.png" 
                alt="MD. FAHAD HASAN"
                className="w-full h-full object-cover hover:scale-105 transition-all duration-700"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "https://picsum.photos/seed/developer/800/1000";
                }}
              />
            </div>
          </motion.div>
        </section>

        {/* Projects Section */}
        <section id="projects" className="mb-32">
          <SectionHeader title="Featured Projects" icon={Briefcase} />
          <div className="grid md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <Card key={i} className="group h-full flex flex-col">
                <div className="mb-6 aspect-video rounded-xl bg-gray-900 border border-white/5 overflow-hidden relative">
                  {project.image ? (
                    <img 
                      src={project.image} 
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                      onError={(e) => {
                        (e.target as HTMLImageElement).style.display = 'none';
                      }}
                    />
                  ) : (
                    <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 to-blue-500/10" />
                  )}
                  <div className="absolute inset-x-0 bottom-0 p-6 bg-gradient-to-t from-gray-950 to-transparent">
                    <div className="flex gap-2">
                      {project.tags.map(tag => (
                        <span key={tag} className="text-[10px] font-bold uppercase tracking-widest px-2 py-1 rounded bg-white/10 text-white/70">
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                <h3 className="text-2xl font-display font-bold mb-3 group-hover:text-purple-400 transition-colors">
                  {project.title}
                </h3>
                <p className="text-gray-400 mb-6 flex-1 italic text-sm">
                  {project.description}
                </p>
                <div className="flex items-center gap-6 mt-auto">
                  <a 
                    href={project.github} 
                    target="_blank" 
                    className="flex items-center gap-2 text-sm font-semibold text-gray-400 hover:text-white transition-colors"
                  >
                    <Github size={16} /> GitHub
                  </a>
                  <a 
                    href={project.live} 
                    target="_blank" 
                    className="flex items-center gap-2 text-sm font-semibold text-purple-400 hover:text-purple-300 transition-colors"
                  >
                    <ExternalLink size={16} /> Live Demo
                    <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </Card>
            ))}
          </div>
        </section>

        {/* Skills Section */}
        <section id="skills" className="mb-32">
          <SectionHeader title="Technical Arsenal" icon={Code2} />
          <div className="flex flex-wrap gap-4">
            {skills.map((skill, i) => (
              <motion.div
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                className="px-6 py-4 rounded-2xl glass-card text-lg font-medium hover:bg-white/10 hover:border-purple-500/30 transition-all cursor-default"
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </section>

        {/* Education & Training */}
        <div className="grid lg:grid-cols-2 gap-16 mb-32">
          <section id="education">
            <SectionHeader title="Education" icon={GraduationCap} />
            <div className="space-y-6">
              {education.map((edu, i) => (
                <Card key={i}>
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-xl font-bold">{edu.degree}</h3>
                    <div className="p-2 rounded-lg bg-white/5 border border-white/10">
                      <GraduationCap size={16} className="text-purple-400" />
                    </div>
                  </div>
                  <p className="text-purple-400 font-medium mb-2">{edu.institution}</p>
                  <div className="flex items-center gap-4 text-sm text-gray-500">
                    <span className="flex items-center gap-1"><Calendar size={14} /> {edu.meta}</span>
                  </div>
                  {edu.result && (
                    <div className="mt-4 p-3 rounded-lg bg-green-500/5 border border-green-500/10 text-green-400 text-sm font-semibold">
                      GPA {edu.result}
                    </div>
                  )}
                </Card>
              ))}
            </div>
          </section>

          <section id="training">
            <SectionHeader title="Training Summary" icon={Award} />
            <div className="space-y-6">
              {trainings.map((training, i) => (
                <Card key={i} className="flex gap-4">
                  <div className="shrink-0 flex items-center justify-center w-10 h-10 rounded-full bg-purple-500/10 text-purple-400 font-bold border border-purple-500/20">
                    {i + 1}
                  </div>
                  <p className="text-gray-400 leading-relaxed text-sm">
                    {training}
                  </p>
                </Card>
              ))}
            </div>
          </section>
        </div>

        {/* Contact Strip */}
        <section className="mt-32">
          <Card className="flex flex-col md:flex-row gap-12 p-12 items-center justify-between">
            <div className="max-w-md">
              <h2 className="text-4xl font-display font-bold mb-4">Let's build something epic.</h2>
              <p className="text-gray-400 leading-relaxed">
                Currently looking for new opportunities. My inbox is always open whether you have a question or just want to say hi!
              </p>
            </div>
            <div className="flex flex-col gap-6 w-full md:w-auto">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                  <Mail size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Email</div>
                  <a href="mailto:fahad13mahim@gmail.com" className="text-gray-200 hover:text-purple-400 transition-colors">fahad13mahim@gmail.com</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                  <Phone size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Phone</div>
                  <a href="tel:+8801734440344" className="text-gray-200 hover:text-purple-400 transition-colors">+8801734440344</a>
                </div>
              </div>
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-xl bg-white/5 border border-white/10 text-purple-400">
                  <MapPin size={20} />
                </div>
                <div>
                  <div className="text-xs text-gray-500 uppercase tracking-widest font-bold">Address</div>
                  <div className="text-gray-200">Khulna, Bangladesh</div>
                </div>
              </div>
            </div>
          </Card>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-white/5 py-12 text-center text-sm text-gray-600">
        <p>© {new Date().getFullYear()} Md. Fahad Hasan. Built with precision.</p>
      </footer>
    </div>
  );
}
