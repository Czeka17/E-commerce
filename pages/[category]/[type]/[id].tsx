// pages/[category]/[id].tsx
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Navigation from '@/components/navigation';


import { ClothesContext } from '@/store/clothes-context';
import { Item } from '@/lib/item';
import ProductCard from '@/components/ProductCard';
const ItemDetailPage = () => {
  const router = useRouter();
  const clothesCtx = useContext(ClothesContext)
  const { id } = router.query;
const [item,setItem] = useState<Item>()
const [isLoading,setIsLoading] = useState(true)
const [pickedColor,setPickedColor] = useState('')
const [pickedSize,setPickedSize] = useState('')
const [amount,setAmount] = useState(1)
function increaseAmount(){
  setAmount((prevAmount) => prevAmount + 1)
}
function decreaseAmount(){
  setAmount((prevAmount) => prevAmount - 1)
}
function pickColor(color:string){
  setPickedColor(color)
}
function pickSize(size:string){
  setPickedSize(size)
}

  useEffect(() => {
    if(id){
      setIsLoading(true)
    fetch('/api/exactItem', {
      method:"POST",
      body: JSON.stringify({id:id}),
      headers: {
        "Content-Type": "application/json",
      },
    }) .then((response) => response.json())
    .then((data) => {
      setItem(data)
      setIsLoading(false)
    })
    .catch((error) => {
      console.error('Error fetching items:', error);
      setIsLoading(false)
    });
    }
  },[id])

  let discountPrice :number
  let finalPrice : number
  let price: number
if(item){
  discountPrice = parseFloat((item!.price - (item!.price * (item!.sale / 100))).toFixed(2));

  finalPrice = item.sale ? (discountPrice * amount) : parseFloat((item.price * amount).toFixed(2));

  price = item.sale ? discountPrice : item.price
}


  return (
    <section className="max-w-[1200px] m-auto">
      <Navigation/>
    {item && !isLoading && <div className='flex flex-row justify-around items-center mt-10'>
   <ProductCard item={item.imageUrl} name={item.name}/>
    <div>
    <h2 className='font-bold'>{item.name}</h2>
      <p>{item.description}</p>
     <div className='flex flex-row justify-start my-2'>
     {item.sizes?.map((size,index) => (
        <div key={index} className={`border-2 mx-2 border-black border-solid cursor-pointer hover:bg-black hover:text-white ${size === pickedSize ? 'bg-black text-white' : ''}`} onClick={() => pickSize(size)}><p className='p-2'>{size}</p></div>
      ))}
     </div>
     <div className='flex flex-row justify-start'>
  {item.colors?.map((color, index) => (
    <div key={index} onClick={() => pickColor(color)} className={`rounded-full w-8 h-8 border-2 border-black mx-2 cursor-pointer ${pickedColor === color ? 'border-4 border-blue-500': ''}`} style={{backgroundColor: color}}>
    </div>
  ))}
</div>
<div className="flex flex-row justify-between items-center border-2 border-gray-500 rounded my-2">
      <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-l hover:bg-gray-300 focus:outline-none" onClick={decreaseAmount} disabled={amount === 1}>-</button>
      <p>{amount}</p>
      <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r hover:bg-gray-300 focus:outline-none" onClick={increaseAmount} disabled={amount === 5}>+</button>
      </div>
      {item.sale ? <div><p className="text-gray-500 line-through">${item.price?.toFixed(2)}</p><p>${discountPrice!}</p></div> : <p>Price: ${item.price?.toFixed(2)}</p>}
      {amount > 1 && !item.sale && <p>Total Price: ${(item.price * amount)?.toFixed(2)}</p>}
      {amount > 1 && item.sale && <p>Total Price: ${(discountPrice! * amount)?.toFixed(2)}</p>}
      <button disabled={pickedColor === '' && pickedSize === ''} onClick={() => clothesCtx.addItem({name:item.name,imageUrl:item.imageUrl,_id:item._id,price:price!,totalPrice:finalPrice!,color:pickedColor,size:pickedSize,amount:amount})}>Add to cart</button>
    </div>
     </div>}
     {!item && !isLoading && <div className='w-full h-full flex justify-center items-center'><p>No item found</p></div>}
    </section>
  );
};

export default ItemDetailPage;
