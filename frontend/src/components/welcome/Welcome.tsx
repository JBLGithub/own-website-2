import styles from './Welcome.module.scss';

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <div>
                <h1 className={styles.typewriter}>hello world...</h1>
            </div>
        </div>
    )
}

export default Welcome;