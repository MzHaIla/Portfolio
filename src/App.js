// import logo from './logo.svg';
import { FaArrowRight } from "react-icons/fa";
import SkillsSection from "./Skills";
import ProjectsSection from "./Project";
import ContactsSection from "./Contact";
import { useEffect, useRef, useState } from "react";
import './css/App.css';

function App() {
    const [isLogoBreaking, setIsLogoBreaking] = useState(false);
    const [rocket, setRocket] = useState(null);
    const [isProjectsLaunching, setIsProjectsLaunching] = useState(false);
    const appRef = useRef(null);
    const rocketIconRef = useRef(null);

    const handleLogoClick = (e) => {
        e.preventDefault();
        setIsLogoBreaking(true);
        window.scrollTo({ top: 0, behavior: "smooth" });
        setTimeout(() => setIsLogoBreaking(false), 600);
    };

    const smoothScrollTo = (targetY, duration) => {
        const startY = window.scrollY;
        const diff = targetY - startY;
        const startTime = performance.now();

        const easeInOutCubic = (t) =>
            t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

        const step = (now) => {
            const progress = Math.min((now - startTime) / duration, 1);
            window.scrollTo(0, startY + diff * easeInOutCubic(progress));
            if (progress < 1) requestAnimationFrame(step);
        };

        requestAnimationFrame(step);
    };

    const handleNavClick = (id) => (e) => {
        e.preventDefault();
        const targetEl = document.getElementById(id);
        if (!targetEl) return;

        const headerOffset = 90;
        const targetY = window.scrollY + targetEl.getBoundingClientRect().top - headerOffset;
        smoothScrollTo(targetY, 900);
    };

    const handleProjectsClick = () => {
        const FLIGHT_DURATION = 1600;
        const appEl = appRef.current;
        const iconEl = rocketIconRef.current;
        const targetEl = document.getElementById("project");
        if (!appEl || !iconEl || !targetEl) return;

        const appRect = appEl.getBoundingClientRect();
        const iconRect = iconEl.getBoundingClientRect();
        const targetRect = targetEl.getBoundingClientRect();

        const start = {
            top: iconRect.top - appRect.top,
            left: iconRect.left - appRect.left,
        };
        const end = {
            top: targetRect.top - appRect.top + 30,
            left: targetRect.left - appRect.left + targetRect.width / 2 - 14,
        };

        setIsProjectsLaunching(true);
        setRocket({ ...start, flying: false });

        const headerOffset = 90;
        smoothScrollTo(window.scrollY + targetRect.top - headerOffset, FLIGHT_DURATION);

        requestAnimationFrame(() => {
            requestAnimationFrame(() => {
                setRocket({ ...end, flying: true });
            });
        });

        setTimeout(() => {
            setRocket(null);
            setIsProjectsLaunching(false);
        }, FLIGHT_DURATION + 150);
    };

    useEffect(() => {
        const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add("active");
            }
            });
        },
        { threshold: 0.2 } // trigger when 20% is visible
        );

        const elements = document.querySelectorAll(".fade-up, .fade-right");
        elements.forEach((el) => observer.observe(el));

        return () => observer.disconnect();
    }, []);
    
    return (
        <div className="App" ref={appRef}>
            {rocket && (
                <span
                    className={`flying-rocket ${rocket.flying ? "flying" : ""}`}
                    style={{ top: rocket.top, left: rocket.left }}
                >
                    🚀
                </span>
            )}

            <header className="headbar" id="home">
                <a
                    href="#home"
                    className={`logo-badge ${isLogoBreaking ? "breaking" : ""}`}
                    onClick={handleLogoClick}
                >
                    <span className="logo-half logo-half-left">F</span>
                    <span className="logo-half logo-half-right">Z</span>
                </a>
                <nav className="headbar-nav">
                    <a href="#home" onClick={handleLogoClick}>Home</a>
                    <a href="#experience" onClick={handleNavClick("experience")}>Experience</a>
                    <a href="#skill" onClick={handleNavClick("skill")}>Skill</a>
                    <a href="#project" onClick={handleNavClick("project")}>Project</a>
                    <a href="#contact" onClick={handleNavClick("contact")}>Contact</a>
                </nav>
            </header>

            <main className="App-content">
                <h1 className="fade-up">Hola! <span className="wave-hand">👋🏻</span></h1>
                <p className="fade-up">I'm <span className="gradient-name">Farisah Zamri</span>, a Software Developer</p>
                <p className="fade-up">I code, bug, deploy and repeat to make the web little less broken ✨</p>
                <div className="fade-up">
                    <button
                        type="button"
                        className={`button ${isProjectsLaunching ? "launching" : ""}`}
                        style={{ marginRight: '10px' }}
                        onClick={handleProjectsClick}
                    >
                        <span className="rocket-icon" ref={rocketIconRef}>🚀</span> Projects
                    </button>
                    <a href="#experience"><b> Experiences </b><FaArrowRight /></a>
                </div>
                {/* <div className="bottom-gradient"></div> */}
            </main>

            <section id="experience" className="experience-section">
                <div className="experience-card fade-up">
                    <h2>Experience</h2>
                    <a href="/resume.pdf" download className="resume-btn fade-up">Download Resume</a>
                    <div className="experience-item fade-right">
                        <h3>Junior Developer (PahangGo)</h3>
                        <span>May 2024 – Present</span>
                        <p >Developed and maintained web applications using Bootstrap, PHP, and Laravel. Worked with clients to gather document business requirements, supported the development, integration of backend services, APIs, and databases.</p>
                    </div>
                    <div className="experience-item fade-right">
                        <h3>Intern - CRM Salesforce (Top Glove)</h3>
                        <span>Aug 2022 – Jan 2023</span>
                        <p>Worked with the Salesforce CRM team to implement client Change Requests (CRs). Customized and configured Salesforce workflows, validation rules, and automation processes, and researched best practices for integrating card-scanner solutions with Salesforce.</p>
                    </div>
                </div>
            </section>

            <SkillsSection />
            <ProjectsSection />
            <ContactsSection />
        </div>
    );
}

export default App;
