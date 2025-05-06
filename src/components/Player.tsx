import { useRef, useState, useEffect } from "react";

export default function Player() {

    const audioRef = useRef<HTMLAudioElement>(null);
    const [isPlaying, setIsPlaying] = useState(true);
    const [isOpen, setIsOpen] = useState(false);

    useEffect( () => {
        if(audioRef.current && isOpen) {
            if(!isPlaying) {
                audioRef.current?.pause();
            } else {
                audioRef.current?.play();
            }
        }
    },[isPlaying])
    
    const HandleOpen = () => {
        audioRef.current?.play()
        setIsOpen(true)
    }

    const HandlePlay = () => {
        setIsPlaying(!isPlaying);
    }


    return(
        <>
            <audio ref={audioRef} src="/song.m4a" preload="/song.m4a" loop/>
            <div id="loader" className="absolute block h-screen w-screen place-items-center">
                <div 
                className={isOpen ? "transition-all duration-1000 opacity-0 fixed z-1001 top-[-70vh] w-screen h-[70vh] md:h-[80vh] bg-[url('/inv.png')] bg-cover bg-center drop-shadow-2xl shadow-rose-950" : "fixed z-1001 top-0 w-screen h-[70vh] md:h-[80vh] bg-[url('/inv.png')] bg-cover bg-center drop-shadow-2xl shadow-rose-950"}
                />
                <button 
                onClick={HandleOpen} 
                className={isOpen ? "transition-all duration-1000 opacity-0 hidden fixed bottom-[30%] md:bottom-[20%] z-1002 mt-[-50px] bg-rose-900 rounded-full w-[140px] h-[140px] drop-shadow-2xl shadow-rose-950 paris text-rose-50 text-3xl cursor-pointer" : "transition-all fixed bottom-[30%] md:bottom-[20%] z-1002 mt-[-50px] bg-rose-900 rounded-full w-[140px] h-[140px] drop-shadow-2xl shadow-rose-950 paris text-rose-50 text-3xl cursor-pointer heartbeat"}
                >
                    N&V
                </button>
                <div 
                className={isOpen ? "transition-all duration-1000 opacity-0 fixed z-1000 bottom-[-65vh] w-screen h-[65vh] bg-[url('/invB.png')] bg-cover bg-center" : "fixed z-1000 bottom-0 w-screen h-[65vh] bg-[url('/invB.png')] bg-cover bg-center"}
                />
            </div>


            <div onClick={HandlePlay} className="fixed right-0 top-[100px] z-900 bg-rose-50 rounded-tl-full rounded-bl-full p-2 pr-6 shadow-md shadow-rose-900/80">
                <span className="bg-rose-900/80 rounded-full p-1.5 cursor-pointer w-[50px] h-[50px] grid place-items-center transition-all duration-300 hover:scale-120">
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