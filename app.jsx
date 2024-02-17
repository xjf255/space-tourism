import { Nav } from './src/components/Nav'
import { Home } from './src/components/Home'
import { Body } from './src/components/Body'
import useNav from './src/hocks/useNav'
import { useEffect } from 'react'

function App () {
  const { position } = useNav()

  useEffect(() => {
    const $body = document.querySelector('body')
    const lastClass = $body.classList.item(0)
    $body.classList.remove(lastClass)
    $body.classList.add(`body--${position}`)
  }, [position])

  return (
    <main>
      <Nav />
      {position === 'home' && <Home />}
      {position !== 'home' && <Body />}
    </main>
  )
}

export default App
