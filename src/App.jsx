import React, { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, Mail, MessageCircle, Download, ExternalLink, Code, Palette, Cloud, Brain, Smartphone, Database } from 'lucide-react';

function Portfolio() {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const [imageError, setImageError] = useState(false);

  const roles = [
    'BTech Student in Web & Creative Media',
    'Web Developer & UI/UX Designer',
    'Creative Coder',
    'Cloud Computing Enthusiast',
    'AI & AR/VR Explorer',
    'Full-Stack Developer'
  ];

  // Typewriter effect
  useEffect(() => {
    const currentRole = roles[currentIndex];
    const timeout = setTimeout(() => {
      if (!isDeleting) {
        if (displayedText !== currentRole) {
          setDisplayedText(currentRole.slice(0, displayedText.length + 1));
        } else {
          setTimeout(() => setIsDeleting(true), 2000);
        }
      } else {
        if (displayedText === '') {
          setIsDeleting(false);
          setCurrentIndex((prev) => (prev + 1) % roles.length);
        } else {
          setDisplayedText(displayedText.slice(0, -1));
        }
      }
    }, isDeleting ? 50 : 100);

    return () => clearTimeout(timeout);
  }, [displayedText, currentIndex, isDeleting, roles]);

  // Mouse tracking for parallax effect
  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX - window.innerWidth / 2) / 50,
        y: (e.clientY - window.innerHeight / 2) / 50
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  // Scroll spy for navigation
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'skills', 'projects', 'cv', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Knowledge Tree Portfolio",
      description: "Personal portfolio website showcasing projects, skills, and creative work built using Wix platform with custom design elements.",
      tech: ["Wix", "Web Design", "UI/UX", "Responsive Design"],
      github: "#",
      demo: "https://rpavishkadilhara.wixsite.com/knowledgetree1",
      image: "/api/placeholder/400/250"
    }
  ];

  const tools = [
    { name: "VS Code", icon: Code },
    { name: "Figma", icon: Palette },
    { name: "AWS", icon: Cloud },
    { name: "TensorFlow", icon: Brain },
    { name: "React Native", icon: Smartphone },
    { name: "MongoDB", icon: Database }
  ];

  return (
    <div className="bg-black text-white">
      <style>{`
        @import url('https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css');

        @keyframes float {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(180deg); }
        }
        
        @keyframes wave {
          0%, 100% { transform: rotate(0deg); }
          25% { transform: rotate(20deg); }
          75% { transform: rotate(-10deg); }
        }
        
        @keyframes gradient {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }
        
        .animate-wave {
          animation: wave 2s ease-in-out infinite;
        }
        
        .animate-gradient {
          background-size: 200% 200%;
          animation: gradient 3s ease infinite;
        }
      `}</style>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm border-b border-white/10">
        <div className="container mx-auto px-6 py-4">
          {/* Desktop Navigation */}
          <div className="hidden md:flex space-x-8 justify-center items-center">
            {['Home', 'About', 'Skills', 'Projects', 'CV', 'Contact'].map((item) => (
              <button
                key={item}
                onClick={() => scrollToSection(item.toLowerCase())}
                className={`transition-colors hover:text-white ${
                  activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-400'
                }`}
              >
                {item}
              </button>
            ))}
            <button
              onClick={() => window.open('/R_P_A_D_RAJAPAKSHA_CV.pdf', '_blank')}
              className="px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all"
            >
              Resume
            </button>
          </div>
          
          <div className="flex items-center justify-between md:hidden">
            <div className="text-2xl font-bold">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Avishka D. Rajapaksha
              </span>
            </div>

            {/* Mobile Menu Button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 pb-4 border-t border-white/10">
              <div className="flex flex-col space-y-4 mt-4">
                {['Home', 'About', 'Skills', 'Projects', 'CV', 'Contact'].map((item) => (
                  <button
                    key={item}
                    onClick={() => scrollToSection(item.toLowerCase())}
                    className={`text-left transition-colors hover:text-white ${
                      activeSection === item.toLowerCase() ? 'text-white' : 'text-gray-400'
                    }`}
                  >
                    {item}
                  </button>
                ))}
                <button
                  onClick={() => window.open('/R_P_A_D_RAJAPAKSHA_CV.pdf', '_blank')}
                  className="text-left px-4 py-2 border border-white/30 rounded-full hover:bg-white/10 transition-all w-fit"
                >
                  Resume
                </button>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Home Section */}
      <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-black via-gray-900 to-black pt-20">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-1/2 -left-1/2 w-full h-full bg-gradient-to-r from-white/10 to-gray-300/10 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute -bottom-1/2 -right-1/2 w-full h-full bg-gradient-to-l from-gray-400/10 to-white/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
          
          {/* Floating particles */}
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-white/20 rounded-full animate-float"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                animationDelay: `${Math.random() * 5}s`,
                animationDuration: `${3 + Math.random() * 4}s`
              }}
            ></div>
          ))}
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center justify-between min-h-screen py-20">
            {/* Text Content */}
            <div className="flex-1 text-center lg:text-left mb-12 lg:mb-0">
              <div className="space-y-6">
                {/* Greeting with wave animation */}
                <div className="text-lg text-gray-400 font-medium">
                  <span className="inline-block animate-wave">👋</span> Hello, I'm
                </div>
                
                {/* Name with gradient text */}
                <h1 className="text-5xl lg:text-7xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent animate-gradient">
                    Avishka D. Rajapaksha
                  </span>
                </h1>
                
                {/* Typewriter role */}
                <div className="h-16 flex items-center justify-center lg:justify-start">
                  <h2 className="text-xl lg:text-2xl text-gray-300 font-light">
                    {displayedText}
                    <span className="animate-pulse text-white">|</span>
                  </h2>
                </div>
                
                {/* Description */}
                <p className="text-lg text-gray-400 max-w-lg leading-relaxed">
                  Passionate BTech student specializing in 
                  <span className="text-white font-medium"> Web & Creative Media </span>
                  at Faculty of IT, University of Vocational Technology (UoVT). Building modern, responsive websites while exploring 
                  <span className="text-gray-300 font-medium"> AI, AR/VR, and Creative Coding</span>.
                </p>
                
                {/* Skills tags */}
                <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                  {['React', 'UI/UX Design', 'JavaScript', 'Python', 'Firebase', 'Figma'].map((skill, index) => (
                    <span
                      key={skill}
                      className="px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white/90 border border-white/30 hover:bg-white/20 transition-all duration-300 hover:scale-105"
                      style={{ animationDelay: `${index * 0.1}s` }}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
                
                {/* CTA Buttons */}
                <div className="flex gap-4 justify-center lg:justify-start pt-4">
                  <button
                    onClick={() => scrollToSection('about')}
                    className="group px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-white/25"
                  >
                    <span className="flex items-center gap-2">
                      Learn More About Me
                      <ExternalLink className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </button>
                  
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="px-8 py-4 border-2 border-white/50 rounded-full text-white font-medium hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105"
                  >
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
            
            {/* Hero Image */}
            <div className="flex-1 flex justify-center lg:justify-end">
              <div 
                className="relative group"
                style={{
                  transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`
                }}
              >
                {/* Glowing background */}
                <div className="absolute inset-0 bg-gradient-to-r from-white/20 to-gray-300/20 rounded-full blur-2xl group-hover:blur-3xl transition-all duration-500 animate-pulse"></div>
                
                {/* Image container */}
                <div className="relative w-80 h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white/30 group-hover:border-white/60 transition-all duration-300 hover:scale-105">
                  {!imageError ? (
                    <img 
                      src="/my.jpg.jpeg"
                      alt="Profile photo of Avishka D. Rajapaksha, a BTech student in Web & Creative Media"
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={() => {
                        setImageError(true);
                      }}
                      loading="lazy"
                    />
                  ) : (
                    /* Stylish placeholder when image fails to load */
                    <div className="w-full h-full bg-gradient-to-br from-gray-700 via-gray-600 to-gray-800 flex flex-col items-center justify-center relative">
                      {/* Profile icon */}
                      <div className="text-8xl text-white/80 mb-4 animate-pulse">👨‍💻</div>
                      
                      {/* Text overlay */}
                      <div className="text-center">
                        <p className="text-white/90 font-semibold text-lg">Avishka D. Rajapaksha</p>
                        <p className="text-white/60 text-sm mt-1">BTech Student</p>
                        <p className="text-white/40 text-xs mt-2">Professional Photo</p>
                      </div>
                      
                      {/* Floating code symbols */}
                      <div className="absolute top-4 left-4 text-white/30 text-2xl animate-bounce">{ }</div>
                      <div className="absolute bottom-4 right-4 text-white/30 text-xl animate-bounce delay-500">&lt;/&gt;</div>
                      <div className="absolute top-4 right-4 text-white/30 text-lg animate-bounce delay-300">💻</div>
                    </div>
                  )}
                  
                  {/* Overlay gradient */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
                
                {/* Floating elements around image */}
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-white/60 rounded-full animate-bounce delay-300"></div>
                <div className="absolute -bottom-4 -right-4 w-6 h-6 bg-gray-300/60 rounded-full animate-bounce delay-700"></div>
                <div className="absolute top-1/4 -right-8 w-4 h-4 bg-gray-400/60 rounded-full animate-bounce delay-500"></div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
            <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                About Me
              </span>
            </h2>
            
            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <p className="text-gray-300 text-lg leading-relaxed">
                  Hi, I'm Avishka D. Rajapaksha — currently studying full-time for a Bachelor of Technology (BTech) in Web and Creative Media at the Faculty of Information Technology, University of Vocational Technology (UoVT).
                  I am also pursuing the Higher National Diploma in Information Technology (HNDIT) part-time at SLIATE Gampaha.
                </p>

                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-semibold text-white mb-4">🎓 Education</h3>
                    <div className="bg-white/5 rounded-lg p-4">
                      <p className="text-white font-medium">Bachelor of Technology (BTech)</p>
                      <p className="text-gray-300">Major: Web and Creative Media</p>
                      <p className="text-gray-400">Faculty of IT, University of Vocational Technology (UoVT)</p>
                    </div>
                    <div className="bg-white/5 rounded-lg p-4 mt-4">
                      <p className="text-white font-medium">Higher National Diploma in Information Technology</p>
                      <p className="text-gray-400">at SLIATE Gampaha (Part Time)</p>
                    </div>
                  </div>
                </div>

                <div className="space-y-4">
                  <h3 className="text-xl font-semibold text-white">🧩 Interests & Goals</h3>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Modern Web Development', 
                      'UI/UX Design', 
                      'Creative Coding', 
                      'Cloud Computing', 
                      'AI & Machine Learning',
                      'AR/VR Development',
                      'Motion Design',
                      'Project Management'
                    ].map((interest) => (
                      <span key={interest} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <h3 className="text-xl font-semibold text-white">🔧 Core IT Skills</h3>
                <div className="grid grid-cols-1 gap-4">
                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Programming Languages</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "JavaScript", icon: Code },
                        { name: "Python", icon: Code },
                        { name: "Java", icon: Code },
                        { name: "C Programming", icon: Code }
                      ].map((tech, index) => (
                        <div 
                          key={tech.name}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <tech.icon className="w-5 h-5 text-white" />
                          <span className="text-gray-300 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Design & Creative Tools</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Figma", icon: Palette },
                        { name: "Adobe XD", icon: Palette },
                        { name: "Photoshop", icon: Palette },
                        { name: "Illustrator", icon: Palette }
                      ].map((tool, index) => (
                        <div 
                          key={tool.name}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <tool.icon className="w-5 h-5 text-white" />
                          <span className="text-gray-300 text-sm">{tool.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="space-y-3">
                    <h4 className="text-white font-medium">Cloud & Database</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: "Firebase", icon: Cloud },
                        { name: "AWS Basics", icon: Cloud },
                        { name: "MySQL", icon: Database },
                        { name: "SQL Server", icon: Database }
                      ].map((tech, index) => (
                        <div 
                          key={tech.name}
                          className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <tech.icon className="w-5 h-5 text-white" />
                          <span className="text-gray-300 text-sm">{tech.name}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                My Skills
              </span>
            </h2>
            
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Core Skills */}
              <div className="space-y-8">
                <div>
                  <h3 className="text-2xl font-semibold text-white mb-6">💼 Core Skills</h3>
                  <div className="grid gap-4">
                    {[
                      'UI/UX Design',
                      'Programming (C, Java, Python, JavaScript)',
                      'Databases',
                      'OOP & Data Structures',
                      'Web Development'
                    ].map((skill, index) => (
                      <div 
                        key={skill}
                        className="flex items-center gap-3 p-4 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <div className="w-2 h-2 bg-white rounded-full"></div>
                        <span className="text-gray-300">{skill}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-white mb-4">⏱️ Experience Level</h3>
                  <div className="bg-white/5 rounded-lg p-6">
                    <div className="flex items-center gap-3 mb-2">
                      <Code className="w-5 h-5 text-white" />
                      <span className="text-white font-medium">Programming Experience</span>
                    </div>
                    <p className="text-gray-300">More than 2+ years</p>
                  </div>
                </div>
              </div>

              {/* Technical Proficiency */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold text-white mb-6">📊 Technical Proficiency</h3>
                
                <div className="space-y-6">
                  {/* C# .NET Framework */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">C# .NET Framework</span>
                      <span className="text-gray-400 text-sm">50%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-white to-gray-400 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '50%' }}></div>
                    </div>
                  </div>

                  {/* Java */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Java</span>
                      <span className="text-gray-400 text-sm">70%</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-white to-gray-300 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '70%' }}></div>
                    </div>
                  </div>

                  {/* Python */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">Python</span>
                      <span className="text-gray-400 text-sm">Learning</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-gray-600 to-gray-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '15%' }}></div>
                    </div>
                    <p className="text-gray-500 text-xs">Currently learning and exploring</p>
                  </div>

                  {/* PHP */}
                  <div className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-white font-medium">PHP</span>
                      <span className="text-gray-400 text-sm">Learning</span>
                    </div>
                    <div className="w-full bg-gray-800 rounded-full h-2">
                      <div className="bg-gradient-to-r from-gray-600 to-gray-500 h-2 rounded-full transition-all duration-1000 ease-out" style={{ width: '10%' }}></div>
                    </div>
                    <p className="text-gray-500 text-xs">Getting started with basics</p>
                  </div>

                  {/* Additional Skills */}
                  <div className="mt-8 space-y-4">
                    <h4 className="text-lg font-semibold text-white">Other Technologies</h4>
                    <div className="grid grid-cols-2 gap-3">
                      {[
                        { name: 'JavaScript', level: '65%' },
                        { name: 'React', level: '60%' },
                        { name: 'HTML/CSS', level: '85%' },
                        { name: 'MySQL', level: '55%' },
                        { name: 'Firebase', level: '45%' },
                        { name: 'Git/GitHub', level: '70%' }
                      ].map((tech, index) => (
                        <div 
                          key={tech.name}
                          className="bg-white/5 rounded-lg p-3 hover:bg-white/10 transition-all duration-300"
                          style={{ animationDelay: `${index * 0.1}s` }}
                        >
                          <div className="flex justify-between items-center mb-1">
                            <span className="text-sm text-gray-300">{tech.name}</span>
                            <span className="text-xs text-gray-500">{tech.level}</span>
                          </div>
                          <div className="w-full bg-gray-800 rounded-full h-1">
                            <div 
                              className="bg-gradient-to-r from-white/70 to-gray-400/70 h-1 rounded-full transition-all duration-1000 ease-out" 
                              style={{ width: tech.level }}
                            ></div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Skills Summary */}
            <div className="mt-12 text-center">
              <div className="bg-white/5 rounded-lg p-6 max-w-3xl mx-auto">
                <h4 className="text-xl font-semibold text-white mb-4">🎯 Current Focus</h4>
                <p className="text-gray-300 leading-relaxed">
                  Strengthening my foundation in <strong>Java</strong> and <strong>C# .NET Framework</strong> while 
                  exploring <strong>Python</strong> and <strong>PHP</strong> for full-stack development. 
                  Passionate about combining <strong>UI/UX design</strong> with <strong>modern web technologies</strong> 
                  to create exceptional user experiences.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-12">
            <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
              My Projects
            </span>
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div 
                key={project.title}
                className="bg-gray-900/50 rounded-lg overflow-hidden hover:scale-105 transition-all duration-300 hover:shadow-xl hover:shadow-white/10"
                style={{ animationDelay: `${index * 0.2}s` }}
              >
                <div className="h-48 bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center">
                  <Code className="w-16 h-16 text-gray-400" />
                </div>
                
                <div className="p-6 space-y-4">
                  <h3 className="text-xl font-semibold text-white">{project.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed">{project.description}</p>
                  
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((tech) => (
                      <span key={tech} className="px-2 py-1 bg-white/10 rounded text-xs text-gray-300">
                        {tech}
                      </span>
                    ))}
                  </div>
                  
                  <div className="flex gap-4 pt-2">
                    <a 
                      href={project.github}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <Github className="w-4 h-4" />
                      Code
                    </a>
                    <a 
                      href={project.demo}
                      className="flex items-center gap-2 text-gray-300 hover:text-white transition-colors"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Demo
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CV Section */}
      <section id="cv" className="py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-4xl font-bold text-center mb-12">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Curriculum Vitae
              </span>
            </h2>

            {/* CV Header */}
            <div className="bg-gray-900/50 rounded-lg p-8 mb-8">
              <div className="text-center mb-8">
                <h3 className="text-3xl font-bold text-white mb-2">R.P.A.D. Rajapaksha</h3>
                <p className="text-xl text-gray-300 mb-4">BTech Student in Web & Creative Media</p>
                <div className="flex flex-wrap justify-center gap-4 text-sm text-gray-400">
                  <span>📧 rpavishkadilhara@gmail.com</span>
                  <span>📱 +94 75 916 4843</span>
                  <span>🌐 GitHub: avishka-d-rajapaksha</span>
                </div>
              </div>
            </div>

            {/* Education */}
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                🎓 Education
              </h3>
              <div className="space-y-6">
                <div className="border-l-4 border-white/30 pl-6">
                  <h4 className="text-xl font-semibold text-white">Bachelor of Technology (BTech)</h4>
                  <p className="text-gray-300 font-medium">Major: Web and Creative Media</p>
                  <p className="text-gray-400">Faculty of Information Technology</p>
                  <p className="text-gray-400">University of Vocational Technology (UoVT)</p>
                  <p className="text-gray-500 text-sm mt-2">Current | Full-time</p>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-6">
                  <h4 className="text-xl font-semibold text-white">Higher National Diploma in Information Technology</h4>
                  <p className="text-gray-300 font-medium">HNDIT</p>
                  <p className="text-gray-400">SLIATE Gampaha</p>
                  <p className="text-gray-500 text-sm mt-2">Current | Part-time</p>
                </div>
              </div>
            </div>

            {/* Technical Skills */}
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                💻 Technical Skills
              </h3>
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Programming Languages</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Java (Intermediate)</li>
                    <li>• C# .NET Framework (Intermediate)</li>
                    <li>• JavaScript (Intermediate)</li>
                    <li>• C Programming (Basic)</li>
                    <li>• Python (Learning)</li>
                    <li>• PHP (Learning)</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Web Technologies</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• HTML5 & CSS3</li>
                    <li>• React.js</li>
                    <li>• Responsive Web Design</li>
                    <li>• UI/UX Design</li>
                    <li>• Frontend Development</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Design Tools</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Figma</li>
                    <li>• Adobe XD</li>
                    <li>• Adobe Photoshop</li>
                    <li>• Adobe Illustrator</li>
                  </ul>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-3">Database & Cloud</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• MySQL</li>
                    <li>• SQL Server</li>
                    <li>• Firebase</li>
                    <li>• AWS (Basic)</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Core Competencies */}
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                🎯 Core Competencies
              </h3>
              <div className="grid md:grid-cols-2 gap-4">
                {[
                  'Object-Oriented Programming (OOP)',
                  'Data Structures & Algorithms',
                  'Database Design & Management',
                  'User Interface Design',
                  'User Experience (UX) Design',
                  'Web Development',
                  'Creative Problem Solving',
                  'Project Management',
                  'Version Control (Git/GitHub)',
                  'Agile Development Methodologies'
                ].map((skill, index) => (
                  <div 
                    key={skill}
                    className="flex items-center gap-3 p-3 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300"
                    style={{ animationDelay: `${index * 0.05}s` }}
                  >
                    <div className="w-2 h-2 bg-white rounded-full"></div>
                    <span className="text-gray-300 text-sm">{skill}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Projects & Portfolio */}
            <div className="bg-white/5 rounded-lg p-6 mb-6">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                🚀 Projects & Portfolio
              </h3>
              <div className="space-y-4">
                <div className="border-l-4 border-white/30 pl-6">
                  <h4 className="text-lg font-semibold text-white">Knowledge Tree Portfolio</h4>
                  <p className="text-gray-300 mb-2">Personal portfolio website showcasing projects, skills, and creative work</p>
                  <p className="text-gray-400 text-sm mb-2">Technologies: Wix Platform, Custom Design, Responsive Layout</p>
                  <a 
                    href="https://rpavishkadilhara.wixsite.com/knowledgetree1" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white text-sm transition-colors"
                  >
                    🌐 View Live Portfolio
                  </a>
                </div>
                
                <div className="border-l-4 border-gray-500 pl-6">
                  <h4 className="text-lg font-semibold text-white">Interactive React Portfolio</h4>
                  <p className="text-gray-300 mb-2">Modern, responsive portfolio built with React and advanced animations</p>
                  <p className="text-gray-400 text-sm">Technologies: React, JavaScript, Tailwind CSS, Lucide Icons</p>
                </div>
              </div>
            </div>

            {/* Interests & Goals */}
            <div className="bg-white/5 rounded-lg p-6 mb-8">
              <h3 className="text-2xl font-semibold text-white mb-6 flex items-center gap-3">
                🎯 Professional Interests & Goals
              </h3>
              <div className="space-y-4">
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Current Interests</h4>
                  <div className="flex flex-wrap gap-2">
                    {[
                      'Modern Web Development',
                      'UI/UX Design',
                      'Creative Coding',
                      'Cloud Computing',
                      'AI & Machine Learning',
                      'AR/VR Development',
                      'Motion Design'
                    ].map((interest) => (
                      <span key={interest} className="px-3 py-1 bg-white/10 rounded-full text-sm text-gray-300">
                        {interest}
                      </span>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h4 className="text-lg font-semibold text-white mb-2">Career Goals</h4>
                  <ul className="space-y-2 text-gray-300">
                    <li>• Develop expertise in full-stack web development</li>
                    <li>• Master modern JavaScript frameworks and libraries</li>
                    <li>• Build innovative web applications with excellent UX</li>
                    <li>• Contribute to open-source projects</li>
                    <li>• Explore emerging technologies like AI and AR/VR</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Download CV Button */}
            <div className="text-center">
              <button
                onClick={() => window.open('/R_P_A_D_RAJAPAKSHA_CV.pdf', '_blank')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Full CV (PDF)
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold mb-8">
              <span className="bg-gradient-to-r from-white via-gray-300 to-gray-500 bg-clip-text text-transparent">
                Get In Touch
              </span>
            </h2>
            
            <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities, creative projects, or just having a chat about technology. 
              Feel free to reach out through any of the channels below!
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              <a 
                href="https://github.com/avishka-d-rajapaksha"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Github className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">GitHub</h3>
                <p className="text-gray-400 text-sm">@avishka-d-rajapaksha</p>
              </a>
              
              <a 
                href="https://www.linkedin.com/in/avishka-d-rajapaksha-16b761300"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Linkedin className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">LinkedIn</h3>
                <p className="text-gray-400 text-sm">Connect professionally</p>
              </a>
              
              <a 
                href="mailto:rpavishkadilhara@gmail.com"
                className="group p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <Mail className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">Email</h3>
                <p className="text-gray-400 text-sm">rpavishkadilhara@gmail.com</p>
              </a>
              
              <a 
                href="https://wa.me/94759164843"
                target="_blank"
                rel="noopener noreferrer"
                className="group p-6 bg-white/5 rounded-lg hover:bg-white/10 transition-all duration-300 hover:scale-105"
              >
                <MessageCircle className="w-8 h-8 text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-white font-semibold mb-2">WhatsApp</h3>
                <p className="text-gray-400 text-sm">Quick chat</p>
              </a>
            </div>
            
            <div className="mt-12 flex gap-4 justify-center">
              <button
                onClick={() => window.open('/R_P_A_D_RAJAPAKSHA_CV.pdf', '_blank')}
                className="inline-flex items-center gap-3 px-8 py-4 bg-white text-black rounded-full font-medium hover:bg-gray-200 transition-all duration-300 hover:scale-105"
              >
                <Download className="w-5 h-5" />
                Download Resume
              </button>
              
              <a
                href="https://rpavishkadilhara.wixsite.com/knowledgetree1"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 px-8 py-4 border-2 border-white/50 rounded-full text-white font-medium hover:bg-white/10 hover:border-white transition-all duration-300 hover:scale-105"
              >
                <ExternalLink className="w-5 h-5" />
                Wix Portfolio
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/10">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-400">
            © 2024 Avishka D. Rajapaksha. Built with React
          </p>
          <p className="text-gray-500 text-sm mt-2">
            BTech Student in Web & Creative Media | Faculty of IT, University of Vocational Technology (UoVT)
          </p>
        </div>
      </footer>
    </div>
  );
}

export default Portfolio;