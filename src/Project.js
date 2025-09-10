function ProjectsSection() {
  const projects = [
    {
      title: "Lembaga Perumahan dan Hartanah Pahang",
      description: "Website for Pahang citizen to apply for housing schemes.",
      img: "https://via.placeholder.com/250x160",
    },
    {
      title: "E-Exam",
      description:
        "Exam system to cater Pahang state online examination and marking schemes with integration to e-PTM site.",
      img: "https://via.placeholder.com/250x160",
    },
    {
      title: "Perbadanan Kemajuan Cameron Highland",
      description:
        "An application website to rent the land and stall in Cameron Highland under PKCH.",
      img: "https://via.placeholder.com/250x160",
    },
  ];

  return (
    <section id="project" className="projects-section">
      <h2 className="fade-up">Projects</h2>
      <div className="projects-container">
        {projects.map((proj, index) => (
          <div key={index} className="project-card">
            <img src={proj.img} alt={proj.title} />
            <div className="project-info">
              <h3 className="fade-right">{proj.title}</h3>
              <p className="fade-right">{proj.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default ProjectsSection;
