import { useState } from "react";

function SkillsSection() {
    const [selected, setSelected] = useState("frontend");

    const skills = {
        frontend: ["HTML", "CSS", "ReactJS"],
        backend: ["Laravel", "Java", "NodeJS"],
        tools: ["Git", "VSCode"],
    };

    return (
        <section id="skill" className="skills-section">
            <h2 className="fade-up">What Comes With Me</h2>

            <div className="skills-timeline">
                <div className="circle-wrapper fade-right" onClick={() => setSelected("frontend")}>
                    <div className={`circle ${selected === "frontend" ? "active" : ""}`}></div>
                    <span className="circle-label">Frontend</span>
                </div>

                <div className="line"></div>

                <div className="circle-wrapper fade-right" onClick={() => setSelected("backend")}>
                    <div className={`circle ${selected === "backend" ? "active" : ""}`}></div>
                    <span className="circle-label">Backend</span>
                </div>

                <div className="line"></div>

                <div className="circle-wrapper fade-right" onClick={() => setSelected("tools")}>
                    <div className={`circle ${selected === "tools" ? "active" : ""}`}></div>
                    <span className="circle-label">Tools</span>
                </div>
            </div>

            {/* Skills display */}
            <div className="skills-list">
                {skills[selected].map((skill, index) => (
                    <span key={index} className="skill-tag  fade-up">{skill}</span>
                ))}
            </div>
        </section>
    );
}

export default SkillsSection;