import { createContext, ReactNode,useState,useEffect } from "react";
import { Item } from "@/lib/item";
interface CartItem {
    _id: string;
    name: string;
    totalPrice: number,
    price:number,
    size: string,
    color: string,
    imageUrl: string;
    amount: number
  }
interface ClothesContext{
    price:number,
    items:CartItem[],
    addItem: (item:CartItem) => void,
    featuredItems: Item[],
    increaseItemAmount: (itemId: string) => void;
  decreaseItemAmount: (itemId: string) => void;
}

export const ClothesContext = createContext<ClothesContext>({
    price:0,
    items:[],
    featuredItems:[],
    addItem: (item:CartItem) => {},
    increaseItemAmount: (itemId:string) => {},
    decreaseItemAmount: (itemId: string) => {}
})

export const ClothesProvider = ({ children }: { children: ReactNode }) => {
    const [price,setPrice] = useState(0)
    const [items,setItems] = useState<CartItem[]>([])
    const [featuredItems, setFeaturedItems] = useState<Item[]>([]);

    useEffect(() => {
      fetch('/api/Featured')
          .then((response) => response.json())
          .then((data) => {
              setFeaturedItems(data);
          })
          .catch((error) => {
              console.error('Error fetching featured items:', error);
          });
  }, []);
  
    function addItem({name,imageUrl,_id,totalPrice,size,color,price,amount}:CartItem){
        const item = {
            _id:_id,
            name:name,
            imageUrl:imageUrl,
            totalPrice:totalPrice,
            size:size,
            price:price,
            color:color,
            amount:amount
        }
        setItems(prevItems => [...prevItems, item])
        setPrice(prevPrice => prevPrice + totalPrice)
        console.log(items)
    }
    function increaseItemAmount(itemId: string) {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item._id === itemId
              ? { ...item, amount: item.amount + 1, totalPrice: item.totalPrice + item.price }
              : item
          )
        );
        setPrice((prevPrice) =>
          prevPrice +
          (items.find((item) => item._id === itemId)?.price || 0)
        );
      }
      
      function decreaseItemAmount(itemId: string) {
        setItems((prevItems) =>
          prevItems.map((item) =>
            item._id === itemId && item.amount > 0
              ? { ...item, amount: item.amount - 1, totalPrice: item.totalPrice - item.price }
              : item
          )
        );
        setPrice((prevPrice) =>
          prevPrice -
          (items.find((item) => item._id === itemId)?.price || 0)
        );
      }
      

    const value = {
        price:price,
        items:items,
        addItem:addItem,
        featuredItems: featuredItems,
        increaseItemAmount: increaseItemAmount,
    decreaseItemAmount: decreaseItemAmount,
    }
    return <ClothesContext.Provider value={value}>{children}</ClothesContext.Provider>

    
}