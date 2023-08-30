import useSendForm from "../hooks/use-send-form";
import "./botones.css";



export default function Formulario() {
    const {
        onSubmit,
        errors,
        register,
        handleSubmit,
        mensajeEnviado,
    }=useSendForm()
    return (
        <>
        <div className=" lg:px-24 2xl:px-[350px] min-w-[80%] bg-blue-300" id="formulario">
            <div className='text-center  mt-8 pt-8 '>
                <div className="w-[50%] m-auto">
                    <h2 className="text-[36px]"><b>Contact With Us!</b></h2>
                </div>
                {mensajeEnviado? <p className="bg-green-300 w-[80%] lg:w-[500px] rounded-lg m-auto">Thank you for contacting us! We will get back to you as soon as possible.</p>: <p></p>}
            </div>
            <form className='px-4 lg:px-24 py-8  m-auto text-[18px] ' onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex lg:w-[80%] m-auto">
                    <div className="lg:w-[33%] m-auto mt-8">
                        <p >Name:</p>
                        <input placeholder="Malcolm" className="px-2 w-[98%] rounded-lg" {...register("name")} />
                        <p className="bg-red-500 text-center rounded-lg w-[98%] mt-1">{errors.name?.message}</p>
                    </div>
                    <div className="lg:w-[33%] m-auto mt-8">
                        <p >Username:</p>
                        <input placeholder="Graves" className="px-2 w-[98%] rounded-lg"{...register("username")} />
                        <p className="bg-red-500 text-center rounded-lg w-[98%] mt-1">{errors.username?.message}</p>
                    </div>
                    <div className="lg:w-[33%] m-auto mt-8">
                        <p >Age:</p>
                        <input placeholder="36" type="number" className="px-2 w-[98%] rounded-lg"{...register("age")} />
                        <p className="bg-red-500 text-center rounded-lg w-[98%] mt-1">{errors.age?.message}</p>
                    </div>

                </div>
                <div className="lg:flex lg:w-[80%] m-auto">
                    <div className="lg:w-[50%] m-auto mt-8">
                        <p>Email:</p>
                        <input type="email" className="px-2 w-[98%] rounded-lg"{...register("email")} placeholder="magraves@lasles.com" />
                        <p className="bg-red-500 text-center rounded-lg w-[98%] mt-1">{errors.email?.message}</p>
                    </div>
                    <div className="lg:w-[50%] m-auto mt-8">
                        <p>Phone:</p>
                        <input type="number" className="px-2 w-[98%] rounded-lg"{...register("phone")} placeholder="+11 2233 445566" />
                        <p className="bg-red-500 text-center rounded-lg w-[98%] mt-1">{errors.phone?.message}</p>
                    </div>
                </div>
                <div className=" lg:w-[80%] m-auto">
                    <div className=" w-[99%] m-auto  mt-8">
                        <p>Your message:</p>
                        <textarea placeholder="Put your message here!" className="px-2 w-[100%] rounded-lg" {...register("mensaje")} />
                        <p className="bg-red-500 text-center rounded">{errors.mensaje?.message}</p>
                    </div>
                    <input className="block border  cursor-pointer border-red-600 rounded-full  botonSuave text-red text-[22px] w-[80%] h-[40px] m-auto mt-4" type="submit" value="Send" />
                </div>
            </form>
        </div>
        
        </>
    );
}