/* eslint-disable @next/next/next-script-for-ga */
/* eslint-disable @next/next/no-sync-scripts */
import Document, { Html, Head, Main, NextScript } from 'next/document';
export default class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head>
          <style>
            @import url('https://fonts.googleapis.com/css2?family=Roboto+Flex:opsz,wght@8..144,100;8..144,300;8..144,400;8..144,500;8..144,700&display=swap');
          </style>
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
    </Html>
    )
  };
};