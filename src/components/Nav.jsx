import { itemNav } from '../const/const'
import useNav from '../hocks/useNav'
import './nav.css'

export function Nav () {
  const { position, setPosition } = useNav()

  const exitMenu = () => {
    document.querySelector('.nav--responsive > ul').classList.toggle('nav__ul--show')
    document.querySelector('main').classList.toggle('section--bloqued')
  }

  return (
    <nav className='nav__header'>
      <figure>
        <img src='/src/assets/shared/logo.svg' alt='logo' />
      </figure>
      <ul className='nav--desktop'>
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
      <section className='nav--responsive'>
        <figure onClick={exitMenu}>
          <ion-icon name='menu-outline' />
        </figure>
        <ul className='nav__ul--hide-responsive'>
          <figure onClick={exitMenu}>
            <ion-icon name='close-outline' />
          </figure>
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
      </section>
    </nav>
  )
}
