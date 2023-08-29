
type comentariosProps={
  imagen:string,
  nombre:string,
  comentario:string
};
const ComentariosCarrousel = (props:comentariosProps) => {
  const imagen=props.imagen;
  const nombre=props.nombre;
  const comentario=props.comentario;
  return (
    <div className=' mr-4 '  >
      <div className="max-w-sm w-full  lg:max-w-full lg:flex w-[500px] h-[200px] bg-white rounded-xl border-black border ">
        <div className="   p-4 flex flex-col justify-between leading-normal">
          <div className="flex items-center  ">
            <div className="flex">
              <img className="w-10 h-10 rounded-full mr-4" src={imagen} alt="Avatar" />
              <div className="text-sm ">
                <p className="text-gray-900 font-bold text-xl  w-[300px]">{nombre}</p>
              </div>
            </div>
          </div>
          <div className="h-[100px]">
            <p className="text-gray-700 text-base">"{comentario}"</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ComentariosCarrousel