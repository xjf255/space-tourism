import { useState } from 'react'
import useNav from '../hocks/useNav'
import data from '../mocks/data.json'
import './body.css'

export function Body () {
  const { position } = useNav()
  const [innerPosition, setInnerPosition] = useState(0)
  const information = data[position][innerPosition]
  const img = information.images.webp || information.images.portrait

  const handleClick = (index) => {
    const newPosition = index
    setInnerPosition(newPosition)
  }

  function ItemFooter ({ title, value }) {
    return (
      <div className='information__travel'>
        <span className='another-info'>{title}</span>
        <p>{value}</p>
      </div>
    )
  }

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
          <nav className='nav__body'>
            <ul>
              {
                data[position].map((ele, index) => {
                  return (
                    <li
                      key={ele.name}
                      className={ele.name === information.name ? 'li--active' : ''}
                      onClick={() => { handleClick(index) }}
                    >
                      <i className='li__name'>{ele.name}</i>
                      <i className='li__index'>{index + 1}</i>
                    </li>
                  )
                })
              }
            </ul>
          </nav>
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
