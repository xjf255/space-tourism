import './itemfooter.css'

export function ItemFooter ({ title, value }) {
  return (
    <div className='information__travel'>
      <span className='another-info'>{title}</span>
      <p>{value}</p>
    </div>
  )
}
