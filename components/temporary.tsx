import { ReactElement } from 'react';
import styles from '../styles/Temporary.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';
import { GITHUB_URL, LINKEDIN_URL } from '../helpers/constants';

export const Temporary = (): ReactElement => 
    <div className={styles.container}>
        <main className={styles.main}>
            <h1 className={styles.title}>
                <span>Hi</span> there!
            </h1>
            <p className={styles.description}>
                Unfortunately the website is still in maintenence. 
                However, feel free to contact me on my socials!</p>
            <div className={styles.icons}>
                <a href={GITHUB_URL} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faGithub}/></a>
                <a href={LINKEDIN_URL} target={'_blank'} rel='noreferrer'><FontAwesomeIcon icon={faLinkedin} /></a>
            </div>
        </main>
    </div>

export default Temporary;