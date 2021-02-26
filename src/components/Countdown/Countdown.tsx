import { useState, useEffect } from 'react';
import styles from './Countdown.module.scss';

export const Countdown = () => {
  let countdownTimeout = null;

  const [time, setTime] = useState(0.1 * 60);
  const [isActive, setIsActive] = useState(false);
  const [hasFinished, setHasFinished] = useState(false);

  const minutes = Math.floor(time / 60);
  const seconds = time % 60;

  const getLeftRightTiming = value => String(value).padStart(2, '0').split('');

  const [minuteLeft, minuteRight] = getLeftRightTiming(minutes);
  const [secondLeft, secondRight] = getLeftRightTiming(seconds);

  const countdownHandler = () => {
    if (isActive) resetCountdown();
    else startCountdown();
  }

  const startCountdown = () => {
    setIsActive(true);
  }

  const resetCountdown = () => {
    clearTimeout(countdownTimeout);
    setIsActive(false);
    setTime(0.1 * 60);
  }

  useEffect(() => {
    if (isActive && time > 0) {
      countdownTimeout = setTimeout(() => {
        setTime(time - 1);
      }, 1000);
    } else if (isActive && time === 0) {
      setHasFinished(true);
      setIsActive(false);
    }
  }, [isActive, time])

  return (
    <div>
      <div className={styles.countdownContainer}>
        <div>
          <span>{ minuteLeft }</span>
          <span>{ minuteRight }</span>
        </div>

        <span>:</span>

        <div>
          <span>{ secondLeft }</span>
          <span>{ secondRight }</span>
        </div>
      </div>

      { hasFinished ? (
        <button
          disabled
          className={styles.countdownButton}
        >
          Ciclo encerrado...
        </button>
      ) : (
        <button
          className={`${styles.countdownButton} ${isActive ? styles.activeCountdown : ''}`}
          onClick={countdownHandler}
        >
          { isActive ? 'Abandonar ciclo' : 'Iniciar ciclo' }
        </button>
      ) }
    </div>
  );
};