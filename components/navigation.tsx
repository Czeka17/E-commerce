import Link from "next/link"
import { useState } from "react";
import Cart from "./cart";
import Submenu from "./submenu";
import {AiOutlineShoppingCart} from 'react-icons/ai'
function Navigation(){
  const [showSubMenu, setShowSubMenu] = useState(null);
  const [isopen,setIsOpen] = useState(false)
  const handleMouseEnter = (category:any) => {
    setShowSubMenu(category);
  };
  function closeModal(){
    setIsOpen(false)
  }
  const handleMouseLeave = () => {
    setShowSubMenu(null);
  };

  const isSubMenuVisible = (category:string) => {
    return showSubMenu === category;
  };
    return (
      <nav className="text-black py-4 max-w-[1200px] relative m-auto">
      <div className="flex justify-center items-center">
        <Link href="/">
        TrendTribe
        </Link>
        <div>
        <button className="absolute top-0 right-0 p-4" onClick={() => setIsOpen(true)}>
            <AiOutlineShoppingCart size={24}/>
          </button>
        </div>
      </div>
      <div className="pt-2">
        <ul className="flex row justify-center items-center">
          <li
            onMouseEnter={() => handleMouseEnter('men')}
            className="relative group mx-10"
          >
            <Link href="/[category]" as="/men">
              Man
            </Link>
            {isSubMenuVisible('men') && (
              <Submenu handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} category="men"/>
            )}
          </li>
          <li
            onMouseEnter={() => handleMouseEnter('women')}
            className="relative group mx-10"
          >
            <Link href="/[category]" as="/women">
             Woman
            </Link>
            {isSubMenuVisible('women') && (
               <Submenu handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} category="women"/>
            )}
          </li>
          <li className="relative group mx-10">
            <Link href="/[category]" as="/accessories">
            Accessories
            </Link>
          </li>
          <li className="relative group mx-10">
            <Link href="/[category]" as="/sale">
            Sale
            </Link>
          </li>
        </ul>

      </div>
      {isopen && <Cart closeModal={closeModal}/>}
    </nav>
    )
}
export default Navigation