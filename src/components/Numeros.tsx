import server from "../../public/server-icon.svg"
import user from "../../public/user-icon.svg"
import location from "../../public/location-icon.svg"
const Numeros = () => {
    return (
        <>
            <div className="lg:flex place-content-around  mt-8 lg:mt-24  drop-shadow-2xl lg:px-24 2xl:px-[350px]">
                    <div className="flex place-content-between lg:place-content-center w-[100%] lg:w-[400px]  bg-white lg:rounded-l-xl ">
                        <img src={location} alt="icono hubicacion"></img>
                        <div className="pl-4 text-end pr-4 lg:text-center">
                            <p className="text-[30px]"><b>30+</b></p>
                            <p className="text-[22px]">Locations</p>
                        </div>
                    </div>
                    <div className="flex  place-content-between lg:place-content-center border-l border-grey w-[100%] lg:w-[400px] bg-white  " >
                        <img src={server} alt="icono server"></img>
                        <div className="pl-4  text-end pr-4 lg:text-center">
                            <p className="text-[30px]"><b>50+</b></p>
                            <p className="text-[22px]">Servers</p>
                        </div>
                    </div>
                    <div className="flex place-content-between lg:place-content-center border-l border-grey w-[100%] lg:w-[400px] bg-white lg:rounded-r-xl ">
                        <img src={user} alt="icono usuario"></img>
                        <div className="pl-4  text-end pr-4 lg:text-center" >
                            <p className="text-[30px]"><b>90+</b></p>
                            <p className="text-[22px]">Users</p>
                        </div>
                    </div>
                
            </div>
        </>
    )
}

export default Numeros