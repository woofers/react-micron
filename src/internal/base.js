import React, { useRef, useEffect } from 'react'
import micron from 'webkul-micron'

const Base = ({
  children,
  event = 'click',
  timing = 'ease-in',
  duration = 0.45,
  custom,
  // Internal
  className = 'micro',
  type = 'custom',
  styles: initialStyles
}) => {
  const ref = useRef()
  useEffect(() => {
    const styles = !Array.isArray(initialStyles) ? [initialStyles] : initialStyles
    styles.map(style => style.use())
    return () => {
      styles.map.unuse(style => style.unuse())
    }
  }, [initialStyles])
  const animation = typeof custom !== 'undefined' ? custom : (el) => {
    el.interaction(type).duration(duration.toString()).timing(timing)
  }
  const onClick = e => {
    micron.getEle('.micro')
    animation(micron)
  }
  return <div className={className} ref={ref} onClick={onClick}>{children}</div>
}

export default Base
