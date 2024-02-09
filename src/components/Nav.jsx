import { itemNav } from '../const/const'
import './nav.css'

export function Nav() {
  return (
    <nav>
      <figure>
        <img src='assets/shared/logo.svg' alt='logo' />
      </figure>
      <ul>
        {
          itemNav.map((title, index) => {
            return (
              <li key={title}>
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
