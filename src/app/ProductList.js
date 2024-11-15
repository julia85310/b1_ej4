const productosData = [{
    nombre: "zanahoria",
    precio: "3.5€",
    descripcion: "ecológica"
},{
    nombre: "papa",
    precio: "3500€",
    descripcion: "divina" 
},{
    nombre: "pimientos",
    precio: "3.6€",
    descripcion: "guays"
}];
import Product from "./Product";
export default function ProductList(){
    return <>
        {productosData.map((producto) => (
                <Product 
                    key = {producto.nombre} 
                    nombre = {producto.nombre} 
                    precio = {producto.precio} 
                    descripcion= {producto.descripcion}>
                </Product>
        ))};
    </>
}