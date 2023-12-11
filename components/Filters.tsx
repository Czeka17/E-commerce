import {useState,useEffect} from 'react'
import { Item } from '@/lib/item';

interface FiltersProps{
    items:Item[],
    HandleChangeFilter:(items:Item[]) => void 
}
function Filters({items,HandleChangeFilter}:FiltersProps){
    
    const [sortPriceOption, setSortPriceOption] = useState('');
    const [sortSizeOption,setSortSizeOption] = useState('')
    const [sortColorOption,setSortColorOption] = useState('')
    const [availableColors, setAvailableColors] = useState<string[]>([]);
    const [sortType,setSortType] = useState('')
    const [sortSaleOption,setSortSaleOption] = useState('')
    useEffect(() => {
        const uniqueColors = Array.from(
          new Set(items.flatMap((item) => item.colors))
        );
        setAvailableColors(uniqueColors);
      }, [items]);
    useEffect(() => {
        let tempFilteredItems = [...items];
      
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
        if(sortType){
          tempFilteredItems = tempFilteredItems.filter((item) => item.type === sortType )
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
      
        HandleChangeFilter(tempFilteredItems);
      }, [sortSaleOption, sortColorOption, sortSizeOption, sortPriceOption, items, sortType]);
      
    return <div>
    <select
        value={sortPriceOption}
        onChange={(e) => setSortPriceOption(e.target.value)}
        className='mr-2'
      >
        <option value="">Sort</option>
        <option value="Price descending">Price descending</option>
        <option value="Price ascending">Price ascending</option>
      </select>
    <select
    className='m-2'
        value={sortSizeOption}
        onChange={(e) => setSortSizeOption(e.target.value)}
      >
        <option value="">Sort</option>
        <option value="L">L</option>
        <option value="XL">XL</option>
        <option value="XXL">XXL</option>
      </select>
      <select
    className='m-2'
        value={sortType}
        onChange={(e) => setSortType(e.target.value)}
      >
        <option value="">Type</option>
        <option value="hoodie">Hoodie</option>
        <option value="sport">Sport</option>
        <option value="longsleeve">Longsleeve</option>
      </select>
      <select
      
      className='relative m-2'
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
      <select className='m-2'  value={sortSaleOption}
        onChange={(e) => setSortSaleOption(e.target.value)}>
        <option value="">All</option>
        <option value="sale">On sale</option>
      </select>
    </div>
}
export default Filters