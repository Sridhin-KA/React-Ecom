import { useState,useEffect } from "react";
import {Navigate,Link} from 'react-router-dom'

function Cart() {
const [cart,setCart] = useState([])

useEffect(()=>{
    const storeddata = JSON.parse(localStorage.getItem('Cart')) || []
    setCart(storeddata)
},[])
const removeItem = (index)=>{
let updatedcart = [...cart]
updatedcart.splice(index,1)

setCart(updatedcart)
localStorage.setItem('Cart',JSON.stringify(updatedcart))
alert('Item removed')

}

const total = cart.reduce((sum,item)=>{

    return sum+Number(item.price)

},0)
return(
    <div>
        <h2>Cart</h2>
        {cart.length===0 ?(
                <p>No products found</p>
            ):(
                cart.map((item,index) => (
                    <div className='product-card' key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={()=> removeItem(index)}>Remove</button>
                    </div>
                ))
            )}

            <h3>Total Amount: {total}</h3>
            <Link to="/checkout"><button>Proceed to Checkout</button></Link>

    </div>
)
}
export default Cart