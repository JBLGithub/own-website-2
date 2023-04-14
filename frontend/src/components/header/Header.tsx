import { Link } from 'react-router-dom';
import styles from './Header.module.scss';
import logo from '../../assets/headerlogo.png';

const Header = () => {
    return (
        <div className={styles.header}>
            <div className={styles.logo}>
                <img src={logo} alt='logo' />
            </div>
            <div className={styles.links}>
                <Link
                    to="/"
                    className={styles.link}
                >Home</Link>
                <Link
                    to="/"
                    className={styles.link}
                >About Me</Link>
                <Link
                    to="/"
                    className={styles.link}
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
    );
}

export default Header;