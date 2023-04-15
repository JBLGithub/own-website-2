import AboutMe from '../aboutme/AboutMe';
import Technology from '../technology/Technology';
import Welcome from '../welcome/Welcome';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <Welcome />
            <AboutMe />
            <Technology />
        </div>
    )
}

export default Home;