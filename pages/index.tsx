import type { NextPage } from 'next';
import Head from 'next/head';

import Manager from '../components/manager/Manager';

import styles from '../styles/Home.module.css';

const Home: NextPage = () => {
  return (
    <div className={styles.main}>
      <Head>
        <title>Task Manager</title>
        <meta name="description" content="Demo Next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Manager />
    </div>
  );
};

export default Home;
