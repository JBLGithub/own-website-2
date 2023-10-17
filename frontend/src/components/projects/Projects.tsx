import styles from './Projects.module.scss';
import themes from '../../theme/css/containers.module.scss'
import { useTranslation } from 'react-i18next';

const Project = () => {

    const { t } = useTranslation();

    return (
        <div id="project" className={styles.projects}>
            <h1>{t('header_projects')}</h1>
            <div className={`${styles.project} ${themes.box}`}>
                <p className={styles.p1}>{t('project1_title')}</p>
                <p className={styles.p2}>{t('project1_description')}</p>
                <a href='https://github.com/JBLGithub/ph-project'>github</a>
            </div>
            <div className={`${styles.project} ${themes.box}`}>
                <p className={styles.p1}>{t('project2_title')}</p>
                <p className={styles.p2}>{t('project2_description')}</p>
                <a href='https://github.com/Tectagon/active-information-gathering'>github</a>
            </div>
            <div className={`${styles.project} ${themes.box}`}>
                <p className={styles.p1}>{t('project3_title')}</p>
                <p className={styles.p2}>{t('project3_description')}</p>
                <a href='https://github.com/Tectagon/wifi-enumeration'>github</a>
            </div>
        </div>
    )
};

export default Project;