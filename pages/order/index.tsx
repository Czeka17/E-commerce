import Navigation from '@/components/navigation'
import { ClothesContext } from '@/store/clothes-context'
import {useContext,useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { promoCode } from '@/lib/promoCodes'
function OrderPage(){
  const [enteredCode, setEnteredCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
    const clothesCtx = useContext(ClothesContext)
    const orderedItems = clothesCtx.items
    const handleCodeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const code = e.target.value;
      const matchedCode = promoCode.find((promo) => promo.code === code);
  
      if (matchedCode) {

        setDiscountPercentage(matchedCode.discountPercentage);
      } else {

        setDiscountPercentage(0);
      }
      setEnteredCode(code);
    };
    const handleIncreaseAmount = (itemId:string) => {
        clothesCtx.increaseItemAmount(itemId);
      };
    
      const handleDecreaseAmount = (itemId:string) => {
        clothesCtx.decreaseItemAmount(itemId);
      };
    return <section className='max-w-[1200px] m-auto'>
        <Navigation/>
        <div>
            {orderedItems.map((item,index) => (
              <div key={index} >
                 <div className="flex justify-around items-center">
                 <div className="bg-white m-6 shadow-md rounded-lg">
                 <Image src={item.imageUrl} alt={item.name} width={200} height={200} /></div>
              <div className="flex flex-col">
              <p>{item.name}</p>
               <p>${item.price} per item</p>
               <div className="flex flex-row items-center justify-center">
                 <p className="mr-2">Amount:</p><div className="flex flex-row justify-center items-center border-2 border-gray-500 rounded">
                 <button className="px-3 py-1 bg-gray-200 text-gray-600 rounded-l hover:bg-gray-300 focus:outline-none" disabled={item.amount === 1} onClick={() => handleDecreaseAmount(item._id)}>-</button><p className="px-2">{item.amount}</p><button disabled={item.amount === 5} onClick={() => handleIncreaseAmount(item._id)} className="px-3 py-1 bg-gray-200 text-gray-600 rounded-r hover:bg-gray-300 focus:outline-none">+</button></div>
               </div>
               <p>Total price:${item.totalPrice.toFixed(2)}</p>
               <p>Color: {item.color}</p>
               <p>Size: {item.size}</p>
              </div>
             </div>
             <hr/>
             </div>
            ))}
        <div className='flex justify-between'>
        <div className='flex'>
           <label>Code</label>
            <input
          className="border-2"
          value={enteredCode}
          onChange={handleCodeChange}
        />
        {discountPercentage !== 0 && <p>-{discountPercentage}%</p>}
           </div>
           <div>
           <p className="font-semibold">
            Total Price: ${(
              clothesCtx.price - (clothesCtx.price * discountPercentage) / 100
            ).toFixed(2)}
          </p></div>
        </div>
            <div className='flex justify-end'>
            <Link href='/order/credentials'><button className='border-2 px-4 py-2'>Buy</button></Link>
            </div>
        </div>
    </section>
}
export default OrderPage