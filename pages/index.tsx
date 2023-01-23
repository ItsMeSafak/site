import Header from '../components/header';
import LandingPage from './landing-page';
import Wrapper from '../components/wrapper';
import { ReactElement } from 'react';
import Footer from '../components/footer';

const Home = (): ReactElement => {
    return (
        // <Temporary />
        <div className='flex flex-col p-5 min-h-screen'>
            <Header />
            <Wrapper>
                <LandingPage />
            </Wrapper>
            <Footer />
        </div>
    );
}

export default Home;