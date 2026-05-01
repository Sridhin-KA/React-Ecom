import React,{useState} from 'react'

function AdminProduct() {
    const [product,setProduct] = useState({
        name:'',
        price:''
    })
    const handlechange = (e)=>{
        setProduct({
            ...product,[e.target.name]:e.target.value
        })
    }
        const handlesubmit =()=>{
        if (!product.name && !product.price){
            alert('all fields are required')
            return
        }
        let allproducts = JSON.parse(localStorage.getItem('Products')) || []
       
        

        const exist = allproducts.find(i=>i.name === product.name )

        if (exist){
            alert('email already registerd')
            return
        }
        allproducts.push(product)
        localStorage.setItem('Products',JSON.stringify(allproducts))
        alert('Product added successfully')
      
    }
    return (
        <div>
            <h2>Products</h2>
            <input type="text" name='name' placeholder='Enter product name' onChange={handlechange}/>
            <br /><br />
            <input type="number" name='price' placeholder='Enter price' onChange={handlechange}/>
            <br /><br />
            <button onClick={handlesubmit}>Add product</button>
        </div>
    )
}

export default AdminProduct
