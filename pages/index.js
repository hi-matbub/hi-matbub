import Head from 'next/head'

import Content from '../components/content';

import styles from '../styles/Home.module.css'
import Particle from '../components/particles';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>hi-matbub</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className='container-fluid d-flex justify-content-center align-items-center'>
        <Content className={'col-sm-10 col-md-6 col-lg-4'}/>      
      </div>
    </div>
  )
}
