import locationImage from "../../public/locations.svg"

const Locations = () => {
    return (
        <div className="text-center mt-16 place-items-center px-24 2xl:px-[350px]">
            <div className="w-[80%] m-auto">
                <h2 className="text-[36px]"><b>Huge Global Network of Fast VPN</b></h2>
            </div>
            <div className="w-80%]  m-auto">
                <p>See LaslesVPN everywhere to make it easier for you when you move locations.</p> 
            </div>
            <img src={locationImage} className="w-[100%] h-[100%] mt-12 bg-white" alt="Imagen location" />
        </div>
    )
}

export default Locations