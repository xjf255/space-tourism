import { useState } from 'react'
import useNav from '../hocks/useNav'
import data from '../mocks/data.json'
import { ItemFooter } from './ItemFooter'
import { NavBody } from './NavBody'
import './body.css'

export function Body () {
  const { position } = useNav()
  const [innerPosition, setInnerPosition] = useState(0)
  const information = data[position][innerPosition]
  const img = information.images.webp || information.images.portrait

  return (
    <section className={position}>
      {position === 'destination' && <h3><span>01</span> Pick your destination</h3>}
      {position === 'crew' && <h3><span>02</span> Meet your crew</h3>}
      {position === 'technology' && <h3><span>03</span> Space Launch 101</h3>}
      <section className='info'>
        <figure className='images'>
          <img src={img} alt={img} />
        </figure>
        <div className='text'>
          <NavBody actualPosition={information.name} changePosition={setInnerPosition} />
          {information.role && <span className='role'>{information.role}</span>}
          {position === 'technology' && <span className='role'>the terminology...</span>}
          <h2>{information.name}</h2>
          <p>{information.description || information.bio}</p>
          <hr />
          {information.distance && information.travel && <footer>
            <ItemFooter title='avg. distance' value={information.distance} />
            <ItemFooter title='est. travel time' value={information.travel} />
          </footer>}
        </div>
      </section>
    </section>
  )
}
