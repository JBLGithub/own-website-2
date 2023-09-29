import styles from './AboutMe.module.scss';

const AboutMe = () => {

    return (
        <div className={styles.aboutme} id="AboutMe">
            <h2>Introduction</h2>
            <ul className={styles.introcontainer}>
                <li>I am a Computer Science student pursuing an Integrated Masters program at the University of St. Andrews.</li>
                <li>I am consistently seeking opportunities for knowledge enhancement through collaborative efforts in both professional work environments, academic pursuits, and personal projects.</li>
                <li>Some of my activities include skiing, sailing, scuba diving, golf, frisby golf, cycling and when I'm not in the wilderness, I'm learning about networking and security.</li>
            </ul>
            <h2>Education</h2>
            <div className={styles.educontainer}>
                <p>Msci Computer Science (2024) - University of St Andrews</p>
                <p>SQA Highers/Adv Highers (2016/18) - High School of Dundee</p>
                <p>Collège/Lycée (2011/16) - Lycée Piere de Coubertin</p>
            </div>
            <h2>Experience</h2>
            <div className={styles.jobcontainer}>
                <p className={styles.p1}>Yookr B.V. (2023)</p>
                <p className={styles.p2}>Software / Technical Operations Engineer</p>
            </div>
            <div className={styles.jobcontainer}>
                <p className={styles.p1}>Yookr B.V. (Summer 2023)</p>
                <p className={styles.p2}>Software / Technical Operations Engineer Intern</p>
            </div>
            <div className={styles.jobcontainer}>
                <p className={styles.p1}>Clevermed Ltd (2021/22)</p>
                <p className={styles.p2}>Junior Software Engineer</p>
            </div>
            <div className={styles.jobcontainer}>
                <p className={styles.p1}>Clevermed Ltd (Summer 2020)</p>
                <p className={styles.p2}>Software Engineer Intern</p>
            </div>
        </div>
    );
}

export default AboutMe;