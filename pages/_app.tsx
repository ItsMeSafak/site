import { ReactElement } from 'react';
import '../styles/globals.scss';
import type { AppProps } from 'next/app';
import Layout from '../components/layout';

const App = ({ Component, pageProps }: AppProps): ReactElement => {
    return(
        <Layout>
            <Component {...pageProps} />
        </Layout>
    );
}

export default App;