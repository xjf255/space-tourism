import { useState } from 'react'
import useNav from '../hocks/useNav'
import data from '../mocks/data.json'

export function Body () {
  const { position } = useNav()
  const [innerPosition, setInnerPosition] = useState(0)
  const information = data[position][innerPosition]
  const img = information.images.webp || information.images.landscape

  return (
    <section className={position}>
      <h2>{information.name}</h2>
      <section className='info'>
        <figure>
          <img src={img} alt='Aqui va algo' />
        </figure>
        <div>
          <button onClick={() => { setInnerPosition(innerPosition + 1) }}>+</button>
          {position === 'destination' && <h3><span>01</span> Pick your destination</h3>}
          {position === 'crew' && <h3><span>02</span> Meet your crew</h3>}
          {position === 'technology' && <h3><span>03</span> Space Launch 101</h3>}
          {information.description || information.bio}
        </div>
        <hr />
        {information.distance && <h1>{information.distance}</h1>}
        {information.travel && <h1>{information.travel}</h1>}
      </section>
    </section>
  )
}
