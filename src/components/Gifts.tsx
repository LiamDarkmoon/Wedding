import { useState } from "react";

export default function Gifts() {

    const [show, setShow] = useState(false)

    const HandleShow = () =>{
        setShow(!show)

    }

    return(
        <>
			<button 
            onClick={HandleShow}
            className="inline-block text-sm text-center text-rose-50 font-[600] bg-rose-900/80 py-[10px] px-[32px] mt-3 rounded-[30px] cursor-pointer hover:bg-rose-900/90 transition-all duration-300 ease-in-out">
                MÁS INFORMACION
            </button>
            {
                show ?
                <div onClick={HandleShow} className="fixed z-3000 top-0 left-0 w-full h-full overflow-auto bg-black/40 pt-[50px]">
                    <div className="relative w-full md:w-[60%] max-w-[790px] rounded-md flex flex-col items-center justify-center gap-3 m-auto py-[60px] px-[48px] bg-rose-50">
                        <div className="w-full flex flex-col md:flex-row items-start justify-center mb-6 pb-6 border-b border-b-rose-900/50">
                            <div className="w-full md:w-[35%] text-left">
                                <h3 className="title text-3xl font-[200] text-rose-900/80 pr-[30px]">Cuenta Bancaria</h3>
                            </div>
                            <div className="w-full md:w-[65%] text-left">
                                <p className="font-[200]">
                                    Cuenta: Mercado Pago
                                    <br/>
                                    <b className="block text-rose-900/80 text-xs font-[700] mt-6 mb-2">Titular:</b>
                                    Bedoy Victoria
                                    <br/>
                                    <b className="block text-rose-900/80 text-sm font-[700] mt-6 mb-2">Alias: bedoy.victoria</b> 
                                </p>
                                <p>
                                    <b className="block text-rose-900/80 text-xs font-[700] mt-6 mb-2">CBU:</b>       
                                </p>
                                <input type="text" disabled value="01441638135435473546" className="border-none w-full text-rose-900/80"/>
                                <span className="mt-[10px]"></span>
                                <span className="inline-block font-bold bg-rose-900/80 text-rose-50 px-8 py-[10px] rounded-[40px] mt-6 cursor-pointer">COPIAR CBU</span>
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