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
        
        if(isOpen && audioRef.current?.paused && isPlaying) {
            setIsPlaying(false);
        }
    },[audioRef, isPlaying])
    
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
            <div id="invitacion"  className="absolute grid h-screen w-screen place-items-center">
                <div 
                className={isOpen ? "transition-all duration-1000 opacity-0 fixed z-1001 top-[-60vh] w-full h-[70vh] md:h-[80vh] bg-[url('/inv.png')] bg-cover bg-center drop-shadow-2xl shadow-rose-950" : "fixed z-1001 top-0 w-full h-[60vh] md:h-[80vh] bg-[url('/inv.png')] bg-cover bg-center drop-shadow-2xl shadow-rose-950"}
                />
                <button 
                id="seal"
                onClick={HandleOpen} 
                className={isOpen ? "transition-all duration-1000 opacity-0 hidden": "transition-all fixed bottom-[37%] md:bottom-[20%] z-1002 bg-rose-900 rounded-full w-[140px] h-[140px] drop-shadow-2xl shadow-rose-950 paris text-rose-50 text-3xl cursor-pointer grid place-items-center heartbeat"}
                >
                    <span className="grid place-items-center w-[115px] h-[115px] rounded-full bg-rose-800/30 border border-rose-800/60 drop-shadow-2xl shadow-rose-950">
                        N&V
                    </span>
                </button>
                <div 
                className={isOpen ? "transition-all duration-1000 opacity-0 fixed z-1000 bottom-[-65vh] w-full h-[65vh] bg-[url('/invB.png')] bg-cover bg-center" : "fixed z-1000 bottom-0 w-full h-[65vh] bg-[url('/invB.png')] bg-cover bg-center"}
                />
            </div>

            {
                isOpen &&
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
            }
        </>
    )
}