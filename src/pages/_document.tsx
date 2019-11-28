import * as React from 'react';
import Document, { Main, NextScript, DocumentContext } from 'next/document';
import { SheetsRegistry, JssProvider, createGenerateId } from 'react-jss';
import Head from 'next/head';

export default class extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const registry = new SheetsRegistry();
    const generateId = createGenerateId();
    const originalRenderPage = ctx.renderPage;


    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: App => props => (
          <JssProvider registry={registry} generateId={generateId}>
            <App {...props} />
          </JssProvider>
        ),
      });

    const initialProps = await Document.getInitialProps(ctx);

    return {
      ...initialProps,
      styles: (
        <>
          {initialProps.styles}
          <style id="server-side-styles">{registry.toString()}</style>
        </>
      ),
    };
  }

  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="Some stuff with next.js"></meta >
          <link href="https://fonts.googleapis.com/css?family=Lato:900&display=swap" rel="stylesheet" />

          <meta name="og:title" content="💩Some stuff with next.js 💩" />
          <meta name="og:description" content="Some stuff with next.js" />
          <meta property="og:type" content="website" />
        </Head>
        <body style={{ margin: 0, padding: 0 }}>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}