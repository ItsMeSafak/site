import Header from '../components/header';
import styles from '../styles/Home.module.scss';
import { ReactElement } from 'react';

const Home = (): ReactElement => {
    return (
        // <Temporary />
        <div className={styles.main}>
            <Header />
        </div>
    );
}

export default Home;