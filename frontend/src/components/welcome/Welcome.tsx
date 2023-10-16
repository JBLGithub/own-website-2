import { useTranslation } from 'react-i18next';
import styles from './Welcome.module.scss';
import ReactTyped from "react-typed";

const Welcome = () => {

    // translation
    const { t } = useTranslation();
    const translatedStrings = [
        "Hello World!",
        t('welcome_portfolio'),
        t('welcome_contact'),
    ];

    return (
        <div className={styles.welcome}>
            <h1>
                {""}
                <ReactTyped
                    strings={translatedStrings}
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