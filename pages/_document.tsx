import { Head, Html, Main, NextScript } from 'next/document'
import { SEO } from '../components/seo';

export const Document = () => 
    <Html>
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com"/>
        <link href="https://fonts.googleapis.com/css2?family=Inter&display=swap" 
        rel="stylesheet"/>
        <SEO />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>

export default Document;