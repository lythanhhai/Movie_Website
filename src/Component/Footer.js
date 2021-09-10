import React from 'react'
import { Link } from 'react-router-dom';
import '../asset/Footer/footer.css'
import '../asset/Footer/footer_responsive.css'
import '../App.css'

const Footer = () => {
    return(
        <footer className="footer">
            <div className="footer__top">
                <div className="footer__logo">
                    <h1 className="footer__logo-name">Hải film</h1>
                    <p>Website xem phim miễn phí</p>
                </div>
                <div className="footer__menu">
                    <Link to="" className="service">Services</Link>
                    <Link to="" className="service">Portfolio</Link>
                    <a href="#">Contactme</a>
                </div>
                <div className="footer__social">
                    <a><i class="fab fa-facebook-f"></i></a>
                    <a><i class="fab fa-instagram"></i></a>
                    <a><i class="fab fa-twitter"></i></a>
                </div>
            </div>
            <p className="copyright">© lythanhhai. All right reserved</p>
        </footer>
    );
}

export default Footer;