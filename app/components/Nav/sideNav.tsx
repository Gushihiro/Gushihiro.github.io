import Link from "next/link";

export const SideNav = () => {

  return (
    <aside className="w-3/12 flex justify-center items-center">
      <ul className="menu bg-base-100 rounded-box">
        <li className="flex-1 text-center"><Link href="/">Home</Link></li>
        <li className="flex-1"><Link href="/Portfolio">Portfolio</Link></li>
        <li className="flex-1"><Link href="/Resume">Resume</Link></li>
      </ul>
    </aside>
  )
}