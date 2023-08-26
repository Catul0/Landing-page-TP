import netflix from "../../public/netflix-logo.png"
import reddit from "../../public/reddit-logo.png"
import amazon from "../../public/amazon-logo.png"
import discord from "../../public/discord-logo.png"
import spotify from "../../public/spotify-logo.png"
import './marcas.css'
const Marcas = () => {
  return (
    <>
      <div className='hidden lg:flex px-4 lg:px-24  2xl:px-[350px] mt-8 lg:mt-16 pt-8 place-items-center place-content-around'>
        <img src={netflix} alt="netflix" className="  h-[60px] opacity-10 " />
        <img src={reddit} alt="reddit" className="  h-[60px]  opacity-10" />
        <img src={amazon} alt="amazon" className="  h-[60px]  opacity-10 " />
        <img src={discord} alt="discord" className="  h-[60px] opacity-10 " />
        <img src={spotify} alt="spotify" className="  h-[60px] opacity-10 " />
      </div>
      <div className="flex flex-row lg:hidden px-4 lg:px-24  2xl:px-[350px] mt-8 lg:mt-16 pt-8 place-items-center">
        <div className="basis-1/2"><img src={netflix} alt="netflix" className="w-[80%]  opacity-10 " /></div>
        <div className="basis-1/2"><img src={reddit} alt="reddit" className="w-[80%]   opacity-10" /></div>
      </div>
      <div className="flex flex-row lg:hidden px-4 lg:px-24  2xl:px-[350px] mt-8 lg:mt-8 pt-8 place-items-center">
        <div className="basis-1/2"><img src={amazon} alt="amazon" className="w-[80%]   opacity-10 " /></div>
        <div className="basis-1/2"><img src={discord} alt="discord" className="w-[80%]  opacity-10 " /></div>
      </div>
      <div className="flex flex-row lg:hidden px-4 lg:px-24  2xl:px-[350px] mt-8 lg:mt-8 pt-8 place-items-center">
        <div className="basis-1/4"></div>
        <div className="basis-1/2"><img src={spotify} alt="spotify" className="w-[80%]  opacity-10 " /></div>
        <div className="basis-1/4"></div>
      </div>
    </>
  )
}

export default Marcas