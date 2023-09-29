import Navigation from '@/components/navigation'
import { ClothesContext } from '@/store/clothes-context'
import {useContext,useState} from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { promoCode } from '@/lib/promoCodes'
import CartItem from '@/components/cartItem'
function OrderPage(){
  const [enteredCode, setEnteredCode] = useState("");
  const [discountPercentage, setDiscountPercentage] = useState(0);
    const clothesCtx = useContext(ClothesContext)
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
    return <section className='max-w-[1200px] m-auto'>
        <Navigation/>
        <div>
          <div className='flex justify-center items-center'>
           <CartItem/>
           </div>
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