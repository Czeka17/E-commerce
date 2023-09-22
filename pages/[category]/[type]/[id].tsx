// pages/[category]/[id].tsx
import React from 'react';
import { useRouter } from 'next/router';
import { dummyItems } from '@/dummyItems';
import Navigation from '@/components/navigation';
import Image from 'next/image';
import backpack from '../../../public/images/backpack.png'
const ItemDetailPage = () => {
  const router = useRouter();
  const { category, id } = router.query;

  // Find the item with the matching id in your data
  const itemId = typeof id === 'string' ? parseInt(id, 10) : null;

  // Find the item with the matching id in your data
  const item = itemId ? dummyItems.find((item) => item.id === itemId) : null;

  if (!item) {
    return <div>Item not found</div>;
  }

  return (
    <section className="max-w-[1200px] m-auto">
      <Navigation/>
     <div className='flex flex-row justify-around items-center'>
     <div
            className="bg-white p-6 shadow-md rounded-lg"
          >
      <Image
  src={backpack}
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
      <button>Add to cart</button>
    </div>
     </div>
    </section>
  );
};

export default ItemDetailPage;
