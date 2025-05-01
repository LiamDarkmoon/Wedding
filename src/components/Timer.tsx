import { useState, useEffect } from 'react';

const Timer = () => {

    const [countDown, setCountDown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
    })

    const eventName = 'Mafia Event'

   useEffect(() => {
    const CountDownDate = new Date('2025-07-25T10:30').getTime();

    const counting = setInterval(function() {


        const now = new Date().getTime();
        const distance = CountDownDate - now;

        // Time
        const days = Math.floor(distance / (1000 * 60 * 60 * 24));
        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        setCountDown({ days, hours, minutes, seconds });

   }, 1000);
   
   }, [countDown])

    return(
		<div className="flex items-center justify-between md:justify-center w-full h-full md:h-[148px] md:gap-[50px] px-[34px] md:py-8 mb-6">
			<div className="block text-[32px] md:text-[51px] text-center font-[300]">
				<div className="title">{countDown.days}</div>
				<span className="block text-xs text-center mt-[-5px]">DIAS</span>
			</div>
			<div className="block text-2xl text-center font-[400]">:</div>
			<div className="block text-[32px] md:text-[51px] text-center font-[300]">
				<div className="title">{countDown.hours}</div>
				<span className="block text-xs text-center mt-[-5px]">HS</span>
			</div>
			<div className="block text-2xl text-center font-[400]">:</div>
			<div className="block text-[32px] md:text-[51px] text-center font-[300]">
				<div className="title">{countDown.minutes}</div>
				<span className="block text-xs text-center mt-[-5px]">MIN</span>
			</div>
			<div className="block text-2xl text-center font-[400]">:</div>
			<div className="block text-[32px] md:text-[51px] text-center font-[300]">
				<div className="title">{countDown.seconds}</div>
				<span className="block text-xs text-center mt-[-5px]">SEG</span>
			</div>
		</div>
    )
}

export default Timer;