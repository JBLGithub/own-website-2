import styles from './Projects.module.scss';
import themes from '../../theme/css/containers.module.scss'

const Project = () => {
    return (
        <div id="project" className={styles.projects}>
            <h1>Projects</h1>
            <div className={`${styles.project} ${themes.box}`}>
                <p className={styles.p1}>PH, EC, Temperature and the Arduino</p>
                <p className={styles.p2}>Utilizing Arduino for environmental monitoring of a water solution and implementing pH adjustment through water electrolysis.</p>
                <a href='https://github.com/JBLGithub/ph-project'>github</a>
            </div>
            <div className={`${styles.project} ${themes.box}`}>
                <p className={styles.p1}>Local Network Reconnaissance</p>
                <p className={styles.p2}>Using a Bash script to systematically identify all services within a specific network, I subsequently employ 'Searchsploit' to assess the potential vulnerabilities of these services.</p>
                <a href='https://github.com/Tectagon/active-information-gathering'>github</a>
            </div>
            <div className={`${styles.project} ${themes.box}`}>
                <p className={styles.p1}>Wireless Network Reconnaissance</p>
                <p className={styles.p2}>(Ongoing) Enumerating wireless network using applications such as tcpdump or using libraries such as pcap in C.</p>
                <a  href='https://github.com/Tectagon/wifi-enumeration'>github</a>
            </div>
        </div>
    )
};

export default Project;