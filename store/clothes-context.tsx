import { createContext, ReactNode,useState } from "react";
interface Item {
    _id: string;
    category: string;
    type: string;
    name: string;
    price: number;
    description: string;
    imageUrl: string;
  }
interface ClothesContext{
    price:number,
    items:Item[],
    addItem: (item:Item) => void
}

export const ClothesContext = createContext<ClothesContext>({
    price:0,
    items:[],
    addItem: (item:Item) => {}
})

export const ClothesProvider = ({ children }: { children: ReactNode }) => {
    const [price,setPrice] = useState(0)
    const [items,setItems] = useState<Item[]>([])

    function addItem(item:Item){
        setItems(prevItems => [...prevItems, item])
        setPrice(prevPrice => prevPrice + item.price)
        console.log(items)
    }

    const value = {
        price:price,
        items:items,
        addItem:addItem
    }
    return <ClothesContext.Provider value={value}>{children}</ClothesContext.Provider>

    
}