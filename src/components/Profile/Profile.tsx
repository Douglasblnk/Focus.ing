import styles from './Profile.module.scss';

export const Profile = () => (
  <div className={styles.profileContainer}>
    <img src="https://github.com/douglasblnk.png" alt="Douglas Blank" />
    <div>
      <strong>Douglas Blank</strong>
      <p>
        <img src="icons/level.svg" alt="level" />
        Level 1
      </p>
    </div>
  </div>
);