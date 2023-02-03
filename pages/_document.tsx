import { Head, Html, Main, NextScript } from 'next/document'
import { SEO } from '../components/seo';

export const Document = () => 
    <Html>
      <Head>
      <meta name='viewport' content='width=device-width, initial-scale=1.0' />
        <SEO />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>

export default Document;