import * as React from 'react';

import { NextPage } from 'next';

import IndexPageContainer from '../containers/index';
import Head from 'next/head';

const IndexPage: NextPage = () => (
  <>
    <Head>
      <title>💩Some stuff with next.js 💩</title>
    </Head>
    <IndexPageContainer />
  </>
);

export default IndexPage;
