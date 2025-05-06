import { useRef, useState, useEffect } from "react";

export default function Player() {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);

   

    const HandlePlay = () => {
        setIsPlaying(!isPlaying);
        if(isPlaying) {
            audioRef.current?.pause();
        } else {
            audioRef.current?.play();
        }
    }

    return(
        <>
            <audio ref={audioRef} src="/song.m4a" autoPlay={true} preload="/song.m4a" loop/>

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