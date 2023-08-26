import menuButton from "../../public/bars-solid.svg"
import logo from "../../public/logo .svg"
import { useState } from 'react';
import { Link } from 'react-scroll';
import './botones.css'

export function ayuda(): void {
    alert('NO SE FLACO, YO NO SOY DE SOPORTE');
}

const NavBar = () => {
    const [menuClicked, setMenuClicked] = useState<boolean>(true);

    const handleClick = () => {
        setMenuClicked(prevState => !prevState);
        console.log("click")
    };
    return (
        <>
            <div className="hidden lg:flex lg:justify-between fixed  px-24 2xl:px-[350px] bg-blue-200 w-[100%] py-1 z-10 ">
                <img className="pl-4 " src={logo} alt="logo"></img>
                <img className="w-10 h-10 cursor-pointer lg:hidden" onClick={handleClick} src={menuButton} alt="Boton Menu Hamburguesa"></img>
                <ul className="hidden lg:flex md:justify-between md:pl-8 md:pr-8 text-[18px] w-100 md:items-center">
                    <button >
                        <Link className="pl-4  " activeClass="active"
                            to="portada"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >About</Link>
                    </button>
                    <button >
                        <Link className="pl-4  " activeClass="active"
                            to="features"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >Features</Link>
                    </button>
                    <button >
                        <Link className="pl-4  " activeClass="active"
                            to="precios"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >Pricing</Link>
                    </button>
                    <button >
                        <Link className="pl-4  " activeClass="active"
                            to="testimonios"
                            spy={true}
                            smooth={true}
                            offset={-70}
                            duration={500} >Testimonials</Link>
                    </button>
                    <button className="pl-4 pr-4" onClick={ayuda}>Help</button>
                </ul>
                <ul className=" hidden lg:flex text-[18px] md:place-content-around">
                    <button onClick={ayuda} className="md:pl-4 md:pr-4 whitespace-nowrap">
                        <a className="block py-2 px-4 text-blue-800 text-[22px] " href="#">Sign In</a>
                    </button>
                    <button onClick={ayuda} className="md:pl-4 md:pr-4 whitespace-nowrap">
                        <a className="block border border-red-600 rounded-full py-2 px-4 botonSuave text-red text-[22px]  " href="#">Sign Up</a>
                    </button>
                </ul>
            </div>
            <div className="lg:hidden bg-blue-400 fixed w-[100%] pt-2 z-10 pb-2">
                {/*ACA PARA ABAJO ESTA EL NAVBAR MOBILE */}
                <div className="flex flex-row ">
                    <div className="basis-1/2 ">
                        <div className=" ">
                            <img className="pl-4 " src={logo} alt="logo"></img>
                        </div>
                    </div>
                    <div className="basis-1/2 grid justify-items-end">
                        <div className="pr-8 ">
                            <img className="w-10 h-10 m-auto cursor-pointer lg:hidden " onClick={handleClick} src={menuButton} alt="Boton Menu Hamburguesa"></img>
                        </div>
                    </div>
                </div>
                <div>
                    <ul className={`${menuClicked ? 'hidden' : ''} block md:pl-8 pr-16 pt-8 text-[20px] w-100 md:items-center grid justify-items-end   `}>
                        <li className="cursor-pointer">
                            <Link className="pl-4  " activeClass="active"
                                to="portada"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} >About</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link className="pl-4  " activeClass="active"
                                to="features2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} >Features</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link className="pl-4  " activeClass="active"
                                to="precios"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} >Pricing</Link>
                        </li>
                        <li className="cursor-pointer">
                            <Link className="pl-4  " activeClass="active"
                                to="testimonios2"
                                spy={true}
                                smooth={true}
                                offset={-70}
                                duration={500} >Testimonials</Link>
                        </li>
                        <li className="cursor-pointer" onClick={ayuda}>Help</li>
                    </ul>
                    <ul className={`${menuClicked ? 'hidden' : ''} text-[18px] grid justify-items-end pr-16 `}>
                        <div>
                            <button onClick={ayuda} className=" whitespace-nowrap">
                                <a className="block text-blue-800 text-[20px] " href="#">Sign In</a>
                            </button>
                        </div>
                        <div>
                            <button onClick={ayuda} className="whitespace-nowrap">
                                <a className="block   text-red text-[20px]  " href="#">Sign Up</a>
                            </button>
                        </div>
                    </ul>
                </div>


            </div>
        </>
    )
}

export default NavBar