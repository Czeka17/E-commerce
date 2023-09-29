import { ClothesContext } from "@/store/clothes-context";
import { useContext } from 'react';
import Image from "next/image";
import Link from "next/link";
import CartItem from "./cartItem";
interface CartProps{
    closeModal:() => void
}
function Cart({closeModal}:CartProps) {
  const clothesCtx = useContext(ClothesContext);

  return (
    <div className="fixed inset-0 flex justify-center items-center z-50 bg-black bg-opacity-50">
     {clothesCtx.items.length > 0 ? <div className="bg-white p-16 max-h-[80%] overflow-auto relative">
        <h2 className="text-2xl font-semibold mb-4">Shopping Cart</h2>
        <CartItem/>
        <div className="mt-4 flex flex-row justify-between items-center">
          <p className="font-semibold">Total Price: ${clothesCtx.price.toFixed(2)}</p>
          <Link href='/order'><button>Order</button></Link>
        </div>
        <button className="absolute top-0 right-0 p-2" onClick={closeModal}>X</button>
      </div>: <div className="bg-white p-16 max-h-[80%] overflow-auto relative"><p>No items added to cart yet!</p><button className="absolute top-0 right-0 p-2" onClick={closeModal}>X</button></div>}
    </div>
  );
}

export default Cart;
