import { NavContext } from '../context/nav'
import { useContext } from 'react'

export default function useNav () {
  const { position, setPosition } = useContext(NavContext)
  return { position, setPosition }
}
