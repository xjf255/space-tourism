import { Nav } from './src/components/Nav'
import { Home } from './src/components/Home'

function App () {
  const position = 'home'

  return (
    <main>
      <Nav />
      <section className='body'>
        {
          position === 'home' && <Home />
        }
      </section>
    </main>
  )
}

export default App
