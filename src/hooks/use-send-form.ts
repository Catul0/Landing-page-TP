import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useState } from "react";



const useSendForm = () => {
    const BASE_URL =
        "https://6xrb5goi1l.execute-api.us-east-1.amazonaws.com";
    const schema = yup.object({

        mensaje: yup.string().required("Message is a required field").max(200, "Es un maximode 200 caracteres"),
        email: yup.string().required("Email is a required field").email("It must be an email format, with '@' and '.something' "),
        name: yup.string().required("Name is a required field").max(15),
        username: yup.string().required("Username is a required field").max(15),
        phone: yup.string().required("Phone is a required field").min(9).max(15, "Debes necesitas un secretario para que se acuerde de semejante numero"),
        age: yup.string().required("Age is a required field").max(2, "Dale flaco, mas de 100 años tenes?"),
    }).required();

    type FormData = yup.InferType<typeof schema>;
    const { register, handleSubmit, formState: { errors }, reset } = useForm<FormData>({
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
                    setMensajeEnviado(mensajeEnviadoo);
                    console.log('Comentario enviado con éxito', response.json());
                    reset()
                } else {
                    console.error('Error al enviar el comentario');
                }
            })
            .catch((error) => {
                console.error('Error en la petición:', error);
            });
    }
    function mensajeEnviadoo(): boolean {
        setTimeout(() => {
            setMensajeEnviado(false);
        }, 7000);
        return true;
    }
  
    return {
        onSubmit,
        errors,
        register,
        handleSubmit,
        mensajeEnviado,
        reset
    }
}


export default useSendForm;
