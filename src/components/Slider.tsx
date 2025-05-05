
export default function Slider() {

    return(
        <section className="relative flex flex-col items-center justify-end w-full h-screen">
			<div className="absolute gradient w-full h-full bottom-0 z-10 flex flex-col items-center justify-end px-6 pb-30">
				<h2 className="paris text-4xl font-medium mb-2 text-rose-50 ">Nahuel y Viqui</h2>
				<h1 className="title text-[40px] md:text-7xl text-rose-50">¡Nos Casamos!</h1>
			</div>
			<div className="flex items-stretch justify-center w-full h-full max-h-full">
				<img src="/hero.jpg" className="flex-grow-1 object-cover  md:object-center w-full h-screen md:h-auto"/>
			</div>
		</section>
    )
}