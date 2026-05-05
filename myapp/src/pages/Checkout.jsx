import { useEffect,useState } from "react";


function Checkout(){
    const [cartitems,setCartitems] = useState([]);

    const user = JSON.parse(localStorage.getItem('loggeduser'))

    useEffect(()=>{
        const storedproducts = JSON.parse(localStorage.getItem('Cart')) || []
        setCartitems(storedproducts)
    },[])

    const mycart = cartitems.filter(item => item.user === user.Email)

    const total = mycart.reduce((sum,item)=>{
        return sum+Number(item.price)
    },0)
    const handlePayment = ()=>{
        let allcarts = JSON.parse(localStorage.getItem('Cart')) || []
         const balancecart = allcarts.filter(item => item.user !== user.Email)

         localStorage.setItem('Cart',JSON.stringify(balancecart))

         alert('Payment successful')
         setCartitems([])
     
    }
    return(
        <div>
            <h2>Checkout</h2>
            {mycart.length===0 ?(
                <p>No products found</p>
            ):(
                mycart.map((item,index) => (
                    <div className='product-card' key={index}>
                        <h3>{item.name}</h3>
                        <p>Price: ${item.price}</p>
                    </div>
                ))
            )}
            <p>Total: ${total.toFixed(3)}</p>
            <button onClick={handlePayment}>Pay Now</button>
        </div>
    )
}

export default Checkout