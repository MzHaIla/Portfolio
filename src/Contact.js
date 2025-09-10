function ContactsSection() {
    return (
        <footer id="contact" className="footer">
            <div className="footer-content">
                <p>© {new Date().getFullYear()} Farisah Zamri</p>
                <div className="footer-links">
                    <a href="mailto:farisah0340@gmail.com">farisah0340@gmail.com</a>
                    {/* <a href="https://github.com/blahblahblah" target="_blank" rel="noreferrer">GitHub</a> */}
                    <a href="https://linkedin.com/in/blahblahblah" target="_blank" rel="noreferrer">LinkedIn</a>
                </div>
            </div>
        </footer>
    );
}

export default ContactsSection;