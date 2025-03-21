import { useState, useEffect } from 'react';
import confetti from 'canvas-confetti';

type Date = {
    days: number;
    hours: number;
    minutes: number;
    seconds: number;
};

function CountdownTimer() {
    const [timeRemaining, setTimeRemaining] = useState<Date>({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    });
    const [isFinished, setIsFinished] = useState(false);
    const targetDate: string = '2024-10-02T00:00:00';

    useEffect(() => {
      const intervalId = setInterval(updateDaysRemaining, 500);
      confetti();
      return () => {
          clearInterval(intervalId);
      };
    }, []);

    const updateDaysRemaining = () => {
        const currentDate = new Date();
        const targetDateObj = new Date(targetDate);
        const timeDifference = targetDateObj.getTime() - currentDate.getTime();

        if (timeDifference <= 0) {
            setIsFinished(true);
            setTimeRemaining({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        } else {
            const seconds = Math.floor((timeDifference / 1000) % 60);
            const minutes = Math.floor((timeDifference / 1000 / 60) % 60);
            const hours = Math.floor((timeDifference / (1000 * 60 * 60)) % 24);
            const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

            setTimeRemaining({ days, hours, minutes, seconds });
        }
    };

    return (
        <>
            {isFinished
                ? <p className='text-2xl mb-2'>🥳Felicidades🥳</p>
                : <p className='text-2xl mb-2'>Faltan {timeRemaining.days} d : {timeRemaining.hours} h : {timeRemaining.minutes} m : {timeRemaining.seconds} s</p>
            }
        </>
    );
}

export default CountdownTimer;
