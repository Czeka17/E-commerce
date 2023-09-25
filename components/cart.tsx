import { ClothesContext } from "@/store/clothes-context";
import { useContext } from 'react';
import Image from "next/image";
interface CartProps{
    closeModal:() => void
}
function Cart({closeModal}:CartProps) {
  const clothesCtx = useContext(ClothesContext);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
      <div className="bg-white p-16">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <div className="space-y-4">
          {clothesCtx.items.map((item) => (
            <div key={item._id} className="flex justify-between">
                <div>
                <Image src={item.imageUrl} alt={item.name} width={200} height={200} /></div>
              <p>{item.name}</p>
              <p>${item.price.toFixed(2)}</p>
            </div>
          ))}
        </div>
        <div className="mt-4">
          <p className="font-semibold">Total Price: ${clothesCtx.price.toFixed(2)}</p>
        </div>
        <button onClick={closeModal}>X</button>
      </div>
    </div>
  );
}

export default Cart;
