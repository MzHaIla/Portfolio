function ProjectsSection() {
    const projects = [
        {
            title: "Lembaga Perumahan dan Hartanah Pahang",
            description: "Website for Pahang citizen to apply for housing schemes.",
            img: "lphp.png",
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
            img: "pkch.png",
        },
    ];

    return (
        <section id="project" className="projects-section">
            <h2 className="fade-up">Projects</h2>
            <div className="projects-container">
                {projects.map((proj, index) => (
                    <div
                    key={index}
                    className="project-card flex flex-col md:flex-row items-center md:items-start gap-4 mb-8"
                    >
                        <div className="overflow-hidden rounded-lg shadow w-full md:w-64">
                            <img
                            src={proj.img}
                            alt={proj.title}
                            className="w-full h-full object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                            />
                        </div>
                        <div className="project-info text-center md:text-left">
                            <h3 className="fade-right text-lg font-semibold">{proj.title}</h3>
                            <p className="fade-right text-gray-700">{proj.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default ProjectsSection;
