// pages/[category]/[id].tsx
import React, { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { dummyItems } from '@/dummyItems';
import Navigation from '@/components/navigation';
import Image from 'next/image';

import { ClothesContext } from '@/store/clothes-context';
interface Item {
  _id: string;
  category: string;
  type: string;
  name: string;
  price: number;
  description: string;
  imageUrl: string;
}
const ItemDetailPage = () => {
  const router = useRouter();
  const clothesCtx = useContext(ClothesContext)
  const { category, id } = router.query;
const [item,setItem] = useState<Item>()


  useEffect(() => {
    fetch('/api/exactItem', {
      method:"POST",
      body: JSON.stringify({id:id}),
      headers: {
        "Content-Type": "application/json",
      },
    }) .then((response) => response.json())
    .then((data) => {
      setItem(data)
    })
    .catch((error) => {
      console.error('Error fetching items:', error);
    });
  },[])


  return (
    <section className="max-w-[1200px] m-auto">
      <Navigation/>
    {item && <div className='flex flex-row justify-around items-center'>
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
      <p>Price: ${item.price.toFixed(2)}</p>
      <button onClick={() => clothesCtx.addItem(item)}>Add to cart</button>
    </div>
     </div>}
    </section>
  );
};

export default ItemDetailPage;
