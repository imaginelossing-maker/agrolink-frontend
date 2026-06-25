import { useEffect, useState } from "react";

function Cart() {

const [cart,setCart] = useState([]);

useEffect(()=>{

const savedCart =
JSON.parse(localStorage.getItem("cart")) || [];

setCart(savedCart);

},[]);

const removeItem=(index)=>{

const updated=[...cart];

updated.splice(index,1);

setCart(updated);

localStorage.setItem(
"cart",
JSON.stringify(updated)
);

};

const total =
cart.reduce(
(sum,item)=>
sum + item.price * item.quantity,
0
);

return (

<div className="p-6">

<h1 className="text-2xl font-bold mb-6">
My Cart
</h1>

{cart.length===0 ? (

<p>Cart is empty</p>

) : (

cart.map((item,index)=>(

<div
key={index}
className="bg-white p-4 rounded-lg shadow mb-4 flex gap-4"
>

<img
src={item.image}
className="w-20 h-20 rounded"
/>

<div className="flex-1">

<h2>{item.name}</h2>

<p>
₦{item.price.toLocaleString()}
</p>

<p>
Quantity: {item.quantity}
</p>

</div>

<button
onClick={()=>removeItem(index)}
className="bg-red-500 text-white px-3 py-2 rounded"
>

Remove

</button>

</div>

))

)}

<h2 className="font-bold mt-6">

Total: ₦{total.toLocaleString()}

</h2>

</div>

);

}

export default Cart;