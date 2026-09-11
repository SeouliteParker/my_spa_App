import { NavLink } from 'react-router-dom'

export default function Header() {
  return (
    <header className="header">
      <div className="container header-inner">
        <NavLink to="/" className="brand">My SPA App</NavLink>
        <nav className="nav">
          <NavLink to="/">Home</NavLink>
          <NavLink to="/items">Items</NavLink>
          <NavLink to="/about">About</NavLink>
        </nav>
      </div>
    </header>
  )
}
