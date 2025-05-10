
export default function Slider() {

    return(
        <section className="relative flex flex-col items-center justify-end w-full h-screen text-rose-50">
			<div className="absolute gradient w-full h-full bottom-0 z-10 flex flex-col items-center justify-end px-6 pb-30">
				<h1 className="title text-6xl md:text-7xl">¡Nos Casamos!</h1>
				<svg className="mt-4 fadeDown" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="#fff1f2" stroke="#fff1f2" strokeWidth="0.00016" width="16px" height="16px"><g id="SVGRepo_bgCarrier" strokeWidth="0"></g><g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g><g id="SVGRepo_iconCarrier"> <path fill="##fff1f2" fillRule="evenodd" d="M12.2929,5.292875 C12.6834,4.902375 13.3166,4.902375 13.7071,5.292875 C14.0976,5.683375 14.0976,6.316555 13.7071,6.707085 L8.70711,11.707085 C8.31658,12.097605 7.68342,12.097605 7.29289,11.707085 L2.29289,6.707085 C1.90237,6.316555 1.90237,5.683375 2.29289,5.292875 C2.68342,4.902375 3.31658,4.902375 3.70711,5.292875 L8,9.585765 L12.2929,5.292875 Z"></path> </g></svg>
			</div>
			<div className="flex items-stretch justify-center w-full h-full max-h-full">
				<img src="/hero.jpg" className="flex-grow-1 object-cover  md:object-center w-full h-screen md:h-auto"/>
			</div>
		</section>
    )
}