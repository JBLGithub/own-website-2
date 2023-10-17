//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const Header = () => {

    const [menuBarShowing, setMenuBarShowing] = useState(false);

    // offset fixed header - source : https://github.com/rafgraph/react-router-hash-link/issues/25#issuecomment-536688104
    const scrollWithOffset = (el:any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -(window.innerHeight * 0.1); 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    const handleMenuBarPressed = () => {
        const links = document.getElementById('links');
        const screenWidth = window.innerWidth;
        if (screenWidth <= 650) {
            if (!menuBarShowing && links) {
                links.style.display = "flex";
                setMenuBarShowing(true);
            } else if (menuBarShowing && links) {
                links.style.display = "none"; // or another appropriate value to hide the menu bar
                setMenuBarShowing(false);
            }
        }
    }

    // translation
    const { t } = useTranslation();
    const { i18n } = useTranslation();
    const [lang, setLang] = useState(i18n.language);
    const handleLanguageChange = () => {
        handleMenuBarPressed();
        const newLang = lang === 'en' ? 'fr' : 'en';
        i18n.changeLanguage(newLang);
        setLang(newLang);
    }

    return (
        <div className={styles.headercontainer}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt='logo' />
                </div>
                <div 
                    className={styles.menuBarContainer}
                    onClick={handleMenuBarPressed}
                >
                    <button className={styles.menuBar}>
                            <hr></hr>
                            <hr></hr>
                            <hr></hr>
                    </button>
                </div>
                <div id='links' className={styles.links}>
                    <Link
                        to="/#top"
                        className={styles.link}
                        onClick={handleMenuBarPressed}
                    >{t("header_home")}</Link>
                    <Link
                        to="/#me"
                        className={styles.link}
                        scroll={el => scrollWithOffset(el)}
                        onClick={handleMenuBarPressed}
                    >{t("header_me")}</Link>
                    <Link
                        to="/#technology"
                        className={styles.link}
                        scroll={el => scrollWithOffset(el)}
                        onClick={handleMenuBarPressed}
                    >{t("header_technology")}</Link>
                    <Link
                        to="/#project"
                        className={styles.link}
                        scroll={el => scrollWithOffset(el)}
                        onClick={handleMenuBarPressed}
                    >{t("header_projects")}</Link>
                    <Link
                        to="/#top"
                        className={styles.link}
                        onClick={handleLanguageChange}
                    >
                        {lang === 'en' ? 'FR' : 'EN'}
                    </Link>
                </div>
            </div>
            <div id='Top' className={styles.headerspacer}></div>
        </div>
    );
}

export default Header;