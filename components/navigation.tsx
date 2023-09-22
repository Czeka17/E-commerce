import Link from "next/link"

function Navigation(){
    return (
        <nav>
            <div className="flex justify-center items-center w-100"><Link href="/">VogueNest</Link></div>
            <div>
            <ul className="flex row justify-around items-center w-100">
          <li>
            <Link href="/[category]" as="/men">
              Man
            </Link>
          </li>
          <li>
            <Link href="/[category]" as="/women">
              Woman
            </Link>
          </li>
          <li>
            <Link href="/[category]" as="/kids">
              Kids
            </Link>
          </li>
          <li>
            <Link href="/[category]" as="/sport">
              Sport
            </Link>
          </li>
        </ul>
            </div>
        </nav>
    )
}
export default Navigation