import { Link } from "gatsby"
import React from "react"

const Header = () => (
  <header className="pt-8 pb-8">
    <ul className="flex w-full justify-center text-lg underline">
      <li className="pr-10">
        <Link to="/">Начало</Link>
      </li>
      <li>
        <Link to="/gallery">Галерия</Link>
      </li>
    </ul>
  </header>
)

export default Header
