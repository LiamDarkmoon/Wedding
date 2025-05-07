import { useState, useRef } from "react";

export default function Gifts() {

    const [show, setShow] = useState(false)
    const copyRef = useRef(null)

    const HandleCopy = async () => {
        // @ts-ignore
        let copyValue = copyRef.current?.value
        await navigator.clipboard.writeText(copyValue)
    }

    const HandleShow = () =>{
        setShow(!show)

    }

    return(
        <>
            {
                !show &&
                <button 
                onClick={HandleShow}
                className="inline-block text-sm text-center text-rose-50 font-[600] bg-rose-900/80 py-[10px] px-[32px] mt-3 rounded-[30px] cursor-pointer hover:bg-rose-900/90 transition-all duration-300 ease-in-out">
                    MÁS INFORMACION
                </button>
            }
            {
                show ?
                <div onClick={HandleShow} className="fixed z-3000 top-0 w-screen h-screen overflow-auto bg-black/40 md:pt-[50px]">
                    <div className="relative w-full h-full md:h-auto md:w-[60%] max-w-[790px] md:rounded-md flex flex-col items-center justify-center m-auto py-[60px] px-[48px] bg-rose-50">
                        <div className="w-full flex flex-col md:flex-row items-start justify-center mb-6 pb-6 border-b border-b-rose-900/50">
                            <div className="w-full md:w-[35%] text-left">
                                <h3 className="title text-3xl font-[200] text-rose-900/80 pr-[30px]">Cuenta Bancaria</h3>
                            </div>
                            <div className="w-full md:w-[65%] text-left">
                                <p className="font-[200]">
                                    Cuenta: Mercado Pago
                                    <br/>
                                    <b className="block text-rose-900/80 text-xs font-[700] mt-6 mb-2">Titular:</b>
                                    Nahuel Lopez
                                    <br/>
                                    <b className="block text-rose-900/80 text-sm font-[700] mt-6 mb-2">Alias: NahuelYViqui</b> 
                                </p>
                                <p>
                                    <b className="block text-rose-900/80 text-xs font-[700] mt-6 mb-2">CBU:</b>       
                                </p>
                                <input ref={copyRef} type="text" disabled value="0000003100070067793926" className="border-none w-full text-rose-900/80"/>
                                <span className="mt-[10px]"></span>
                                <span onClick={HandleCopy} className="inline-block font-bold bg-rose-900/80 text-rose-50 px-8 py-[10px] rounded-[40px] mt-6 cursor-pointer">COPIAR CBU</span>
                            </div>
                        </div>
                        <div className="w-full flex flex-col md:flex-row items-start justify-center">
                            <div className="w-full md:w-[35%] text-left">
                                <h3 className="title text-3xl font-[200] text-rose-900/80 pr-[30px]">Buzon en el Salon</h3>
                            </div>
                            <div className="w-full md:w-[65%] text-left">
                                <p className="font-[200]">
                                    En caso que prefieras regalar en efectivo, tendrás a disposición un buzón en el salón durante la recepción.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
                :
                null
            }
		</>
    )
}