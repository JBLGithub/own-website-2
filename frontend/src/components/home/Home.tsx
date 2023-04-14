import Welcome from '../welcome/Welcome';
import styles from './Home.module.scss';

const Home = () => {
    return (
        <div className={styles.home}>
            <Welcome />
        </div>
    )
}

export default Home;