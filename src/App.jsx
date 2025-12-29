import React, { useState, useEffect } from 'react';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Download, 
  ChevronLeft, 
  ChevronRight, 
  Code, 
  Database, 
  Layout, 
  Terminal,
  Cpu,
  Globe,
  Phone,
  Check,
  Loader2,
  Send,
  ArrowUp,
  ExternalLink,
  MessageCircle,
  X,
  Maximize2,
  Search,
  PenTool,
  Rocket,
  Activity 
} from 'lucide-react';

// --- Data Configuration ---

const personalInfo = {
  name: "Avishka D. Rajapaksha",
  role: "IT Student & Software Developer",
  about: "First-year IT student specializing in Java, JavaFX, and Database Management. Passionate about building robust desktop applications with MVC architecture and strict OOP principles.",
  email: "rpavishkadilhara@gmail.com",
  phone: "0759164843",
  whatsapp: "94759164843", 
  linkedin: "https://www.linkedin.com/in/avishka-d-rajapaksha-16b761300",
  github: "https://github.com/avishka-d-rajapaksha",
  cvLink: "/R_P_A_D_RAJAPAKSHA_CV.pdf",
  profileImage: "/my.jpg.jpeg"
};

const skills = [
  { name: "Java & JavaFX", icon: <Code size={20} /> },
  { name: "MySQL & JDBC", icon: <Database size={20} /> },
  { name: "MVC Architecture", icon: <Layout size={20} /> },
  { name: "OOP Principles", icon: <Cpu size={20} /> },
  { name: "React & Tailwind", icon: <Globe size={20} /> },
  { name: "Git & GitHub", icon: <Terminal size={20} /> },
];

const services = [
  {
    title: "Desktop App Development",
    desc: "Building robust, cross-platform desktop applications using Java and JavaFX with custom UI/UX and secure logic.",
    icon: <Layout size={32} />
  },
  {
    title: "Database Management",
    desc: "Designing normalized database schemas (3NF) and optimizing SQL queries for high-performance data storage.",
    icon: <Database size={32} />
  },
  {
    title: "Modern Web Solutions",
    desc: "Engineering scalable Single Page Applications (SPAs) using the React ecosystem and component-driven architectures.",
    icon: <Globe size={32} />
  },
  {
    title: "System Analysis",
    desc: "Analyzing business requirements and designing MVC-based software architectures for scalable solutions.",
    icon: <Terminal size={32} />
  }
];

const workflow = [
  {
    step: "01",
    title: "Discovery",
    desc: "Analyzing requirements and system architecture to ensure the best technical approach.",
    icon: <Search size={24} />
  },
  {
    step: "02",
    title: "Development",
    desc: "Building solutions using strict OOP principles, clean code, and regular progress updates.",
    icon: <PenTool size={24} />
  },
  {
    step: "03",
    title: "Delivery",
    desc: "Final testing, deployment, and providing documentation for a smooth handover.",
    icon: <Rocket size={24} />
  }
];

const education = [
  {
    institution: "University of Vocational Technology (UoVT)",
    degree: "Bachelor of Technology in Web and Creative Media",
    year: "Apr 2025 (Expected Start)",
    desc: "Upcoming specialization in advanced web technologies and creative media architectures."
  },
  {
    institution: "Sri Lanka Institute of Advanced Technological Education (SLIATE)",
    degree: "Higher National Diploma in Information Technology",
    year: "Aug 2024 - Jan 2027",
    desc: "Comprehensive study of Web Development, Web Design, Web Services, and C# programming."
  }
];

const projects = [
  {
    id: 1,
    title: "CityMart Retail Store System",
    date: "Nov 2025 - Dec 2025",
    description: "A comprehensive desktop POS & Inventory system built with JavaFX and MySQL. Features atomic billing transactions, role-based access control, and automated email alerts.",
    tech: ["JavaFX", "MySQL", "JDBC", "MVC Pattern", "JavaMail API"],
    link: "https://github.com/avishka-d-rajapaksha/CityMart-Retail-System",
    images: [
      "/Screenshot/CityMart/screenshot-2025-12-02-011136.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011208.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011219.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011259.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011335.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011352.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011421.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011446.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011506.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011523.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011535.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011608.png",
      "/Screenshot/CityMart/screenshot-2025-12-02-011620.png",
      "/Screenshot/CityMart/whatsapp-image-2025-12-29-at-12.04.57.jpeg",
      "/Screenshot/CityMart/whatsapp-image-2025-12-29-at-12.04.58.jpeg"
    ]
  },
  {
    id: 2,
    title: "Enterprise Car Rental System",
    date: "Jun 2024 - Jul 2024",
    description: "A full-featured rental management system handling the entire vehicle lifecycle. Includes automatic late fee calculation, customer blacklisting, and PDF invoice generation.",
    tech: ["Java", "JavaFX", "MySQL", "CSS", "PDF Generation"],
    link: "https://github.com/avishka-d-rajapaksha/CarRentalSystem",
    images: [
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-180455.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-180503.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-180944.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-180956.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-181153.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-181228.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-181333.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-190138.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-190400.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-190546.png",
      "/Screenshot/CarRentalSystem/screenshot-2025-10-07-190607.png"
    ]
  },
  {
    id: 3,
    title: "Gym Membership Tracker",
    date: "Dec 2025",
    description: "A membership management application for gyms. Tracks member attendance, subscription expiry dates, and payment history with a modern dashboard UI.",
    tech: ["Java", "JavaFX", "MySQL"],
    images: [
      "/Screenshot/GymTracker/screenshot-2025-12-22-225459.png",
      "/Screenshot/GymTracker/screenshot-2025-12-22-225516.png",
      "/Screenshot/GymTracker/screenshot-2025-12-22-225524.png",
      "/Screenshot/GymTracker/screenshot-2025-12-22-225558.png",
      "/Screenshot/GymTracker/screenshot-2025-12-22-225645.png",
      "/Screenshot/GymTracker/screenshot-2025-12-22-225815.png",
      "/Screenshot/GymTracker/screenshot-2025-12-22-230128.png",
      "/Screenshot/GymTracker/screenshot-2025-12-22-230135.png"
    ]
  },
  {
    id: 4,
    title: "Caesar Cipher Tool",
    date: "Oct 2025",
    description: "An encryption/decryption tool demonstrating classic cryptography algorithms. Features real-time text processing, custom shift keys, and clipboard integration.",
    tech: ["Java", "JavaFX", "Algorithms", "CSS"],
    link: "https://github.com/avishka-d-rajapaksha/CaesarCipher",
    images: [
      "/Screenshot/caesarCipherTool/screenshot-2025-11-05-174325.png"
    ]
  },
  {
    id: 5,
    title: "Knowledge Tree - E-Learning Platform",
    date: "Jul 2023 - Sep 2023",
    description: "Designed and launched a comprehensive e-learning web platform for teaching HTML, CSS, and PHP. Features resource aggregation (MDN, W3Schools) and a structured LMS interface.",
    tech: ["Wix", "CMS", "HTML/CSS", "Responsive Web Design"],
    link: "https://rpavishkadilhara.wixsite.com/knowledgetree1",
    images: [
      "/Screenshot/Knwolgdetree/home.jpg",
      "/Screenshot/Knwolgdetree/aboutUs.jpg",
      "/Screenshot/Knwolgdetree/contactUs.jpg",
      "/Screenshot/Knwolgdetree/Login.jpg",
      "/Screenshot/Knwolgdetree/Resources.jpg",
      "/Screenshot/Knwolgdetree/Viedo.jpg"
    ]
  }
];

// --- Components ---

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      const sections = ['skills', 'services', 'projects', 'education', 'contact'];
      let current = '';
      for (let section of sections) {
        const element = document.getElementById(section);
        if (element && window.scrollY >= (element.offsetTop - 200)) {
          current = section;
        }
      }
      setActiveSection(current);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrolled ? 'bg-black/90 backdrop-blur-md border-b border-zinc-800 py-4 shadow-lg' : 'bg-transparent py-6'}`}>
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        {/* Brand Name */}
        <span className="text-lg md:text-xl font-bold text-white tracking-wide cursor-pointer select-none font-mono" onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}>
          Avishka D. Rajapaksha<span className="text-blue-500">_</span>
        </span>

        {/* Live Status Indicator */}
        <div className="hidden lg:flex items-center gap-2 bg-green-500/10 px-3 py-1 rounded-full border border-green-500/20">
          <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
          <span className="text-[10px] text-green-400 font-bold uppercase tracking-wider">Open to Work</span>
        </div>

        <div className="hidden md:flex gap-8 text-sm font-medium text-zinc-400">
          {['Skills', 'Services', 'Projects', 'Education', 'Contact'].map((item) => (
            <button 
              key={item} 
              onClick={() => scrollToSection(item.toLowerCase())}
              className={`hover:text-blue-400 transition-colors uppercase tracking-wide text-xs ${activeSection === item.toLowerCase() ? 'text-blue-400 font-bold' : ''}`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </nav>
  );
};

const Typewriter = ({ words, speed = 150, delay = 2000 }) => {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [reverse, setReverse] = useState(false);
  const [blink, setBlink] = useState(true);

  useEffect(() => { const timeout2 = setInterval(() => setBlink((prev) => !prev), 500); return () => clearInterval(timeout2); }, []);
  useEffect(() => {
    if (index === words.length) return;
    if (subIndex === words[index].length + 1 && !reverse) { setTimeout(() => setReverse(true), delay); return; }
    if (subIndex === 0 && reverse) { setReverse(false); setIndex((prev) => (prev + 1) % words.length); return; }
    const timeout = setTimeout(() => { setSubIndex((prev) => prev + (reverse ? -1 : 1)); }, Math.max(reverse ? 75 : subIndex === words[index].length ? 1000 : speed, parseInt(Math.random() * 50)));
    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse, words, speed, delay]);
  return <span className="text-blue-400">{`${words[index].substring(0, subIndex)}${blink ? "|" : " "}`}</span>;
};

const ProjectGallery = ({ images, onImageClick }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  if (!images || images.length === 0) return <div className="h-48 md:h-64 bg-zinc-900 rounded border border-zinc-800 flex items-center justify-center text-zinc-600 font-mono">NO SIGNAL</div>;
  const nextSlide = (e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1)); };
  const prevSlide = (e) => { e.stopPropagation(); setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1)); };

  return (
    <div className="relative group w-full aspect-video bg-zinc-900 rounded-lg overflow-hidden border border-zinc-800 shadow-2xl cursor-zoom-in" onClick={() => onImageClick(images[currentIndex])}>
      <img src={images[currentIndex]} alt={`Screenshot ${currentIndex + 1}`} className="w-full h-full object-contain bg-black/50 backdrop-blur-sm" />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors flex items-center justify-center pointer-events-none">
         <Maximize2 className="text-white opacity-0 group-hover:opacity-50 scale-150 transition-all" />
      </div>
      {images.length > 1 && (
        <>
          <button onClick={prevSlide} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600/80 p-2 md:p-3 rounded-full text-white backdrop-blur-md border border-white/10 transition-all active:scale-95 z-10 opacity-0 group-hover:opacity-100"><ChevronLeft size={20} /></button>
          <button onClick={nextSlide} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-blue-600/80 p-2 md:p-3 rounded-full text-white backdrop-blur-md border border-white/10 transition-all active:scale-95 z-10 opacity-0 group-hover:opacity-100"><ChevronRight size={20} /></button>
          <div className="absolute top-3 right-3 bg-black/70 backdrop-blur border border-zinc-700 text-blue-200 text-xs font-mono px-2 py-1 rounded">{currentIndex + 1} / {images.length}</div>
        </>
      )}
    </div>
  );
};

const Lightbox = ({ src, onClose }) => {
  if (!src) return null;
  return (
    <div className="fixed inset-0 z-[60] bg-black/95 backdrop-blur-lg flex items-center justify-center p-4 animate-in fade-in duration-200" onClick={onClose}>
      <button onClick={onClose} className="absolute top-6 right-6 text-white/70 hover:text-white bg-zinc-800/50 p-2 rounded-full transition-colors z-50"><X size={32} /></button>
      <img src={src} alt="Full Screen" className="max-w-full max-h-full object-contain rounded shadow-2xl border border-zinc-800" onClick={(e) => e.stopPropagation()} />
    </div>
  );
};

// Enhanced Professional Contact Form
const ContactForm = () => {
  const [status, setStatus] = useState('idle');
  const handleSubmit = (e) => {
    e.preventDefault();
    setStatus('submitting');
    setTimeout(() => { setStatus('success'); setTimeout(() => setStatus('idle'), 3000); }, 2000);
  };

  return (
    <form onSubmit={handleSubmit} className="max-w-md mx-auto space-y-4 text-left p-6 rounded-2xl bg-zinc-900/30 border border-zinc-800 hover:border-zinc-700 transition-colors">
      <div>
        <label className="text-xs font-mono text-zinc-500 mb-2 block tracking-wider">PROJECT TYPE</label>
        <div className="relative">
          <select className="w-full bg-black/50 border border-zinc-800 rounded p-3 text-white appearance-none focus:border-blue-500 outline-none transition-colors cursor-pointer">
            <option>Freelance Project</option>
            <option>Full-Time Opportunity</option>
            <option>Collaboration</option>
            <option>Other</option>
          </select>
          <ChevronRight className="absolute right-3 top-3.5 text-zinc-500 rotate-90" size={16} />
        </div>
      </div>
      <div>
        <label className="text-xs font-mono text-blue-400 mb-2 block tracking-wider">YOUR NAME</label>
        <input required type="text" className="w-full bg-black/50 border border-zinc-800 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="John Doe" />
      </div>
      <div>
        <label className="text-xs font-mono text-blue-400 mb-2 block tracking-wider">YOUR EMAIL</label>
        <input required type="email" className="w-full bg-black/50 border border-zinc-800 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="john@example.com" />
      </div>
      <div>
        <label className="text-xs font-mono text-blue-400 mb-2 block tracking-wider">DETAILS</label>
        <textarea required rows="4" className="w-full bg-black/50 border border-zinc-800 rounded p-3 text-white focus:border-blue-500 focus:outline-none transition-colors" placeholder="Tell me about your project needs..."></textarea>
      </div>
      
      <button 
        disabled={status !== 'idle'}
        className={`w-full flex items-center justify-center gap-2 font-bold py-3.5 rounded-lg transition-all duration-300 ${status === 'success' ? 'bg-green-600 text-white cursor-default' : 'bg-blue-600 hover:bg-blue-500 text-white hover:shadow-[0_0_20px_rgba(37,99,235,0.4)]'}`}
      >
        {status === 'idle' && <><Send size={18} /> SEND INQUIRY</>}
        {status === 'submitting' && <><Loader2 size={18} className="animate-spin" /> SENDING...</>}
        {status === 'success' && <><Check size={18} /> REQUEST SENT</>}
      </button>
    </form>
  );
};

const App = () => {
  const [copied, setCopied] = useState('');
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [lightboxSrc, setLightboxSrc] = useState(null);

  useEffect(() => {
    // --- DYNAMIC TITLE UPDATE ---
    // This sets the browser tab title when the app loads
    document.title = "Avishka D. Rajapaksha | Portfolio";
    
    const handleScroll = () => setShowScrollTop(window.scrollY > 400);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setCopied(type);
    setTimeout(() => setCopied(''), 2000);
  };

  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <div className="min-h-screen selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden bg-[#030303]">
      <Navbar />
      <Lightbox src={lightboxSrc} onClose={() => setLightboxSrc(null)} />

      {/* --- Hero Section --- */}
      <header className="relative max-w-7xl mx-auto px-6 pt-32 pb-20 md:py-40">
        <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[300px] h-[300px] bg-blue-600/20 rounded-full blur-[100px] -z-10 pointer-events-none"></div>
        <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
          <div className="flex-1 text-center md:text-left z-10">
            <div className="inline-block mb-4 px-3 py-1 border border-blue-500/30 rounded-full bg-blue-500/10 backdrop-blur-md">
              <span className="text-xs font-mono text-blue-300 tracking-wider">AVAILABLE FOR PROJECTS</span>
            </div>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 text-cyber leading-tight">
              <span className="block text-white">Avishka D.</span>
              <span className="text-gradient">Rajapaksha</span>
            </h1>
            <h2 className="text-xl md:text-2xl text-zinc-400 mb-8 font-light flex items-center justify-center md:justify-start gap-3 h-8">
              <Terminal size={24} className="text-blue-500" />
              <span className="border-r pr-3 border-zinc-700 mr-2">I am a</span>
              <Typewriter words={["IT Student", "Java Developer", "Database Designer", "Web Developer"]} />
            </h2>
            <p className="text-zinc-300 mb-10 leading-relaxed max-w-lg mx-auto md:mx-0 text-base md:text-lg">
              {personalInfo.about}
            </p>
            <div className="flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start">
              <a href={personalInfo.cvLink} download className="w-full sm:w-auto flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all hover:shadow-[0_0_20px_rgba(37,99,235,0.3)] group"><Download size={20} className="group-hover:animate-bounce" /> Download CV</a>
              {/* Direct WhatsApp Call to Action in Hero */}
              <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noreferrer" className="w-full sm:w-auto flex items-center justify-center gap-2 bg-zinc-900/50 hover:bg-green-600/10 hover:text-green-400 hover:border-green-500 text-white px-8 py-3.5 rounded-lg font-medium transition-all border border-zinc-700 backdrop-blur-sm group">
                <MessageCircle size={20} className="group-hover:scale-110 transition-transform" /> Quick Chat
              </a>
            </div>
          </div>
          <div className="relative z-10">
            <div className="relative w-64 h-64 md:w-80 md:h-80 rounded-full p-2 border border-zinc-700/50 bg-zinc-900/30 backdrop-blur-sm">
              <div className="w-full h-full rounded-full overflow-hidden border-2 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.2)]">
                <img src={personalInfo.profileImage} alt="Profile" className="w-full h-full object-cover hover:scale-110 transition-transform duration-700" />
              </div>
              {/* "System Online" Status Badge */}
              <div className="absolute -bottom-6 -left-6 bg-[#0a0a0a] border border-zinc-800 p-4 rounded-xl shadow-2xl flex items-center gap-3 animate-bounce-slow">
                <div className="relative">
                  <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                  <div className="absolute top-0 left-0 w-3 h-3 bg-green-500 rounded-full animate-ping opacity-75"></div>
                </div>
                <div className="text-xs font-mono text-zinc-400 leading-tight">
                  System Status:<br/><span className="text-white font-bold tracking-wider">ONLINE</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>

      {/* --- Skills Section --- */}
      <section id="skills" className="relative py-24 px-6 bg-[#050505] overflow-hidden">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#1f2937_1px,transparent_1px),linear-gradient(to_bottom,#1f2937_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20 pointer-events-none"></div>
        <div className="max-w-7xl mx-auto relative z-10">
          <h3 className="text-cyber text-2xl mb-12 flex items-center gap-3"><span className="w-8 h-1 bg-blue-600"></span>Technical Arsenal</h3>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
            {skills.map((skill, index) => (
              <div key={index} className="group relative bg-zinc-900/40 border border-zinc-800/50 p-6 rounded-xl flex flex-col items-center justify-center gap-3 transition-all duration-300 hover:border-blue-500/50 hover:bg-zinc-900 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(37,99,235,0.15)]">
                <div className="p-3 bg-black rounded-full border border-zinc-800 text-zinc-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-all duration-300">{skill.icon}</div>
                <span className="font-medium text-sm text-zinc-300 group-hover:text-white tracking-wide text-center">{skill.name}</span>
                <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-12 h-1 bg-blue-500 rounded-full opacity-0 group-hover:opacity-100 blur-[2px] transition-opacity duration-300"></div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Services Section --- */}
      <section id="services" className="py-24 px-6 bg-zinc-950">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
            <h3 className="text-cyber text-3xl flex items-center gap-3"><span className="w-8 h-1 bg-blue-600"></span>What I Can Do For You</h3>
            <p className="text-zinc-500 text-sm md:text-right max-w-md leading-relaxed">Leveraging modern technologies to build scalable, high-performance solutions tailored to your business needs.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => (
              <div key={index} className="group relative p-8 rounded-2xl bg-[#0a0a0a] border border-zinc-800 hover:border-blue-600/40 transition-all duration-500 overflow-hidden">
                <span className="absolute -right-4 -top-8 text-[8rem] font-bold text-zinc-900/50 group-hover:text-zinc-800/50 transition-colors duration-500 select-none pointer-events-none">0{index + 1}</span>
                <div className="relative z-10 flex flex-col h-full">
                  <div className="mb-6 w-12 h-12 flex items-center justify-center bg-blue-900/10 rounded-lg border border-blue-500/20 text-blue-400 group-hover:scale-110 group-hover:bg-blue-600 group-hover:text-white transition-all duration-300">{service.icon}</div>
                  <h4 className="text-xl font-bold text-white mb-4 group-hover:translate-x-1 transition-transform duration-300">{service.title}</h4>
                  <p className="text-zinc-400 text-sm leading-relaxed flex-grow">{service.desc}</p>
                  <div className="mt-6 w-full h-[1px] bg-zinc-800 group-hover:bg-blue-600/50 transition-colors duration-500"></div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Workflow / Process Section (NEW) --- */}
      <section className="py-20 px-6 border-t border-zinc-900 bg-[#030303]">
        <div className="max-w-7xl mx-auto">
          <h3 className="text-cyber text-2xl mb-12 flex items-center gap-3"><span className="w-8 h-1 bg-blue-600"></span>My Workflow</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {workflow.map((step, index) => (
              <div key={index} className="flex flex-col gap-4 p-6 border-l-2 border-zinc-800 hover:border-blue-500 transition-colors pl-6 bg-zinc-900/20">
                <div className="flex items-center gap-3 text-zinc-500 group-hover:text-blue-400">
                  <div className="p-2 bg-black rounded-lg border border-zinc-800 text-blue-500">{step.icon}</div>
                  <span className="font-mono text-xl font-bold text-zinc-700">{step.step}</span>
                </div>
                <h4 className="text-lg font-bold text-white mt-2">{step.title}</h4>
                <p className="text-sm text-zinc-400 leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* --- Projects Section --- */}
      <section id="projects" className="max-w-7xl mx-auto px-6 py-24">
        <h3 className="text-cyber text-3xl md:text-4xl mb-16 flex items-center gap-4"><span className="w-2 h-8 bg-blue-600"></span>Featured Projects</h3>
        <div className="flex flex-col gap-24">
          {projects.map((project, index) => (
            <div key={project.id} className={`flex flex-col lg:flex-row gap-10 lg:gap-16 items-start ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className="w-full lg:w-3/5">
                <ProjectGallery images={project.images} onImageClick={setLightboxSrc} />
              </div>
              <div className="w-full lg:w-2/5 flex flex-col justify-center pt-4">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-cyber text-5xl md:text-6xl font-bold text-zinc-800 select-none">0{index + 1}</span>
                  <div className="h-px bg-zinc-800 flex-1"></div>
                </div>
                <div className="flex flex-wrap items-center justify-between gap-4 mb-3">
                  <h4 className="text-2xl md:text-3xl font-bold text-white group cursor-pointer">
                    <span className="bg-left-bottom bg-gradient-to-r from-blue-500 to-blue-500 bg-[length:0%_2px] bg-no-repeat group-hover:bg-[length:100%_2px] transition-all duration-500 ease-out">{project.title}</span>
                  </h4>
                  {project.link && (
                    <a href={project.link} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-xs font-bold text-zinc-900 bg-blue-500 hover:bg-blue-400 px-3 py-1.5 rounded transition-colors">
                      <ExternalLink size={14} /> {project.link.includes('github') ? 'SOURCE CODE' : 'LIVE DEMO'}
                    </a>
                  )}
                </div>
                <div className="flex items-center gap-2 mb-6">
                  <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                  <span className="text-xs font-mono text-blue-300/80 uppercase tracking-widest border border-blue-900/30 bg-blue-900/10 px-2 py-1 rounded">{project.date}</span>
                </div>
                <p className="text-zinc-400 mb-8 leading-relaxed text-lg border-l-2 border-zinc-800 pl-4">{project.description}</p>
                <div>
                  <h5 className="text-xs font-bold text-zinc-500 mb-4 uppercase tracking-widest font-mono">Built With</h5>
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (<span key={i} className="text-xs font-medium bg-zinc-900 text-zinc-300 px-4 py-2 rounded border border-zinc-800 hover:border-blue-500/50 hover:text-blue-200 transition-colors cursor-default">{t}</span>))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* --- Education Section --- */}
      <section id="education" className="max-w-4xl mx-auto px-6 py-24 bg-[#050505] border-y border-zinc-900">
        <h3 className="text-cyber text-3xl mb-12 flex items-center gap-4"><span className="w-2 h-8 bg-blue-600"></span>Education Path</h3>
        <div className="relative border-l-2 border-zinc-800 ml-3 space-y-12">
          {education.map((edu, index) => (
            <div key={index} className="relative pl-8 group">
              <div className="absolute -left-[9px] top-2 w-4 h-4 rounded-full bg-zinc-900 border-2 border-blue-600 group-hover:scale-125 group-hover:bg-blue-600 transition-all duration-300 shadow-[0_0_10px_rgba(37,99,235,0.5)]"></div>
              <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                <h4 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">{edu.institution}</h4>
                <span className="text-xs font-mono text-blue-300 border border-blue-500/30 px-3 py-1 rounded bg-blue-500/10 mt-2 sm:mt-0 w-fit">{edu.year}</span>
              </div>
              <h5 className="text-zinc-300 mb-3 font-medium text-lg">{edu.degree}</h5>
              <p className="text-zinc-500 text-sm leading-relaxed max-w-2xl">{edu.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- Contact Section --- */}
      <section id="contact" className="py-24 relative">
        <div className="max-w-3xl mx-auto px-6 text-center">
          <h3 className="text-cyber text-3xl mb-6 text-gradient">Ready to Collaborate?</h3>
          <p className="text-zinc-400 mb-10 text-lg">I am currently open to freelance projects and full-time opportunities.</p>
          <ContactForm />
        </div>
      </section>

      {/* --- Footer --- */}
      <footer className="border-t border-zinc-900 bg-[#020202] py-12 relative overflow-hidden">
        <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[500px] h-[200px] bg-blue-900/10 blur-[100px] pointer-events-none"></div>
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-8">
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-blue-600/10 hover:text-blue-400 transition-all duration-300 group" title="LinkedIn"><Linkedin size={24} className="group-hover:scale-110 transition-transform" /></a>
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-blue-600/10 hover:text-blue-400 transition-all duration-300 group" title="GitHub"><Github size={24} className="group-hover:scale-110 transition-transform" /></a>
            <button onClick={() => copyToClipboard(personalInfo.email, 'email')} className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-blue-600/10 hover:text-blue-400 transition-all duration-300 group relative" title="Copy Email">
              {copied === 'email' ? <Check size={24} className="text-green-500" /> : <Mail size={24} className="group-hover:scale-110 transition-transform" />}
              {copied === 'email' && <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded shadow-lg animate-bounce">Copied!</span>}
            </button>
            <button onClick={() => copyToClipboard(personalInfo.phone, 'phone')} className="p-3 rounded-full bg-zinc-900 border border-zinc-800 hover:border-blue-500 hover:bg-blue-600/10 hover:text-blue-400 transition-all duration-300 group relative" title="Copy Phone">
              {copied === 'phone' ? <Check size={24} className="text-green-500" /> : <Phone size={24} className="group-hover:scale-110 transition-transform" />}
              {copied === 'phone' && <span className="absolute -top-10 left-1/2 -translate-x-1/2 bg-green-500 text-black text-xs font-bold px-2 py-1 rounded shadow-lg animate-bounce">Copied!</span>}
            </button>
          </div>
          <p className="text-zinc-600 text-sm font-mono">© {new Date().getFullYear()} {personalInfo.name}. All rights reserved. <span className="text-blue-900 mx-2">|</span> Built with React & Tailwind</p>
        </div>
      </footer>

      {/* Floating Buttons */}
      <div className="fixed bottom-8 right-8 flex flex-col gap-4 z-50">
        <a href={`https://wa.me/${personalInfo.whatsapp}`} target="_blank" rel="noreferrer" className="bg-green-500 hover:bg-green-600 text-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110 flex items-center justify-center group relative" title="Chat on WhatsApp">
          <MessageCircle size={24} />
          {/* Tooltip for WhatsApp */}
          <span className="absolute right-full mr-3 bg-white text-black text-xs font-bold px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">Chat Now</span>
        </a>
        <button onClick={scrollTop} className={`bg-blue-600 hover:bg-blue-500 text-white p-3 rounded-full shadow-lg transition-all duration-300 ${showScrollTop ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'}`}>
          <ArrowUp size={24} />
        </button>
      </div>
    </div>
  );
};

export default App;