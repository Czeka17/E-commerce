import { useContext } from 'react';
import { ClothesContext } from "@/store/clothes-context";
import Image from "next/image";

function CartItem(){
    const clothesCtx = useContext(ClothesContext);

  const handleIncreaseAmount = (itemId:string) => {
    clothesCtx.increaseItemAmount(itemId);
  };

  const handleDecreaseAmount = (itemId:string) => {
    clothesCtx.decreaseItemAmount(itemId);
  };

  
    return   <div className="space-y-4">
          {clothesCtx.items.map((item) => (
            <div key={item._id} className="flex justify-between">
                <div>
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
          ))}
        </div>
}
export default CartItem;