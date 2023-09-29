//import { Link } from 'react-router-dom';
import { HashLink as Link } from 'react-router-hash-link';
import styles from './Header.module.scss';
import logo from '../../assets/logo.png';

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
                        to="/#top"
                        className={styles.link}
                    >home</Link>
                    <Link
                        to="/#me"
                        className={styles.link}
                        scroll={el => scrollWithOffset(el)}
                    >me</Link>
                    <Link
                        to="/#technology"
                        className={styles.link}
                        scroll={el => scrollWithOffset(el)}
                    >technology</Link>
                    <Link
                        to="/#project"
                        className={styles.link}
                        scroll={el => scrollWithOffset(el)}
                    >projects</Link>
                </div>
            </div>
            <div id='Top' className={styles.headerspacer}></div>
        </div>
    );
}

export default Header;