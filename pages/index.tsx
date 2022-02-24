import type { NextPage } from 'next';
import Head from 'next/head';
import Manager from '../components/manager/Manager';
import Controls from '../components/controls/Controls';
import * as S from '../styles/home';

const Home: NextPage = () => {
  return (
    <S.Main>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Demo Next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Controls />
      <Manager />
    </S.Main>
  );
};

export default Home;
