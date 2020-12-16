import React from "react"

import Header from "./header"
import "./layout.css"

/**
 * Главния layout на страницата
 */
const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pb-10">{children}</main>
    </>
  )
}

export default Layout
