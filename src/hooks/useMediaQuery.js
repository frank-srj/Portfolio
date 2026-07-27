import { useEffect, useState } from 'react'

/** Primary input is touch: no hover, coarse pointer. Phones and tablets. */
const TOUCH_QUERY = '(hover: none) and (pointer: coarse)'

/*
  Phone-sized, either orientation. 600px sits above every phone in portrait and
  below the narrowest tablet (iPad mini portrait is 744px), so tablets fall
  through to the desktop layout. The max-height clause catches phones in
  landscape, which are wide but never as tall as a landscape tablet.
*/
const PHONE_SIZE_QUERY = '(max-width: 599px), (max-height: 499px)'

export function useMediaQuery(query) {
  const [matches, setMatches] = useState(
    () => window.matchMedia(query).matches
  )

  useEffect(() => {
    const list = window.matchMedia(query)
    setMatches(list.matches)

    const handleChange = (event) => setMatches(event.matches)
    list.addEventListener('change', handleChange)

    return () => list.removeEventListener('change', handleChange)
  }, [query])

  return matches
}

/*
  Deliberately not width-based: a desktop window dragged down to phone width
  still has a mouse, so it should keep hover states and merely reflow. Only a
  real touch device gets the dedicated mobile layout.
*/
export function useIsTouch() {
  return useMediaQuery(TOUCH_QUERY)
}

/** Gate for the dedicated mobile layout: a touch device at phone size. */
export function useIsPhone() {
  const isTouch = useIsTouch()
  const isPhoneSized = useMediaQuery(PHONE_SIZE_QUERY)

  return isTouch && isPhoneSized
}
