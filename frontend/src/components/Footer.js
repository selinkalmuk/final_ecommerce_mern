import '../assets/styles/footer.css'


const Footer = () => {

    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-logo">
                    <h3>Artico</h3>
                    <p>Discover unique and inspiring art from around the world.</p>
                </div>
                <div className="footer-links">
                    <h4>Quick Links</h4>
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about">About</a></li>
                        <li><a href="/services">Services</a></li>
                        <li><a href="/contact">Contact</a></li>
                    </ul>
                </div>
                <div className="footer-contact">
                    <h4>Contact Us</h4>
                    <p>Email: info@artico.com</p>
                    <p>Phone: +1 234 567 890</p>
                    <div className="social-icons">
                        <a href="#" aria-label="Facebook">📘</a>
                        <a href="#" aria-label="Twitter">🐦</a>
                        <a href="#" aria-label="Instagram">📷</a>
                        <a href="#" aria-label="LinkedIn">🔗</a>
                    </div>
                </div>
                <div className="footer-bottom">
                    <p>&copy; 2024 Artico. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;