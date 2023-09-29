import styles from './Footer.module.scss';

const Footer = () => {
    return (
        <div className={styles.footer}>
                <a href='https://www.linkedin.com/in/jordi-bugler-lamb/' rel="noreferrer" target="_blank">Linked In</a>
                <p>.</p>
                <a href='https://cv.jordibuglerlamb.com/' rel="noreferrer" target="_blank">Curriculum Vitae</a>
                <p>.</p>
                <a href='https://github.com/JBLGithub' rel="noreferrer" target="_blank">Github</a>
                <p>.</p>
                <p className={styles.p2}>© 2023 Jordi Bugler-Lamb. All rights reserved.</p>
        </div>
    );
}

export default Footer;