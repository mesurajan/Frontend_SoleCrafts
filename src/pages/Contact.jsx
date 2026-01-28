import React from 'react'
import { useState , useEffect } from 'react';
import mockProducts from '../data/mockproducts';
function Contact() {

const [count, setCount] = useState(0);
const[cart,setCart] = useState(0);
const [name, setName] = useState("");

const Products=[
    {id:1,name:"SportShoes",price:"Rs.2000"},
        {id:2,name:"PartyShoes",price:"Rs.2000"},
            {id:3,name:"Shoes",price:"Rs.2000"}
]
useEffect(()=>{
    alert("Welcome to Contact Page");
},[]);

useEffect(()=>
{
    console.log(mockProducts);
},[]);


const [clicked, setClicked] = useState(false);
useEffect(()=>{
    if (clicked)
    {
        console.log(mockProducts);
    }
}, [clicked]);


  return (
    <div className='container px-10'>
        <h1>We Will Be learning About States and Its uses</h1>

         <div className='py-6'><p>Example 01</p>
              <h2 >Count: {count}</h2>
                <button 
                onClick={() => {setCount(count + 1);
                    console.log(count+1);
                }}
                className='buynow '
                >Increase</button>
        </div> 


          <div className='py-6'><h1>Example 02</h1>
         <p>Cart Items: {cart}</p>
          
          <button onClick={() =>
          {setCart(cart+1);
          console.log(cart+1);

          }} className='buynow'>Add to Cart</button>
         
          
        </div>

        <div className='py-8'>
        <input 
            type="text" placeholder='Enter your name'
            value={name}
            onChange={(e) => setName(e.target.value)}
        />
        <p>Your name is: {name}</p>
        </div>
            
        <div>
            <h1>usestate and useEffect combined example</h1>
            <button className="buynow" onClick={() => setClicked(true)}>
            product
            </button>
        </div>


        <div>
            <h1>Product details</h1>
            {Products.map((item)=>(
                 <p key={item.id}>
                <h3>Product Id :{item.id} | Name :{item.name} | Price ={item.price} </h3>
                
            </p>

            )
           
            )}
        </div>

      
  
   </div>
  ) 
}

export default Contact