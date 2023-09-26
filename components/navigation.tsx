import Link from "next/link"
import { useState } from "react";
import Cart from "./cart";
import Submenu from "./submenu";
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
      <nav className="text-black py-4">
      <div className="flex justify-center items-center">
        <Link href="/">
          VogueNest
        </Link>
      </div>
      <div className="relative">
        <ul className="flex row justify-around items-center">
          <li
            onMouseEnter={() => handleMouseEnter('men')}
            className="relative group"
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
            className="relative group"
          >
            <Link href="/[category]" as="/women">
             Woman
            </Link>
            {isSubMenuVisible('women') && (
               <Submenu handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} category="women"/>
            )}
          </li>
          <li className="relative group" onMouseEnter={() => handleMouseEnter('kids')}>
            <Link href="/[category]" as="/kids">
             Kids
            </Link>
            {isSubMenuVisible('kids') && (
              <Submenu handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} category="kids"/>
            )}
          </li>
          <li className="relative group" onMouseEnter={() => handleMouseEnter('sport')}>
            <Link href="/[category]" as="/sport">
              Sport
            </Link>
            {isSubMenuVisible('sport') && (
              <Submenu handleMouseEnter={handleMouseEnter} handleMouseLeave={handleMouseLeave} category="sport"/>
            )}
          </li>
          <li onClick={() => setIsOpen(true)}>
            <p>open</p>
          </li>
        </ul>
      </div>
      {isopen && <Cart closeModal={closeModal}/>}
    </nav>
    )
}
export default Navigation