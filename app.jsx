import { Nav } from './src/components/Nav'
import { Home } from './src/components/Home'
import { Body } from './src/components/Body'
import useNav from './src/hocks/useNav'
import { useImageBg } from './src/hocks/useImageBg'

function App () {
  const { position } = useNav()
  const imgBg = useImageBg()
  document.querySelector('body').style.backgroundImage = `url(${imgBg})`

  return (
    <main>
      <Nav />
      {position === 'home' && <Home />}
      {position !== 'home' && <Body />}
    </main>
  )
}

export default App
