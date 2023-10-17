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
import { useRef } from 'react';
import { useTranslation } from 'react-i18next';

//mongodb
//redis

const Technology = () => {

    const technologiesRef = useRef<HTMLDivElement>(null);
    const handleScroll = () => {
        if (technologiesRef.current) {
            const container = technologiesRef.current;
            const elementWidth = 100 + 40; // Adjust this based on your element's width and margin
            const numElements = 29; // Number of elements
            const scrollLeft = container.scrollLeft;

            if (scrollLeft >= elementWidth * numElements) {
                // Reset the scroll position when scrolling past the 29th element
                container.scrollLeft = 0;
            }
        }
    };

    // translation
    const { t }  = useTranslation();

    return (
        <div id='technology' className={styles.technologies}>
            <h1>{t('header_technology')}</h1>
            <div
                className={styles.technologyContainer}
                ref={technologiesRef}
                onScroll={handleScroll}
            >
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={java} alt='java' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={csharp} alt='c#' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={c} alt='c' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={rust} alt='rust' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={python} alt='python' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={swift} alt='swift' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={grafana} alt='grafana' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={elasticsearch} alt='elasticsearch' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={mongodb} alt='mongodb' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={microsoftsql} alt='microsoftsql' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={redis} alt='redis' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={linux} alt='linux' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={kali} alt='kali' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={azure} alt='azure' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={nodejs} alt='nodejs' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={dotnet} alt='dotnet' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={php} alt='php' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={django} alt='django' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={spring} alt='spring' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={nginx} alt='nginx' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={docker} alt='docker' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={podman} alt='podman' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={react} alt='react' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={vuejs} alt='vuejs' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={html} alt='html' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={css} alt='css' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={javascript} alt='javascript' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={typescript} alt='typescript' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={latex} alt='latex' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={java} alt='java' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={csharp} alt='c#' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={c} alt='c' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={rust} alt='rust' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={python} alt='python' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={swift} alt='swift' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={grafana} alt='grafana' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={elasticsearch} alt='elasticsearch' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={mongodb} alt='mongodb' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={microsoftsql} alt='microsoftsql' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={redis} alt='redis' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={linux} alt='linux' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={kali} alt='kali' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={azure} alt='azure' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={nodejs} alt='nodejs' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={dotnet} alt='dotnet' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={php} alt='php' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={django} alt='django' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={spring} alt='spring' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={nginx} alt='nginx' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={docker} alt='docker' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={podman} alt='podman' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={react} alt='react' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={vuejs} alt='vuejs' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={html} alt='html' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={css} alt='css' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={javascript} alt='javascript' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={typescript} alt='typescript' />
                    </div>
                </div>
                <div className={`${styles.technology} ${themes.box}`}>
                    <div className={styles.techcontainer}>
                        <img src={latex} alt='latex' />
                    </div>
                </div>
            </div>
        </div>

    )
}

export default Technology;