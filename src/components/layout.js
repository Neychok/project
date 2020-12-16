import React from "react"
import Header from "./header"
import "./layout.css"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      <main className="pb-10">{children}</main>
    </>
  )
}

export default Layout
