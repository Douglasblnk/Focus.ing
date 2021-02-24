import styles from '../styles/pages/Home.module.scss';

import { ExperienceBar } from '../components/ExperienceBar/ExperienceBar';
import { Profile } from '../components/Profile/Profile';

export default function Home() {
  return (
    <div className={styles.container}>
      <ExperienceBar />

      <section>
        <div>
          <Profile />
        </div>

        <div>

        </div>
      </section>
    </div>
  )
}
