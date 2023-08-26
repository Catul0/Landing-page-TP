import imagenPortada from "../../public/illustration-2.svg"
import { FcApproval } from 'react-icons/fc';
const Features = () => {
    return (
        <>
            <section className="hidden lg:flex mt-24 px-24 2xl:px-[350px] " id="features" >
                <div className="max-w-sm w-full lg:max-w-full lg:flex">
                    <img className="h-40vh lg:h-auto lg:w-40vh flex-none bg-cover  lg:rounded-t-none lg:rounded-l text-center overflow-hidden" src={imagenPortada}></img>
                    <div className=" bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 pt-4 flex flex-col  leading-normal w-[600px] place-item-center">
                        <div className=" mb-8 w-[350px]">
                            <div className="text-gray-900 font-bold text-[30px] mb-2"><b>We Provide Many Features You Can Use</b></div>
                            <p className="text-gray-700 text-[16px]">You can explore the features that we provide with fun and have their own functions each feature.</p>
                        </div>
                        <div className="flex w-[350px]  mt-4">
                            <ul className="text-[18px]">
                                <li className="flex items-center mb-2"><FcApproval /> Powerfull online protection.</li>
                                <li className="flex items-center mb-2"><FcApproval />Internet without border.</li>
                                <li className="flex items-center mb-2"><FcApproval />Supercharged VPN.</li>
                                <li className="flex items-center"><FcApproval />No specific time limits.</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
            <section className="lg:hidden mt-8 2xl:px-[350px] " id="features2" >
                <div>
                    <img className="h-40vh  w-[100%]  flex-none bg-cover text-center overflow-hidden" src={imagenPortada}></img>
                    <div className="bg-white text-center">
                        <div className="text-gray-900 font-bold text-[30px] mb-2"><b>We Provide Many Features You Can Use</b></div>
                        <p className="text-gray-700 text-[18px]">You can explore the features that we provide with fun and have their own functions each feature.</p>
                    </div>
                    <div className=" bg-white rounded-b w-[100%] p-4 pt-4  flex flex-row leading-normal text-center ">
                        <div className="basis-1/10"></div>
                        <div className="basis-8/10">

                            <div className="flex   mt-4">
                                <ul className="text-[18px]">
                                    <li className="flex items-center mb-2"><FcApproval /> Powerfull online protection.</li>
                                    <li className="flex items-center mb-2"><FcApproval />Internet without border.</li>
                                    <li className="flex items-center mb-2"><FcApproval />Supercharged VPN.</li>
                                    <li className="flex items-center"><FcApproval />No specific time limits.</li>
                                </ul>
                            </div>
                        </div>
                        <div className="basis-1/10"></div>

                    </div>
                </div>
            </section>
        </>
    )
}

export default Features