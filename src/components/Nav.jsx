import { itemNav } from '../const/const'
import useNav from '../hocks/useNav'
import './nav.css'

export function Nav () {
  const { position, setPosition } = useNav()

  return (
    <nav className='nav__header'>
      <figure>
        <img src='assets/shared/logo.svg' alt='logo' />
      </figure>
      <ul>
        {
          itemNav.map((title, index) => {
            return (
              <li
                key={title}
                className={title === position ? 'li--active' : null}
                onClick={() => { setPosition(title) }}
              >
                <span className='nav__header--index'>0{index}</span>
                {title}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
