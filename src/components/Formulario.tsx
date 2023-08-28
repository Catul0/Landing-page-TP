import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import "./botones.css";
import { useState } from "react";

const BASE_URL =
    "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";
const schema = yup.object({

    mensaje: yup.string().required("Message is a required field").max(200, "es un maximode 200 caracteres"),
    email: yup.string().required("Email is a required field"),
    name: yup.string().required("Name is a required field").max(15),
    username: yup.string().required("Username is a required field").max(15),
    phone: yup.string().required("Phone is a required field").max(15, "we, necesitas un secretario para que se acuerde de semejante numero"),
    age: yup.string().required("Age is a required field").max(2, "dale flaco, mas de 100 años tenes?"),
}).required();

type FormData = yup.InferType<typeof schema>;

export default function Formulario() {
    const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
        resolver: yupResolver(schema)
    });
    const [mensajeEnviado, setMensajeEnviado] = useState(false) 
    const onSubmit = (data: FormData) => {
        fetch(`${BASE_URL}/api/send-email`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then((response) => {
                if (response.ok) {
                    setMensajeEnviado(mensajeEnviadoo()) ;
                    console.log('Comentario enviado con éxito', response.json());
                } else {
                    console.error('Error al enviar el comentario');
                }
            })
            .catch((error) => {
                console.error('Error en la petición:', error);
            });
    }
    function mensajeEnviadoo():boolean{
        setTimeout(()=>{
            setMensajeEnviado(false);
          }, 7000);
        return true;
    }
    return (
        <>
        
        {/* ESTA ACA ES LA VERSION DESCKTOP*/}
        <div className=" w-[80%] m-auto  bg-blue-300 rounded-lg" id="formulario">
            <div className='text-center  mt-8 pt-8 '>
                <div className="w-[50%] m-auto">
                    <h2 className="text-[36px]"><b>Contact With Us!</b></h2>
                </div>
                {mensajeEnviado? <p className="bg-green-300 w-[80%] lg:w-[500px] rounded-lg m-auto">Thank you for contacting us! We will get back to you as soon as possible.</p>: <p></p>}
            </div>
            <form className='px-4 lg:px-24 2xl:px-[350px]  py-8  m-auto text-[18px] ' onSubmit={handleSubmit(onSubmit)}>
                <div className="lg:flex lg:w-[80%] m-auto">
                    <div className="lg:w-[33%] m-auto mt-8">
                        <p >Name:</p>
                        <input className="w-[98%] rounded-lg" {...register("name")} />
                        <p>{errors.name?.message}</p>
                    </div>
                    <div className="lg:w-[33%] m-auto mt-8">
                        <p >Username:</p>
                        <input className="w-[98%] rounded-lg"{...register("username")} />
                        <p>{errors.username?.message}</p>
                    </div>
                    <div className="lg:w-[33%] m-auto mt-8">
                        <p >Age:</p>
                        <input type="number" className="w-[98%] rounded-lg"{...register("age")} />
                        <p>{errors.age?.message}</p>
                    </div>

                </div>
                <div className="lg:flex lg:w-[80%] m-auto">
                    <div className="lg:w-[50%] m-auto mt-8">
                        <p>Email:</p>
                        <input type="email" className="w-[98%] rounded-lg"{...register("email")} />
                        <p>{errors.email?.message}</p>
                    </div>
                    <div className="lg:w-[50%] m-auto mt-8">
                        <p>Phone:</p>
                        <input type="number" className="w-[98%] rounded-lg"{...register("phone")} />
                        <p>{errors.phone?.message}</p>
                    </div>
                </div>
                <div className=" lg:w-[80%] m-auto">
                    <div className=" w-[99%] m-auto  mt-8">
                        <p>Your message:</p>
                        <textarea className=" w-[100%] rounded-lg" {...register("mensaje")} />
                        <p>{errors.mensaje?.message}</p>
                    </div>
                    <input className="block border  cursor-pointer border-red-600 rounded-full  botonSuave text-red text-[22px] w-[80%] h-[40px] m-auto mt-4" type="submit" value="Send" />
                </div>
            </form>
        </div>
        
        </>
    );
}