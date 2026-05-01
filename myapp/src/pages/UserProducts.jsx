import React,{useState,useEffect} from 'react'
import './UserProducts.css' 
function UserProducts() {
    const [product,setProduct] = useState([])

    useEffect(()=>{
        const storedproducts = JSON.parse(localStorage.getItem('Products')) ||[]
        setProduct(storedproducts)
    },[])
    const addtocart = (product)=>{
        let user = JSON.parse(localStorage.getItem('loggeduser')) 
        let cart = JSON.parse(localStorage.getItem('Cart')) ||[]
        const newitem = {
            ...product,
            user:user.Email
        }
        cart.push(newitem)
        localStorage.setItem('Cart',JSON.stringify(cart))
        alert('Product added to cart')
    }
    return (
        <div>
            {product.length===0 ?(
                <p>No products found</p>
            ):(
                product.map((item,index) => (
                    <div className='product-card' key={index}>
                        <h3>{item.name}</h3>
                        <p>{item.price}</p>
                        <button onClick={()=>addtocart(item)}>Add to Cart</button>
                    </div>
                ))
            )}
        </div>
    )
}

export default UserProducts
