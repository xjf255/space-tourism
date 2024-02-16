import { useEffect, useState } from 'react'
import useNav from './useNav'
import imgBackground from '../mocks/backgroundImages.json'

export function useImageBg () {
  const { position } = useNav()
  const [response, setResponse] = useState('desktop')
  let $width = window.outerWidth

  useEffect(() => {
    window.addEventListener('resize', (event) => {
      $width = event.target.outerWidth
    })

    if ($width <= 768) setResponse('mobile')
    if ($width > 768 && $width < 1240) setResponse('tablet')
    if ($width >= 1240) setResponse('desktop')
  })

  return imgBackground[response][position]
}
