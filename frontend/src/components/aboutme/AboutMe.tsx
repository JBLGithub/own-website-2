import { useTranslation } from 'react-i18next';
import styles from './AboutMe.module.scss';

const AboutMe = () => {

    // translation
    const { t } = useTranslation();

    return (
        <div className={styles.aboutme} id="me">
            <div className={styles.aboutMeItem}>
                <h2>Introduction</h2>
                <p>{t('aboutme_intro')}</p>
            </div>
            <div className={styles.aboutMeItem}>
                <h2>{t('aboutme_education')}</h2>
                <div className={styles.container}>
                    <p className={styles.p1}>University of St Andrews (2025)</p>
                    <p className={styles.p2}>Msci Computer Science</p>
                </div>
                <div className={styles.container}>
                    <p className={styles.p1}>High School of Dundee (2016/18)</p>
                    <p className={styles.p2}>SQA Highers/Adv Highers</p>
                </div>
                <div className={styles.container}>
                    <p className={styles.p1}>Lycée Piere de Coubertin (2011/16)</p>
                    <p className={styles.p2}>Brevet des Collège</p>
                </div>
            </div>
            <div className={styles.aboutMeItem}>
                <h2>{t('aboutme_experience')}</h2>
                <div className={styles.container}>
                    <p className={styles.p1}>Yookr B.V. (2023)</p>
                    <p className={styles.p2}>Software / Technical Operations Engineer</p>
                </div>
                <div className={styles.container}>
                    <p className={styles.p1}>Yookr B.V. ({t('aboutme_summer')} 2023)</p>
                    <p className={styles.p2}>Software / Technical Operations Engineer Intern</p>
                </div>
                <div className={styles.container}>
                    <p className={styles.p1}>Clevermed Ltd (2021/22)</p>
                    <p className={styles.p2}>Junior Software Engineer</p>
                </div>
                <div className={styles.container}>
                    <p className={styles.p1}>Clevermed Ltd ({t('aboutme_summer')} 2020)</p>
                    <p className={styles.p2}>Software Engineer Intern</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;