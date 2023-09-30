import AboutMe from '../aboutme/AboutMe';
import Project from '../projects/Projects';
import Technology from '../technology/Technology';
import Welcome from '../welcome/Welcome';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <Welcome />
            <AboutMe />
            <Technology/>
            <Project />
        </div>
    )
}

export default Home;