import styles from '../styles/pages/Home.module.scss';

import Head from 'next/head';

import { CompletedChallenges } from '../components/CompletedChallenges/CompletedChallenges';
import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { Profile } from '../components/Profile/Profile';
import { Countdown } from '../components/Countdown/Countdown';

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>
          Início | Focus.ing
        </title>
      </Head>
      
      <ExperienceBar />

      <section>
        <div>
          <Profile />
          <CompletedChallenges />
          <Countdown />
        </div>

        <div>
        </div>
      </section>
    </div>
  )
}
