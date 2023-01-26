import { ReactElement } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return(
        <div className='flex flex-col min-h-screen'>
            <Layout>
                <Component {...pageProps} />
            </Layout>
        </div>);
}

export default App;