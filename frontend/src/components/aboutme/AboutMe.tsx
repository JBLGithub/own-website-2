import styles from './AboutMe.module.scss';
import me from '../../assets/me.png';

const AboutMe = () => {
    return (
        <div className={styles.aboutme} id="AboutMe">
            <div className={styles.imagecontainer}>
                <img src={me} alt='jordi bugler-lamb'/>
            </div>
            <div className={styles.textcontainer}>
                <p>I am a student at the University of St-Andrews currently doing an Integrated Masters in Computer Science.</p>
                <p>I'm continuously looking to expand my knowledge through collaboration at work, in school or through my own projects.</p>
                <p>Some of my activities include skiing, sailing, scuba diving, golf, frisby golf, cycling and when I'm not in the wilderness, I'm learning about networking and security.</p>
            </div>
        </div>
    );
}

export default AboutMe;