import styles from './AboutMe.module.scss';

const AboutMe = () => {

    return (
        <div className={styles.aboutme} id="me">
            <div className={styles.aboutMeItem}>
                <h2>Introduction</h2>
                <p>I am a Computer Science student pursuing an Integrated Masters program at the University of St. Andrews.
                I am consistently seeking opportunities to enhancement my knowledge through collaborative efforts in both professional work environments, academic pursuits, and personal projects.
                Some of my activities include skiing, sailing, scuba diving, golf, cycling and when I'm not in the wilderness, I'm learning about networking and security.</p>
            </div>
            <div className={styles.aboutMeItem}>
                <h2>Education</h2>
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
                    <p className={styles.p2}>Collège/Lycée</p>
                </div>
            </div>
            <div className={styles.aboutMeItem}>
                <h2>Experience</h2>
                <div className={styles.container}>
                    <p className={styles.p1}>Yookr B.V. (2023)</p>
                    <p className={styles.p2}>Software / Technical Operations Engineer</p>
                </div>
                <div className={styles.container}>
                    <p className={styles.p1}>Yookr B.V. (Summer 2023)</p>
                    <p className={styles.p2}>Software / Technical Operations Engineer Intern</p>
                </div>
                <div className={styles.container}>
                    <p className={styles.p1}>Clevermed Ltd (2021/22)</p>
                    <p className={styles.p2}>Junior Software Engineer</p>
                </div>
                <div className={styles.container}>
                    <p className={styles.p1}>Clevermed Ltd (Summer 2020)</p>
                    <p className={styles.p2}>Software Engineer Intern</p>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;