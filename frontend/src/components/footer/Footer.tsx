import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div id="contact" className={styles.footer}>
            <div className={styles.links}>
                <a href='https://www.linkedin.com/in/jordi-bugler-lamb/' target="_blank">Linked In</a>
                <a href='https://cv.jordibuglerlamb.com/' target="_blank">Curriculum Vitae</a>
                <a href='https://github.com/JBLGithub' target="_blank">Github</a>
            </div>
            <div className={styles.contactForm}>
                <p>© 2023 Jordi Bugler-Lamb. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;