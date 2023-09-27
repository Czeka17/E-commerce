import { createContext, ReactNode,useState } from "react";
interface Item {
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
    items:Item[],
    addItem: (item:Item) => void
    increaseItemAmount: (itemId: string) => void;
  decreaseItemAmount: (itemId: string) => void;
}

export const ClothesContext = createContext<ClothesContext>({
    price:0,
    items:[],
    addItem: (item:Item) => {},
    increaseItemAmount: (itemId:string) => {},
    decreaseItemAmount: (itemId: string) => {}
})

export const ClothesProvider = ({ children }: { children: ReactNode }) => {
    const [price,setPrice] = useState(0)
    const [items,setItems] = useState<Item[]>([])

    function addItem({name,imageUrl,_id,totalPrice,size,color,price,amount}:Item){
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
        increaseItemAmount: increaseItemAmount,
    decreaseItemAmount: decreaseItemAmount,
    }
    return <ClothesContext.Provider value={value}>{children}</ClothesContext.Provider>

    
}