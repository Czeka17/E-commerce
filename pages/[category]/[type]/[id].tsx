// pages/[category]/[id].tsx
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { dummyItems } from '@/dummyItems';
import Navigation from '@/components/navigation';
import Image from 'next/image';

import { ClothesContext } from '@/store/clothes-context';
import { Item } from '@/lib/item';
const ItemDetailPage = () => {
  const router = useRouter();
  const clothesCtx = useContext(ClothesContext)
  const { category, id } = router.query;
const [item,setItem] = useState<Item>()
const [isLoading,setIsLoading] = useState(true)
const [color,setColor] = useState('')
const [size,setSize] = useState('')
const [amount,setAmount] = useState(1)
function increaseAmount(){
  setAmount((prevAmount) => prevAmount + 1)
}
function decreaseAmount(){
  setAmount((prevAmount) => prevAmount - 1)
}
function pickColor(color:string){
  setColor(color)
}
function pickSize(size:string){
  setSize(size)
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



  return (
    <section className="max-w-[1200px] m-auto">
      <Navigation/>
    {item && !isLoading && <div className='flex flex-row justify-around items-center'>
     <div
            className="bg-white p-6 shadow-md rounded-lg"
          >
      <Image
  src={item.imageUrl}
  alt={item.name}
  width={300}
  height={400}
  className="mb-4 rounded-md"
/>
</div>
    <div>
    <h2>{item.name}</h2>
      <p>{item.description}</p>
     <div className='flex flex-row justify-around'>
     {item.sizes?.map((size,index) => (
        <div key={index} className='border-2 border-black border-solid cursor-pointer' onClick={() => pickSize(size)}><p className='p-2'>{size}</p></div>
      ))}
     </div>
     <div className='flex flex-row justify-center'>
  {item.colors?.map((color, index) => (
    <div key={index} onClick={() => pickColor(color)} className={`rounded-full w-8 h-8 border-2 border-black mx-2 cursor-pointer bg-${color === 'white' || color === 'black' ? color : `${color}-500`}`}>
    </div>
  ))}
</div>
<div className="flex flex-row justify-between items-center border-2 border-gray-500 rounded my-2">
      <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-l hover:bg-gray-300 focus:outline-none" onClick={decreaseAmount} disabled={amount === 1}>-</button>
      <p>{amount}</p>
      <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r hover:bg-gray-300 focus:outline-none" onClick={increaseAmount} disabled={amount === 5}>+</button>
      </div>
      <p>Price: ${item.price?.toFixed(2)}</p>
      {amount > 1 && <p>Total Price: ${(item.price * amount)?.toFixed(2)}</p>}
      <button disabled={color === '' && size === ''} onClick={() => clothesCtx.addItem({name:item.name,imageUrl:item.imageUrl,_id:item._id,price:item.price,totalPrice:parseFloat((item!.price * amount).toFixed(2)),color:color,size:size,amount:amount})}>Add to cart</button>
    </div>
     </div>}
    </section>
  );
};

export default ItemDetailPage;
