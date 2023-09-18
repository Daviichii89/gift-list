import { useState, useEffect } from 'react'
import confetti from 'canvas-confetti'

type Date = {
    days: number
    hours: number
    minutes: number
    seconds: number
}

function CountdownTimer() {
  const [timeRemaining, setTimeRemaining] = useState<Date>({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });
  const targetDate: string = '2023-10-02T00:00:00'
  useEffect(() => {
    const intervalId = setInterval(updateDaysRemaining, 500);
    confetti()
    return () => {
      clearInterval(intervalId);
    };
  }, []);

  const updateDaysRemaining = () => {
    const currentDate = new Date();
    const targetDateObj = new Date(targetDate)
    if(!isNaN(currentDate.getTime()) && !isNaN(targetDateObj.getTime())) {
        const timeDifference = targetDateObj.getTime() - currentDate.getTime();
        const seconds = Math.floor((timeDifference / 1000) % 60);
        const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
        const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
        const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
        
        setTimeRemaining({ days, hours, minutes, seconds});
    }

  };

  return (
    <>
      {
        timeRemaining.days === 0 
        ?
          <p className='text-2xl text-white mb-2'>Cargando...</p>
        :
          <p className='text-2xl text-white mb-2'>Faltan {timeRemaining.days} d : {timeRemaining.hours} h : {timeRemaining.minutes} m : {timeRemaining.seconds} s</p>
      }
    </>
  );
}

export default CountdownTimer;