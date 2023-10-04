import {useState,useEffect} from 'react'
import { useRouter } from 'next/router';
import Navigation from '@/components/navigation';
import Link from 'next/link';
import Image from 'next/image';

import { Item } from '@/lib/item';
function CategoryPage() {
  const router = useRouter();
  const [slug, setSlug] = useState<string | string[]>(router.query.category || '');
  const [allItems, setAllItems] = useState<Item[]>([]);
  const [filteredItems, setFilteredItems] = useState<Item[]>(allItems);
  const [isLoading,setIsLoading] = useState(true)
  const [isAnimating, setIsAnimating] = useState(true)
  const [activeIndex, setActiveIndex] = useState(0);
  const [sortPriceOption, setSortPriceOption] = useState('');
  const [sortSizeOption,setSortSizeOption] = useState('')
  const [sortColorOption,setSortColorOption] = useState('')
  const [availableColors, setAvailableColors] = useState<string[]>([]);
  const [sortSaleOption,setSortSaleOption] = useState('')
  useEffect(() => {
    const uniqueColors = Array.from(
      new Set(allItems.flatMap((item) => item.colors))
    );
    setAvailableColors(uniqueColors);
  }, [allItems]);
  useEffect(() => {
    let tempFilteredItems = [...allItems];
  
    if (sortSaleOption === 'sale') {
      tempFilteredItems = tempFilteredItems.filter((item) => item.sale !== undefined);
    }
  
    if (sortColorOption) {
      tempFilteredItems = tempFilteredItems.filter((item) =>
        item.colors.includes(sortColorOption)
      );
    }
  
    if (sortSizeOption === 'L') {
      tempFilteredItems = tempFilteredItems.filter((item) => item.sizes.includes('L'));
    } else if (sortSizeOption === 'XL') {
      tempFilteredItems = tempFilteredItems.filter((item) => item.sizes.includes('XL'));
    } else if (sortSizeOption === 'XXL') {
      tempFilteredItems = tempFilteredItems.filter((item) => item.sizes.includes('XXL'));
    }
  
    if (sortPriceOption === 'Price descending') {
      tempFilteredItems = tempFilteredItems.sort((a, b) => {
        const priceA = a.sale ? a.price - (a.price * (a.sale / 100)) : a.price;
        const priceB = b.sale ? b.price - (b.price * (b.sale / 100)) : b.price;
        return priceB - priceA;
      });
    } else if (sortPriceOption === 'Price ascending') {
      tempFilteredItems = tempFilteredItems.sort((a, b) => {
        const priceA = a.sale ? a.price - (a.price * (a.sale / 100)) : a.price;
        const priceB = b.sale ? b.price - (b.price * (b.sale / 100)) : b.price;
        return priceA - priceB;
      });
    }
  
    setFilteredItems(tempFilteredItems);
  }, [sortSaleOption, sortColorOption, sortSizeOption, sortPriceOption, allItems]);
  

  useEffect(() => {
    if (isAnimating) {
      const interval = setInterval(() => {
        setActiveIndex((prevIndex) => (prevIndex + 1) % 3);
      }, 250);

      return () => clearInterval(interval);
    }
  }, [isAnimating]);

  const elements = [...Array(3)].map((_, index) => (
    <div
      key={index}
      className={`w-[300px] h-[400px] bg-white/50 p-6 shadow-lg rounded-lg transition-transform duration-500 transform ${
        activeIndex === index ? 'scale-105' : 'scale-100'
      }`}
    ></div>
  ));

  useEffect(() => {
    setActiveIndex(0)
    setIsAnimating(true)
    setIsLoading(true);
    fetch(`/api/Clothes?slug=${slug}`)
      .then((response) => response.json())
      .then((data) => {
        setAllItems(data);
        setIsLoading(false)
        setIsAnimating(false)
      })
      .catch((error) => {
        console.error('Error fetching items:', error);
        setIsLoading(false);
        setIsAnimating(false)
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
      <div>
      <select
          value={sortPriceOption}
          onChange={(e) => setSortPriceOption(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="Price descending">Price descending</option>
          <option value="Price ascending">Price ascending</option>
        </select>
      <select
          value={sortSizeOption}
          onChange={(e) => setSortSizeOption(e.target.value)}
        >
          <option value="">Sort</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
        <select
          value={sortColorOption}
          onChange={(e) => setSortColorOption(e.target.value)}
        >
          <option value="">Filter by Color</option>
          {availableColors.map((color) => (
            <option key={color} value={color}>
              <p>{color}</p>
            </option>
          ))}
        </select>
        <select  value={sortSaleOption}
          onChange={(e) => setSortSaleOption(e.target.value)}>
          <option value="">All</option>
          <option value="sale">On sale</option>
        </select>
      </div>
      <hr/>
      {!isLoading ? <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {filteredItems.map((item) => (
           <Link href={`/${slug}/${item.type}/${item._id}`} key={item._id}>
          <div
            className="bg-white/50 p-6 shadow-md rounded-lg hover:scale-105 duration-200 h-[100%]"
          >
            <Image
  src={item.imageUrl}
  alt={item.name}
  width={300}
  height={400}
  className="w-full h-auto mb-4 rounded-md"
/>

            <h2 className="text-xl font-semibold">{item.name}</h2>
            {item.sale ? <div className="mt-2"><p className='text-gray-500 line-through'>
									${item.price.toFixed(2)}
								</p><p className='text-green-600 font-semibold'>
									${parseFloat((item!.price - (item!.price * (item!.sale / 100))).toFixed(2))}
								</p></div> :<p className='text-green-600 font-semibold mt-2'>
									${item.price.toFixed(2)}
								</p>}
          </div>
          </Link>
        ))}
      </div> : <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
      {elements}
    </div>}
    </section>
  );
}

export default CategoryPage;
