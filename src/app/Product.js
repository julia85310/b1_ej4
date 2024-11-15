export default function Product({nombre, precio, descripcion}){
    return <>
        <h2>{nombre}</h2>
        <h3>{precio}</h3>
        <p>{descripcion}</p>
    </>
}