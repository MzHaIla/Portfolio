// import logo from './logo.svg';
import { FaArrowRight } from "react-icons/fa";
import SkillsSection from "./Skills";
import ProjectsSection from "./Project";
import ContactsSection from "./Contact";
import { useEffect } from "react";
import './css/App.css';

function App() {
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
        <div className="App">
            <header className="headbar">
                <a href="#home">FZ</a>
                <nav className="headbar-nav">
                    <a href="#home">Home</a>
                    <a href="#experience">Experience</a>
                    <a href="#skill">Skill</a>
                    <a href="#project">Project</a>
                    <a href="#contact">Contact</a>
                </nav>
            </header>

            <main className="App-content">
                <h1 className="fade-up">Hola!</h1>
                <p className="fade-up">I'm <span className="gradient-name">Farisah Zamri</span>, a Software Developer</p>
                <p className="fade-up">I code, bug, deploy and repeat to make the web little less broken ✨</p>
                <div className="fade-up">
                    <a className="button" href="#project" style={{ marginRight: '10px' }}>🚀 Projects</a>
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
