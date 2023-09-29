import styles from './Projects.module.scss';
import themes from '../../theme/css/containers.module.scss'

const Project = () => {
    return (
        <div id="project" className={styles.projects}>
            <div className={`${styles.project} ${themes.box}`}>
                <p className={styles.p1}>Monitoring PH, EC and Temperature using Arduino</p>
                <p className={styles.p2}>Using the arduino the monitor the environment of a water solution bfore watering</p>
                <a></a>
            </div>
            <div className={`${styles.project} ${themes.box}`}>
                <p className={styles.p1}>Local Network Reconnaissance</p>
                <p className={styles.p2}>Bash script to enumerate all services running in a given network along side which port number they are running in. Searchploit can then be used to search the services for any vulnerabilities.</p>
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