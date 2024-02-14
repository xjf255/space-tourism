import { itemNav } from '../const/const'
import useNav from '../hocks/useNav'
import './nav.css'

export function Nav ({ logo = true, items, change }) {
  const { position, setPosition } = useNav()
  const list = items || itemNav

  return (
    <nav className='nav__header'>
      {logo && <figure>
        <img src='assets/shared/logo.svg' alt='logo' />
      </figure>}
      <ul>
        {
          list.map((title, index) => {
            return (
              <li
                key={title}
                className={title === position ? 'li--active' : null}
                onClick={() => { setPosition(title) }}
              >
                <span>0{index}</span>
                {title}
              </li>
            )
          })
        }
      </ul>
    </nav>
  )
}
