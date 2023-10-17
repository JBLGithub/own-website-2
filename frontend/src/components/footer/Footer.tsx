import { useTranslation } from 'react-i18next';
import styles from './Footer.module.scss';

const Footer = () => {

    const { t } = useTranslation();
    const currentYear = new Date().getFullYear();

    return (
        <div className={styles.footer}>
                <a href='https://www.linkedin.com/in/jordi-bugler-lamb/' rel="noreferrer" target="_blank">Linked In</a>
                <p>.</p>
                <a href='https://cv.jordibuglerlamb.com/' rel="noreferrer" target="_blank">Curriculum Vitae</a>
                <p>.</p>
                <a href='https://github.com/JBLGithub' rel="noreferrer" target="_blank">Github</a>
                <p>.</p>
                <p className={styles.p2}>© {currentYear} Jordi Bugler-Lamb. {t('footer_rights')}</p>
        </div>
    );
}

export default Footer;