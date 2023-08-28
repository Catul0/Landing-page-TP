import './tarjetaPlanes.css'
import './botones.css'
import { FcApproval } from 'react-icons/fc';
import { ayuda } from './NavBar'
type planProps = {
    imagen: string,
    nombree: string,
    item1: string,
    item2: string,
    item3: string,
    item4: string,
    item5?: string;
    item6?: string;
    precio?: number;
};

const TarjetaPlanes = (props: planProps) => {
    const imagen = props.imagen;
    const nombre = props.nombree;
    const item1 = props.item1;
    const item2 = props.item2;
    const item3 = props.item3;
    const item4 = props.item4;
    const item5 = props.item5;
    const item6 = props.item6;
    const precio = props.precio;
    return (
        <>
        <div className={`elemento ${nombre === 'Premium Plan' ? 'hidden lg:block max-w-sm rounded overflow-hidden shadow-lg w-[30%] pt-[100px] border-[3px] rounded-xl border-red-500 bg-white' : ' hidden lg:block bg-white max-w-sm rounded overflow-hidden shadow-lg w-[30%] pt-[100px] border rounded-xl border-grey-500'}`}>
            <div className='flex place-content-center '>
                <img className="w-44" src={imagen} alt="imagen tarjeta " />
            </div>
            <div className="px-6 py-4 text-center min-h-fit min-h-[260px]">
                <div className="font-bold text-xl mb-2">{nombre}</div>
                <div className="flex flex-row ">
                    <div className="basis-1/4"></div>
                    <div className="basis-1/2">
                        <ul className='text-left whitespace-nowrap '>
                            <li className="flex items-center mb-2 "><FcApproval /> {item1}</li>
                            <li className="flex items-center  mb-2"><FcApproval /> {item2}</li>
                            <li className="flex items-center  mb-2"><FcApproval /> {item3}</li>
                            <li className="flex items-center  mb-2"><FcApproval /> {item4}</li>
                            {item5 ? <li className='optional-item flex items-center  mb-2'><FcApproval /> {item5} </li> : <br />}
                            {item6 ? <li className='optional-item flex items-center  mb-2'><FcApproval /> {item6} </li> : <br />}
                        </ul>
                    </div>
                    <div className="basis-1/4"></div>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2 text-[28px] text-center ">
                {precio ? <p><b>$ {precio}</b> /mo</p> : <p><b>Free</b></p>}

            </div>
            <div className="buttonClass button-container mb-[100px]">
                <a className="block border border-red-600 rounded-full py-2 text-center botonSuave text-red text-[22px] w-28 " onClick={ayuda} href="#">Select</a>
            </div>
        </div>


        
        <div className={`elemento ${nombre === 'Premium Plan' ? 'mt-8 max-w-md m-auto rounded overflow-hidden shadow-lg w-[100%] pt-8 border-[3px] rounded-xl border-red-500 bg-white lg:hidden' : 'mt-8 lg:hidden max-w-md m-auto bg-white rounded overflow-hidden shadow-lg w-[100%] pt-8  border rounded-xl border-grey-500'}`}>
            <div className='flex place-content-center '>
                <img className="w-40" src={imagen} alt="imagen tarjeta " />
            </div>
            <div className="px-6 py-4 text-center min-h-fit min-h-[260px]">
                <div className="font-bold text-xl mb-2">{nombre}</div>
                <div className="flex flex-row ">
                    <div className="basis-1/4"></div>
                    <div className="basis-1/2">
                        <ul className='text-left whitespace-nowrap '>
                            <li className="flex items-center mb-2 "><FcApproval /> {item1}</li>
                            <li className="flex items-center  mb-2"><FcApproval /> {item2}</li>
                            <li className="flex items-center  mb-2"><FcApproval /> {item3}</li>
                            <li className="flex items-center  mb-2"><FcApproval /> {item4}</li>
                            {item5 ? <li className='optional-item flex items-center  mb-2'><FcApproval /> {item5} </li> : <br />}
                            {item6 ? <li className='optional-item flex items-center  mb-2'><FcApproval /> {item6} </li> : <br />}
                        </ul>
                    </div>
                    <div className="basis-1/4"></div>
                </div>
            </div>
            <div className=" pb-2 text-[28px] text-center ">
                {precio ? <p><b>$ {precio}</b> /mo</p> : <p><b>Free</b></p>}

            </div>
            <div className="buttonClass button-container mb-8">
                <a className="block border border-red-600 rounded-full py-2 text-center botonSuave text-red text-[22px] w-28 " onClick={ayuda} href="#">Select</a>
            </div>
        </div>
        </>

    )
}

export default TarjetaPlanes