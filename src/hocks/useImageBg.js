import { useEffect, useState } from 'react'
import useNav from './useNav'
import imgBackground from '../mocks/backgroundImages.json'

export function useImageBg () {
  const { position } = useNav()
  const [response, setResponse] = useState('desktop')
  useEffect(() => {
    const $width = window.outerWidth

    if ($width < 768) return setResponse('mobile')
    if ($width < 1240) return setResponse('tablet')
    if ($width >= 1240) return setResponse('desktop')
  }, [])
  return imgBackground[response][position]
}
