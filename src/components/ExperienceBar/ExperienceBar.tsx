import style from './ExperienceBar.module.scss';

export const ExperienceBar = () => (
  <header className={style.experienceBar}>
    <span>0 xp</span>
    <div>
      <div style={{ width: '50%' }} />

      <span style={{ left: '50%' }}>
        300xp
      </span>
    </div>
    <span>600 xp</span>
  </header>
);