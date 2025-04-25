import React, {useEffect, useState} from 'react';
import './CountdownFlipAnimated.css';

type CountdownFlipAnimatedProps = {};

const padNumber = (num: number, size: number = 2) => {
  let s = num.toString();
  while (s.length < size) s = '0' + s;
  return s;
};

const FlipDigit: React.FC<{current: string; next: string}> = ({current, next}) => {
  const [flipping, setFlipping] = useState(false);

  useEffect(() => {
    if (current !== next) {
      setFlipping(true);
      const timeout = setTimeout(() => {
        setFlipping(false);
      }, 600);
      return () => clearTimeout(timeout);
    }
  }, [current, next]);

  return (
    <div className='flip-digit'>
      <div className={`flip-digit-top ${flipping ? 'flip' : ''}`}>{current}</div>
      <div className={`flip-digit-bottom ${flipping ? 'flip' : ''}`}>{next}</div>
    </div>
  );
};

const CountdownFlipAnimated: React.FC<CountdownFlipAnimatedProps> = () => {
  const calculateInitialSeconds = () => {
    const now = new Date();
    const dateTocountDown = new Date(2025, 11, 31);
    // dateTocountDown.setDate(now.getDate());
    dateTocountDown.setHours(23, 59, 0, 0);
    return Math.floor((dateTocountDown.getTime() - now.getTime()) / 1000);
  };

  const [secondsLeft, setSecondsLeft] = useState<number>(calculateInitialSeconds());

  useEffect(() => {
    if (secondsLeft <= 0) return;
    const timer = setInterval(() => {
      setSecondsLeft((prev) => prev - 1);
    }, 1000);
    return () => clearInterval(timer);
  }, [secondsLeft]);

  const days = Math.floor(secondsLeft / (3600 * 24));
  const hours = Math.floor((secondsLeft % (3600 * 24)) / 3600);
  const minutes = Math.floor((secondsLeft % 3600) / 60);
  const seconds = secondsLeft % 60;

  const nextSecondsLeft = Math.max(secondsLeft - 1, 0);
  const nextDays = Math.floor(nextSecondsLeft / (3600 * 24));
  const nextHours = Math.floor((nextSecondsLeft % (3600 * 24)) / 3600);
  const nextMinutes = Math.floor((nextSecondsLeft % 3600) / 60);
  const nextSeconds = nextSecondsLeft % 60;

  const renderDigits = (value: number, nextValue: number) => {
    const currentDigits = padNumber(value).split('');
    const nextDigits = padNumber(nextValue).split('');
    return currentDigits.map((digit, idx) => <FlipDigit key={idx} current={digit} next={nextDigits[idx]} />);
  };

  return (
    <div className='countdown-container'>
      <div className='block'>
        <div style={{display: 'inline-flex'}}>{renderDigits(days, nextDays)}</div>
        <span className='label'>DAYS</span>
      </div>
      <div className='block'>
        <div style={{display: 'inline-flex'}}>{renderDigits(hours, nextHours)}</div>
        <span className='label'>HRS</span>
      </div>
      <div className='block'>
        <div style={{display: 'inline-flex'}}>{renderDigits(minutes, nextMinutes)}</div>
        <span className='label'>MINS</span>
      </div>
      <div className='block'>
        <div style={{display: 'inline-flex'}}>{renderDigits(seconds, nextSeconds)}</div>
        <span className='label'>SECS</span>
      </div>
    </div>
  );
};

export default CountdownFlipAnimated;
