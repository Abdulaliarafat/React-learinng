export default function Mobiles({product}){
   
    return (
        <div className="mobile">
            <h2>Name: {product.name}</h2>
            <p>price: {product.price}</p>
        </div>
    )
}