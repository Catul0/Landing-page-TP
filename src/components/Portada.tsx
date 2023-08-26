import imagenPortada from "../../public/illustration-1.svg"
import { ayuda } from './NavBar'
const Portada = () => {
    return (
        <>
        <div className=" px-24 mt-8 pt-16 2xl:px-[350px] " id="portada">
            <section className="lg:hidden">
                <img src={imagenPortada} alt="imagenPortada"></img>
                <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pt-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-[45px] mb-2">Want anything to be easy with <b>LaslesVPN.</b></div>
                            <p className="text-gray-700 text-[22px]">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</p>
                        </div>
                        <div className="flex items-center">
                            <button className=" drop-shadow-2xl h-16 w-40 text-[22px] rounded-lg bg-red-600 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded">
                                Get Started
                            </button>
                        </div>
                </div>
            </section>
            <section className="hidden lg:flex mt-4 " >
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pt-4 flex flex-col justify-between leading-normal">
                        <div className="mb-8">
                            <div className="text-gray-900 font-bold text-[45px] mb-2">Want anything to be easy with <b>LaslesVPN.</b></div>
                            <p className="text-gray-700 text-[22px]">Provide a network for all your needs with ease and fun using <b>LaslesVPN</b> discover interesting features from us.</p>
                        </div>
                        <div className="flex items-center">
                            <button onClick={ayuda} className=" drop-shadow-2xl h-16 w-40 text-[22px] rounded-lg bg-red-600 hover:bg-indigo-950 text-white font-bold py-2 px-4 rounded">
                                Get Started
                            </button>
                        </div>
                    </div>
                    <img className="h-40vh lg:h-auto lg:w-40vh flex-none bg-cover  lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={imagenPortada} title="Woman holding a mug"></img>
                </div>
            </section>
            
        </div>
        </>
    )
}

export default Portada