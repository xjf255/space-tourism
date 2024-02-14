import useNav from '../hocks/useNav'
import data from '../mocks/data.json'

export function NavBody ({ actualPosition, changePosition }) {
  const { position } = useNav()

  const handleClick = (index) => {
    const newPosition = index
    changePosition(newPosition)
  }
  return (
    <nav className='nav__body'>
      <ul>
        {
                    data[position].map((ele, index) => {
                      return (
                        <li
                          key={ele.name}
                          className={ele.name === actualPosition ? 'li--active' : ''}
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
  )
}
