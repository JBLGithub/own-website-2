//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Header.module.scss';
import logo from '../../assets/headerlogo.png';

const Header = () => {

    // offset fixed header - source : https://github.com/rafgraph/react-router-hash-link/issues/25#issuecomment-536688104
    const scrollWithOffset = (el:any) => {
        const yCoordinate = el.getBoundingClientRect().top + window.pageYOffset;
        const yOffset = -(window.innerHeight * 0.1); 
        window.scrollTo({ top: yCoordinate + yOffset, behavior: 'smooth' }); 
    }

    return (
        <div className={styles.headercontainer}>
            <div className={styles.header}>
                <div className={styles.logo}>
                    <img src={logo} alt='logo' />
                </div>
                <div className={styles.links}>
                    <Link
                        to="/#Top"
                        className={styles.link}
                    >Home</Link>
                    <Link
                        to="/#AboutMe"
                        className={styles.link}
                        scroll={el => scrollWithOffset(el)}
                    >About Me</Link>
                    <Link
                        to="/#Technology"
                        className={styles.link}
                        scroll={el => scrollWithOffset(el)}
                    >Technology</Link>
                    <Link
                        to="/"
                        className={styles.link}
                    >Education</Link>
                    <Link
                        to="/"
                        className={styles.link}
                    >Experience</Link>
                    <Link
                        to="/"
                        className={styles.link}
                    >Projects</Link>
                    <Link
                        to="/"
                        className={styles.link}
                    >Contact</Link>
                </div>
            </div>
            <div id='Top' className={styles.headerspacer}></div>
        </div>
    );
}

export default Header;