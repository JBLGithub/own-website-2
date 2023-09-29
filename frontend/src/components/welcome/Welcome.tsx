import styles from './Welcome.module.scss';
import ReactTyped from "react-typed";

const Welcome = () => {
    return (
        <div className={styles.welcome}>
            <h1>
                {""}
                <ReactTyped
                    strings={["Hello World!", "Welcome to my portfolio.", "Please get in touch..."]}
                    typeSpeed={60}
                    loop
                    backSpeed={30}
                    cursorChar="|"
                    showCursor={true}
                />
            </h1>
        </div>
    )
}

export default Welcome;