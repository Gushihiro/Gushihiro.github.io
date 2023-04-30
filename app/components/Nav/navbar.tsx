import Link from "next/link";

export const Navbar = () => {

  return (
    <ul className="flex flex-row list-none content-evenly text-center">
      <li className="flex-1"><Link href="/">Home</Link></li>
      <li className="flex-1"><Link href="/Portfolio">Portfolio</Link></li>
      <li className="flex-1"><Link href="/Resume">Resume</Link></li>
    </ul>
  )
}