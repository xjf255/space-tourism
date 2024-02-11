import { createContext, useState } from 'react'

export const NavContext = createContext()

export function NavProvider ({ children }) {
  const [position, setPosition] = useState('home')

  return (
    <NavContext.Provider value={{ position, setPosition }}>
      {children}
    </NavContext.Provider>
  )
}
