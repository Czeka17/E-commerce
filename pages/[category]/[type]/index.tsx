// pages/[category].tsx
import {useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import Navigation from '@/components/navigation';
import { dummyItems } from '@/dummyItems';
import Link from 'next/link';
import Image from 'next/image';
import backpack from '../../../public/images/backpack.png'
interface Item {
    id: number;
    category: string;
    type: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }
function TypePage() {
  const router = useRouter();
  const [slug, setSlug] = useState<string | string[]>(router.query.type || '');
  const [filteredItems,setFilteredItems] = useState<Item[]>([])
  const categoryToFilter = Array.isArray(slug) ? slug.join(',') : slug;

  const [category,setCategory] = useState<string | string[]>(router.query.category || '');
  const Filter = Array.isArray(category) ? category.join(',') : category;

  useEffect(() => {
    if (router.query.type && category === 'all') {

      const filteredItems = dummyItems.filter((item) =>
        item.type.toLowerCase() === categoryToFilter.toLowerCase()
      );
      setFilteredItems(filteredItems);
    }else{
        const filteredItems = dummyItems.filter((item) =>
        item.type.toLowerCase() === categoryToFilter.toLowerCase()
      );
      const items = filteredItems.filter((item)=> item.category.toLowerCase() === Filter.toLowerCase())
      setFilteredItems(items)
    }
  }, [router.query.type, slug]);


  useEffect(() => {
    if (router.query.type) {
      setSlug(router.query.type);
    }
    if(router.query.category){
        setCategory(router.query.category)
    }
  }, [router.query.type]);
  

  return (
    <section className="max-w-[1200px] m-auto">
      <Navigation />
      <h2 className="text-3xl font-semibold p-4">Category: {slug}</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredItems.map((item) => (
           <Link href={`/${category}/${item.type}/${item.id}`} key={item.id}>
          <div
            className="bg-white p-6 shadow-md rounded-lg"
          >
            <Image
  src={backpack}
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
      </div>
    </section>
  );
}

export default TypePage;