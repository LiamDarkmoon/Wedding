import { useRef, useState, useEffect } from "react";

export default function Player() {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

    useEffect(() => {
        if (isPlaying) {
            audioRef.current?.play();
        } else {
            audioRef.current?.pause();
        }
    },[isPlaying])

    const HandlePlay = () => {
        setIsPlaying(!isPlaying);
    }

    return(
        <>
            <audio ref={audioRef} src="/dws.mp3" loop/>

            <div onClick={HandlePlay} className="fixed right-0 top-[100px] z-999 bg-rose-50 rounded-tl-full rounded-bl-full p-2 pr-6 shadow-md shadow-rose-900/80">
                <span className="bg-rose-900/80 rounded-full p-1.5 cursor-pointer w-[50px] h-[50px] grid place-items-center">
                    {
                        isPlaying ?
                        <img src="/play.gif" alt="play" className="w-[32px]"/>
                        :
                        <img src="/pause.png" alt="pause" className="w-[32px]"/>
                    }
                </span>
            </div>
        </>
    )
}