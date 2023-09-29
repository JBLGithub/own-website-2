import styles from './Technology.module.scss';
import themes from '../../theme/css/containers.module.scss';
import java from '../../assets/technologies/java.png';
import csharp from '../../assets/technologies/csharp.png';
import azure from '../../assets/technologies/azure.png';
import grafana from '../../assets/technologies/grafana.png';
import elasticsearch from '../../assets/technologies/elastic-search.png';
import mongodb from '../../assets/technologies/mongodb.png';
import microsoftsql from '../../assets/technologies/sql.png';
import redis from '../../assets/technologies/redis.png';
import linux from '../../assets/technologies/linux.png';
import kali from '../../assets/technologies/kali.png';
import nodejs from '../../assets/technologies/node-js.png';
import react from '../../assets/technologies/react.png';
import vuejs from '../../assets/technologies/vuejs.png';
import dotnet from '../../assets/technologies/dotnet.png';
import php from '../../assets/technologies/php.png';
import django from '../../assets/technologies/django.png';
import spring from '../../assets/technologies/spring.png';
import nginx from '../../assets/technologies/nginx.png';
import docker from '../../assets/technologies/docker.png';
import podman from '../../assets/technologies/podman.png';
import html from '../../assets/technologies/html5.png';
import css from '../../assets/technologies/css3.png';
import javascript from '../../assets/technologies/javascript.png';
import typescript from '../../assets/technologies/typescript.png';
import python from '../../assets/technologies/python.png';
import c from '../../assets/technologies/c.png';
import latex from '../../assets/technologies/latex.png';
import swift from '../../assets/technologies/swift.png';
import rust from '../../assets/technologies/rust.png';

//mongodb
//redis

const Technology = () => {
    return (
        <div id='technology' className={styles.technologies}>
            <div title='Implemented many projects throughout university such as Turing Machine simulator in Java' className={`${styles.technology} ${themes.box}`}>
                <img src={java} alt='java' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={csharp} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={c} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={rust} alt='rust' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={python} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={swift} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={grafana} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={elasticsearch} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={mongodb} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={microsoftsql} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={redis} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={linux} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={kali} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={azure} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={nodejs} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={dotnet} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={php} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={django} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={spring} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={nginx} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={docker} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={podman} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={react} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={vuejs} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={html} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={css} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={javascript} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={typescript} alt='c#' />
            </div>
            <div className={`${styles.technology} ${themes.box}`}>
                <img src={latex} alt='c#' />
            </div>
        </div>
    )
}

export default Technology;