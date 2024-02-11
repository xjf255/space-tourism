import { useState } from 'react'
import useNav from '../hocks/useNav'
import data from '../mocks/data.json'

export function Body ({ distance, travel }) {
  const { position } = useNav()
  const [innerPosition, setInnerPosition] = useState(1)
  const information = data[position][innerPosition]
  console.log(information)
  return (
    <>
      <h2>Title</h2>
      <section className='info'>
        <figure>
          <img src='' alt='Aqui va algo' />
        </figure>
        <div>
          nav
          <h3>Subtitulo</h3>
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Blanditiis adipisci molestias quam unde autem necessitatibus
          ipsam expedita suscipit nobis laborum. Perspiciatis, expedita
          minima? Magnam eveniet id facere mollitia numquam magni.
        </div>
        <hr />
        {
                    distance & travel && <>Hola</>
                }
      </section>
    </>
  )
}
