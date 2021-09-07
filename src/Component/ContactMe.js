import { React , useState } from 'react'
import '../asset/ContactMe/Contact.css'
import '../asset/ContactMe/Contac_responsive.css'

const ContactMe = () => {
    return(
        <section className="Contact">
            <div className="Contact__title">
                <h1>Contact Me</h1>
                <p>Get in touch</p>
            </div>
            <div className="Contact__main">
                <div className="Contact__main-personal">
                    <div className="personal__call">
                        <i class="fas fa-phone-alt"></i>
                        <div className="personal__call-info">
                            <h3>
                                Call Me
                            </h3>
                            <span>123456789</span>
                        </div>
                    </div>
                    <div className="personal__email">
                        <i class="far fa-envelope"></i>
                        <div className="personal__email-info">
                            <h3>
                                 Email
                            </h3>
                            <span>lythanhhait@gmail.com</span>
                        </div>
                    </div>
                    <div className="personal__address">
                        <i class="fas fa-map-marker-alt"></i>
                        <div className="personal__address-info">
                            <h3>
                                Address
                            </h3>
                            <span>Vietnam</span>
                        </div>
                    </div>
                </div>
                <form action="" method="" className="Contact__main-form">
                    <div className="Contact__main-info">
                        <div className="Contact__main-name">
                            <label for="name">Name</label>
                            <input type="text" name="name"></input>
                        </div> 
                        <div className="Contact__main-email">
                            <label for="email">Email</label>
                            <input type="text" name="email"></input>
                        </div> 
                    </div>
                    <div className="Contact__main-project">
                            <label for="project">Project</label>
                            <input type="text" name="project"></input>
                    </div>
                    <div className="Contact__main-message">
                            <label for="message">Message</label>
                            <textarea name="message"></textarea>
                    </div>
                    <button type="submit" className="btn__submit">Send Message <i class="fas fa-share"></i></button>
                </form>
            </div>
        </section>
    );
}

export default ContactMe;