import React from 'react'
import { Link } from 'react-router-dom'

const Header = () => {
  return (
    <header
      style={{
        margin: '5px 0'
      }}
    >
      <Link style={{ margin: '5px' }} to="/">
        Home
      </Link>
      <Link style={{ margin: '5px' }} to="/about">
        About
      </Link>
      <Link to="/dashboard">Dashboard</Link>
    </header>
  )
}

export default ({ children }) => (
  <>
    <Header />
    {children}
  </>
)
