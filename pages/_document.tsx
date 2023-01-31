import { Head, Html, Main, NextScript } from 'next/document'
import { SEO } from '../components/seo';

export const Document = () => 
    <Html>
      <Head>
        <SEO />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>

export default Document;