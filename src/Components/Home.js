import React, { useState, useEffect } from 'react';
import "../Styles/ModernStyle.css";

import cv from "../images/chokwalakishan.pdf";

// Project images (keeping existing imports for now)
import n8n from "../images/n8n.png"
import n8n2 from "../images/n8n2.PNG"
import n8n3 from "../images/n8n3.PNG"
import ai from "../images/aigames.PNG"
import ai2 from "../images/aigames2.PNG"
import ai3 from "../images/aigames3.PNG"
import two from "../images/netflix.PNG"
import two2 from "../images/netflix2.png"
import two3 from "../images/netflix3.png"
import three from "../images/ecom.PNG"
import three2 from "../images/ecom2.PNG"
import three3 from "../images/ecom3.PNG"
import four from "../images/wallpaper.PNG"
import four2 from "../images/wallpaper2.PNG"
import four3 from "../images/wallpaper3.PNG"
import five from "../images/weather.PNG"
import five2 from "../images/weather2.PNG"
import five3 from "../images/weather3.PNG"
import six from "../images/space.PNG"
import six2 from "../images/space2.PNG"
import six3 from "../images/space3.PNG"
import seven from "../images/tourism.PNG"
import seven2 from "../images/tourism2.PNG"
import seven3 from "../images/tourism3.PNG"
import eight from "../images/furniture.PNG"
import eight2 from "../images/furniture2.PNG"
import eight3 from "../images/furniture3.PNG"
import nine from "../images/coffe.PNG"
import nine2 from "../images/coffe2.PNG"
import nine3 from "../images/coffe3.PNG"
import ten from "../images/Home.PNG"
import ten2 from "../images/quiz.PNG"
import ten3 from "../images/quiz2.PNG"

export default function Home() {
  const [activeSection, setActiveSection] = useState('about');
  const [modalImages, setModalImages] = useState([]);

  // Intersection Observer for scroll animations
  useEffect(() => {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('animate-in-view');
        }
      });
    }, observerOptions);

    // Observe all certificate cards and other animated elements
    const certificateCards = document.querySelectorAll('.certificate-card');
    const animatedElements = document.querySelectorAll('.animate-on-scroll');
    
    certificateCards.forEach(card => observer.observe(card));
    animatedElements.forEach(element => observer.observe(element));

    return () => observer.disconnect();
  }, [activeSection]);

  const openModal = (images) => {
    setModalImages(images);
  };

  const projects = [
    {
      title: "Telegram ChatBot",
      description: "Built an AI-powered chatbot using n8n and AI Agents that handles conversations, generates images, and automates intelligent workflows end-to-end.",
      images: [n8n, n8n2, n8n3],
      tech: ["n8n Automation", "AI Agent", "Telegram bot",]
    },
    {
      title: "AI Games",
      description: "A scalable web platform for AI-powered browser games, starting with Tic Tac Toe and designed to grow into a multi-game AI experience.",
      images: [ai, ai2, ai3],
      tech: ["next js", "Javascript", "CSS3", "python"]
    },
    {
      title: "Netflix Clone",
      description: "A modern streaming platform replica with user authentication, movie browsing, and responsive design.",
      images: [two, two2, two3],
      tech: ["HTML5", "Javascript", "Bootstrap 5", "CSS3"]
    },
    {
      title: "E-Commerce Platform",
      description: "Full-featured online shopping platform with cart functionality, payment integration, and admin panel.",
      images: [three, three2, three3],
      tech: ["php", "javascript/jQuery", "sql", "Bootstrap 5","CSS3"]
    },
    {
      title: "Wallpaper Download Hub",
      description: "Creative platform for downloading high-quality wallpapers with search and categorization features.",
      images: [four, four2, four3],
      tech: ["HTML5", "CSS3", "JavaScript", "PHP"]
    },
    {
      title: "Weather Dashboard",
      description: "Real-time weather application with location-based forecasts and interactive weather maps.",
      images: [five, five2, five3],
      tech: ["React", "Weather API", "Chart.js", "CSS3"]
    },
    {
      title: "Space Exploration Website",
      description: "Educational platform showcasing space missions, astronomy facts, and interactive content.",
      images: [six, six2, six3],
      tech: ["HTML5", "CSS3", "JavaScript", "API Integration"]
    },
    {
      title: "Tourism Website",
      description: "Travel booking platform with destination guides, booking system, and user reviews.",
      images: [seven, seven2, seven3],
      tech: ["React", "Node.js", "MongoDB", "Express", "Payment Gateway"]
    },
    {
      title: "Furniture Store",
      description: "Modern e-commerce solution for furniture with 3D product views and AR integration.",
      images: [eight, eight2, eight3],
      tech: ["php", "Javascript", "Node.js", "MySQL"]
    },
    {
      title: "Coffee Shop Website",
      description: "Boutique coffee shop website with online ordering, location finder, and loyalty program.",
      images: [nine, nine2, nine3],
      tech: ["HTML5", "CSS3", "sql", "JavaScript", "PHP"]
    },
    {
      title: "Quiz Web Application",
      description: "Interactive quiz platform with real-time scoring, leaderboards, and admin management.",
      images: [ten, ten2, ten3],
      tech: ["React", "Node.js", "Express", "MongoDB"]
    },
  ];

  const skillCategories = [
    {
      title: "Frontend Development",
      skills: [
        { name: "HTML5", level: 90 },
        { name: "CSS3", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "React.js", level: 82 },
        { name: "Bootstrap", level: 80 }
      ]
    },
    {
      title: "Backend & Languages",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 85 },
        { name: "PHP", level: 78 },
        { name: "C/C++", level: 70 }
      ]
    },
    {
      title: "Database Technologies",
      skills: [
        { name: "MongoDB", level: 80 },
        { name: "MySQL", level: 85 },
        { name: "SQLite", level: 75 }
      ]
    },
    {
      title: "Workflow & AI Tools",
      isNew: true,
      skills: [
        { name: "n8n Automation", level: 88, featured: true },
        { name: "Chatbot Development", level: 85, featured: true },
        { name: "AI Integration", level: 80 },
        { name: "Workflow Optimization", level: 82 }
      ]
    }
  ];

  const personalSkills = [
    { name: "Communication", level: 78 },
    { name: "Team Collaboration", level: 90 },
    { name: "Problem Solving", level: 88 },
    { name: "Self Motivation", level: 85 }
  ];

  const certificates = [
    {
      title: "Large Language Models",
      issuer: "Google Cloud",
      year: "2025",
      icon: "🧠",
      color: "from-blue-500 to-purple-600",
      description: "Advanced certification in LLM architecture, fine-tuning, and deployment strategies."
    },
    {
      title: "n8n Workflow Automation",
      issuer: "SkillUp",
      year: "2025", 
      icon: "⚡",
      color: "from-green-500 to-teal-600",
      description: "Expert-level automation workflows, API integrations, and process optimization."
    },
    {
      title: "Course on Computer Concepts",
      issuer: "Goverment of India",
      year: "2022",
      icon: "🚀",
      color: "from-purple-500 to-pink-600",
      description: "Fundamental computer literacy certification covering essential IT skills and concepts."
    }
  ];

  return (
    <>
      <div className="modern-portfolio">
        {/* Hero Section */}
        <section className="hero-section">
          <div className="hero-container">
            <div className="profile-section animate-fade-left">
              <div className="profile-image-container">
                <img src="https://customer-assets.emergentagent.com/job_portfolio-refresh-6/artifacts/5ofr0762_kishan1.jpg" alt="Kishan Chokwala" className="profile-image" />
                <div className="profile-border-animation"></div>
              </div>
              <div className="profile-info">
                <h1 className="profile-name">Kishan Chokwala</h1>
                <p className="profile-title">Full Stack Developer & AI Enthusiast</p>
                <div className="social-links">
                  <a href="https://www.facebook.com/Kishuu2/" className="social-link facebook" aria-label="Facebook">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951"/>
                    </svg>
                  </a>
                  <a href="https://x.com/Kishuu_2" className="social-link twitter" aria-label="Twitter">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M12.6.75h2.454l-5.36 6.142L16 15.25h-4.937l-3.867-5.07-4.425 5.07H.316l5.733-6.57L0 .75h5.063l3.495 4.633L12.601.75Zm-.86 13.028h1.36L4.323 2.145H2.865z"/>
                    </svg>
                  </a>
                  <a href="https://www.instagram.com/kishuu_2/" className="social-link instagram" aria-label="Instagram">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.9 3.9 0 0 0-1.417.923A3.9 3.9 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.9 3.9 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.9 3.9 0 0 0-.923-1.417A3.9 3.9 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599s.453.546.598.92c.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.5 2.5 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.5 2.5 0 0 1-.92-.598 2.5 2.5 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233s.008-2.388.046-3.231c.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92s.546-.453.92-.598c.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92m-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217m0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334"/>
                    </svg>
                  </a>
                  <a href="https://github.com/kishuu2" className="social-link github" aria-label="GitHub">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27s1.36.09 2 .27c1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.01 8.01 0 0 0 16 8c0-4.42-3.58-8-8-8"/>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
            
            <div className="hero-content animate-fade-right">
              <div className="hero-text">
                <h2 className="hero-title">Crafting Digital Excellence</h2>
                <p className="hero-description">
                  Passionate Full Stack Developer specializing in modern web technologies, AI integration, and automation workflows. 
                  Currently pursuing M.Sc. in Artificial Intelligence & Machine Learning to stay at the forefront of technology.
                </p>
                <div className="hero-stats">
                  <div className="stat-item">
                    <span className="stat-number">9+</span>
                    <span className="stat-label">Projects Completed</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">3+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                  <div className="stat-item">
                    <span className="stat-number">15+</span>
                    <span className="stat-label">Technologies Mastered</span>
                  </div>
                </div>
                <div className="hero-actions">
                  <a href={cv} className="btn btn-primary" download={cv}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                      <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"/>
                      <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"/>
                    </svg>
                    Download CV
                  </a>
                  <button className="btn btn-outline" onClick={() => setActiveSection('contact')}>
                    Get In Touch
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Navigation */}
        <nav className="portfolio-nav">
          <div className="nav-container">
            {[
              { id: 'about', label: 'About' },
              { id: 'skills', label: 'Skills' },
              { id: 'projects', label: 'Projects' },
              { id: 'certificates', label: 'Certificates' },
              { id: 'education', label: 'Education' },
              { id: 'contact', label: 'Contact' }
            ].map((item) => (
              <button
                key={item.id}
                className={`nav-item ${activeSection === item.id ? 'active' : ''}`}
                onClick={() => setActiveSection(item.id)}
              >
                <span className="nav-label">{item.label}</span>
              </button>
            ))}
          </div>
        </nav>

        {/* Content Sections */}
        <main className="portfolio-content">
          {/* About Section */}
          {activeSection === 'about' && (
            <section className="content-section animate-fade-up">
              <div className="section-header">
                <h2 className="section-title">About Me</h2>
                <p className="section-subtitle">Get to know more about my journey and passion</p>
              </div>
              
              <div className="about-content">
                <div className="about-text">
                  <h3>Innovating Through Code</h3>
                  <p>
                    Hi! I'm Kishan Chokwala, a passionate Full Stack Developer based in Surat, India. 
                    I specialize in creating modern, responsive web applications that solve real-world problems.
                  </p>
                  <p>
                    With expertise spanning frontend technologies like React and modern CSS frameworks, 
                    to backend development with Node.js and Python, I bring ideas to life through clean, 
                    efficient code.
                  </p>
                  <p>
                    Currently pursuing my M.Sc. in Artificial Intelligence & Machine Learning, I'm at the 
                    forefront of integrating AI capabilities into web applications, specializing in automation 
                    workflows and intelligent chatbot development.
                  </p>
                  
                  <div className="personal-info animate-on-scroll">
                    <div className="info-grid">
                      <div className="info-item">
                        <strong>Name:</strong>
                        <span>Chokwala Kishan Pradipkumar</span>
                      </div>
                      <div className="info-item">
                        <strong>Birthday:</strong>
                        <span>02 November 2004</span>
                      </div>
                      <div className="info-item">
                        <strong>Location:</strong>
                        <span>Surat, Gujarat, India</span>
                      </div>
                      <div className="info-item">
                        <strong>Email:</strong>
                        <span>chokwalakishan@gmail.com</span>
                      </div>
                      <div className="info-item">
                        <strong>Phone:</strong>
                        <span>+91 6351119763</span>
                      </div>
                      <div className="info-item">
                        <strong>Nationality:</strong>
                        <span>Indian</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Skills Section */}
          {activeSection === 'skills' && (
            <section className="content-section animate-fade-up">
              <div className="section-header">
                <h2 className="section-title">Skills & Expertise</h2>
                <p className="section-subtitle">Technologies and tools I work with</p>
              </div>
              
              <div className="skills-content">
                {/* Personal Skills */}
                <div className="skills-category">
                  <h3>Personal Skills</h3>
                  <div className="personal-skills-grid">
                    {personalSkills.map((skill, index) => (
                      <div key={index} className="personal-skill-card animate-on-scroll">
                        <h4>{skill.name}</h4>
                        <div className="skill-progress">
                          <div 
                            className="skill-progress-bar" 
                            style={{ '--progress': `${skill.level}%` }}
                          >
                            <span className="skill-percentage">{skill.level}%</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Technical Skills */}
                <div className="technical-skills">
                  <h3>Technical Skills</h3>
                  <div className="skills-categories-grid">
                    {skillCategories.map((category, index) => (
                      <div key={index} className={`skill-category-card animate-on-scroll ${category.isNew ? 'new-category' : ''}`}>
                        <div className="category-header">
                          <h4>{category.title}</h4>
                          {category.isNew && <span className="new-badge">New!</span>}
                        </div>
                        <div className="skills-list">
                          {category.skills.map((skill, skillIndex) => (
                            <div key={skillIndex} className={`skill-item ${skill.featured ? 'featured' : ''}`}>
                              <div className="skill-name">
                                {skill.name}
                                {skill.featured && <span className="featured-badge">✨</span>}
                              </div>
                              <div className="skill-level">
                                <div 
                                  className="skill-bar" 
                                  style={{ '--level': `${skill.level}%` }}
                                ></div>
                                <span className="skill-percent">{skill.level}%</span>
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Projects Section */}
          {activeSection === 'projects' && (
            <section className="content-section animate-fade-up">
              <div className="section-header">
                <h2 className="section-title">Featured Projects</h2>
                <p className="section-subtitle">A showcase of my recent work and achievements</p>
              </div>
              
              <div className="projects-grid">
                {projects.map((project, index) => (
                  <div key={index} className="project-card animate-on-scroll">
                    <div className="project-image">
                      <img src={project.images[0]} alt={project.title} />
                      <div className="project-overlay">
                        <button
                          className="btn btn-primary"
                          data-bs-toggle="modal"
                          data-bs-target="#projectModal"
                          onClick={() => openModal(project.images)}
                        >
                          View Gallery
                        </button>
                      </div>
                    </div>
                    <div className="project-content">
                      <h3 className="project-title">{project.title}</h3>
                      <p className="project-description">{project.description}</p>
                      <div className="project-tech">
                        {project.tech.map((tech, techIndex) => (
                          <span key={techIndex} className="tech-tag">{tech}</span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Certificates Section */}
          {activeSection === 'certificates' && (
            <section className="content-section animate-fade-up">
              <div className="section-header">
                <h2 className="section-title">Certificates & Achievements</h2>
                <p className="section-subtitle">Professional certifications and accomplishments</p>
              </div>
              
              <div className="certificates-content">
                <div className="certificates-grid">
                  {certificates.map((cert, index) => (
                    <div 
                      key={index} 
                      className={`certificate-card animate-on-scroll`}
                      style={{ '--delay': `${index * 0.2}s` }}
                    >
                      <div className="certificate-icon">
                        <span className="cert-emoji">{cert.icon}</span>
                      </div>
                      <div className="certificate-content">
                        <div className="certificate-header">
                          <h3 className="certificate-title">{cert.title}</h3>
                          <span className="certificate-year">{cert.year}</span>
                        </div>
                        <p className="certificate-issuer">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16M6.5 5A1.5 1.5 0 0 1 8 3.5c.827 0 1.5.673 1.5 1.5S8.827 6.5 8 6.5 6.5 5.827 6.5 5M8 7.5c1.5 0 2.5.5 2.5 1.5v1.5h-5V9c0-1 1-1.5 2.5-1.5"/>
                          </svg>
                          {cert.issuer}
                        </p>
                        <p className="certificate-description">{cert.description}</p>
                        <div className="certificate-badge">
                          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
                          </svg>
                          Certified
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </section>
          )}

          {/* Education Section */}
          {activeSection === 'education' && (
            <section className="content-section animate-fade-up">
              <div className="section-header">
                <h2 className="section-title">Education & Qualifications</h2>
                <p className="section-subtitle">My academic journey and continuous learning path</p>
              </div>
              
              <div className="education-content">
                <div className="education-timeline">
                  <div className="timeline-item current animate-on-scroll">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                      <div className="education-header">
                        <h3>M.Sc. in Artificial Intelligence & Machine Learning</h3>
                        <div className="education-meta">
                          <span className="institution">Veer Narmad South Gujarat University (VNSGU)</span>
                          <span className="currently-pursuing">Currently Pursuing</span>
                        </div>
                        <span className="duration">2025 - 2027 (2-year program)</span>
                      </div>
                      <p className="education-description">
                        Pursuing advanced studies in AI and ML, focusing on machine learning algorithms, 
                        deep learning, natural language processing, and AI system design. This program 
                        enhances my ability to integrate cutting-edge AI solutions into web applications.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item animate-on-scroll">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                      <div className="education-header">
                        <h3>Bachelor of Computer Applications</h3>
                        <div className="education-meta">
                          <span className="institution">Veer Narmad South Gujarat University</span>
                          <span className="status completed">Completed</span>
                        </div>
                        <span className="duration">2022 - 2025</span>
                      </div>
                      <p className="education-description">
                        Comprehensive study of computer applications, programming languages, database 
                        management, software engineering, and web technologies. Built a strong foundation 
                        in full-stack development.
                      </p>
                    </div>
                  </div>

                  <div className="timeline-item animate-on-scroll">
                    <div className="timeline-marker">
                      <div className="marker-dot"></div>
                    </div>
                    <div className="timeline-content">
                      <div className="education-header">
                        <h3>12th Grade - Commerce</h3>
                        <div className="education-meta">
                          <span className="institution">Navdeep Vidhyalaya</span>
                          <span className="status completed">Completed</span>
                        </div>
                        <span className="duration">2021 - 2022</span>
                      </div>
                      <p className="education-description">
                        Completed higher secondary education with commerce stream, developing analytical 
                        and business understanding skills that complement my technical expertise.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}

          {/* Contact Section */}
          {activeSection === 'contact' && (
            <section className="content-section animate-fade-up">
              <div className="section-header">
                <h2 className="section-title">Get In Touch</h2>
                <p className="section-subtitle">Let's discuss your next project</p>
              </div>
              
              <div className="contact-content">
                <div className="contact-info">
                  <h3>Let's Create Something Amazing Together</h3>
                  <p>
                    Ready to bring your ideas to life? I'm always excited to work on new projects 
                    and collaborate with creative minds. Whether you need a modern website, 
                    AI integration, or automation solutions, let's make it happen.
                  </p>
                  
                  <div className="contact-methods">
                    <div className="contact-item animate-on-scroll">
                      <div className="contact-icon phone">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M11 1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1zM5 0a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2z"/>
                        </svg>
                      </div>
                      <div className="contact-details">
                        <h4>Call Me</h4>
                        <a href="tel:+916351119763">+91 6351119763</a>
                      </div>
                    </div>

                    <div className="contact-item animate-on-scroll">
                      <div className="contact-icon email">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M2 2a2 2 0 0 0-2 2v8.01A2 2 0 0 0 2 14h5.5a.5.5 0 0 0 0-1H2a1 1 0 0 1-.966-.741l5.64-3.471L8 9.583l7-4.2V8.5a.5.5 0 0 0 1 0V4a2 2 0 0 0-2-2zm3.708 6.208L1 11.105V5.383zM1 4.217V4a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v.217l-7 4.2z"/>
                        </svg>
                      </div>
                      <div className="contact-details">
                        <h4>Email Me</h4>
                        <a href="mailto:chokwalakishan@gmail.com">chokwalakishan@gmail.com</a>
                      </div>
                    </div>

                    <div className="contact-item animate-on-scroll">
                      <div className="contact-icon location">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16">
                          <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A32 32 0 0 1 8 14.58a32 32 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94M8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10"/>
                        </svg>
                      </div>
                      <div className="contact-details">
                        <h4>Visit Me</h4>
                        <span>603-U, Suman Sagar, Vesu, Surat</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          )}
        </main>
      </div>

      {/* Project Modal */}
      <div className="modal fade" id="projectModal" tabIndex="-1">
        <div className="modal-dialog modal-lg">
          <div className="modal-content modern-modal">
            <div className="modal-header">
              <h4 className="modal-title">Project Screenshots</h4>
              <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div className="modal-body">
              {modalImages.length > 0 ? (
                modalImages.map((img, index) => (
                  <img key={index} src={img} alt="Screenshot" className="img-fluid mb-3 rounded" />
                ))
              ) : (
                <p>No images available</p>
              )}
            </div>
            <div className="modal-footer">
              <a href="tel:+916351119763" className="btn btn-primary">Contact for More Details</a>
              <button type="button" className="btn btn-outline" data-bs-dismiss="modal">Close</button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}