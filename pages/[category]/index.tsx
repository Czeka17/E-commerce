// pages/[category].tsx
import {useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import Navigation from '@/components/navigation';
import { dummyItems } from '@/dummyItems';
import Link from 'next/link';
import Image from 'next/image';
import backpack from '../../public/images/backpack.png'
import { Item } from '@/lib/item';
function CategoryPage() {
  const router = useRouter();
  const [slug, setSlug] = useState<string | string[]>(router.query.category || '');
  const [filteredItems,setFilteredItems] = useState<Item[]>([])
  const [isLoading,setIsLoading] = useState(true)

  useEffect(() => {
    fetch(`/api/Clothes?slug=${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setFilteredItems(data);
        setIsLoading(false)
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
      });
  }, [slug]);

  useEffect(() => {
    if (router.query.category) {
      setSlug(router.query.category);
    }
  }, [router.query.category]);

  return (
    <section className="max-w-[1200px] m-auto">
      <Navigation />
      <h2 className="text-3xl font-semibold p-4">Category: {slug}</h2>
      {!isLoading ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredItems.map((item) => (
           <Link href={`/${slug}/${item.type}/${item._id}`} key={item._id}>
          <div
            className="bg-white p-6 shadow-md rounded-lg hover:scale-105 duration-200"
          >
            <Image
  src={item.imageUrl}
  alt={item.name}
  width={300}
  height={400}
  className="w-full h-auto mb-4 rounded-md"
/>

            <h2 className="text-xl font-semibold">{item.name}</h2>
            <p className="text-green-600 font-semibold mt-2">
              Price: ${item.price.toFixed(2)}
            </p>
          </div>
          </Link>
        ))}
      </div> : <div className='w-full h-full flex justify-center items-center'><p>Loading...</p></div>}
    </section>
  );
}

export default CategoryPage;
