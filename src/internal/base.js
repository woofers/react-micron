import React, { useRef, useEffect } from 'react'
import micron from 'webkul-micron'

const Base = ({ className = 'micro', children, type = 'custom', timing = 'ease-in', duration = 0.45, custom, styles: initialStyles }) => {
  const ref = useRef()
  useEffect(() => {
    const styles = !Array.isArray(initialStyles) ? [initialStyles] : initialStyles
    styles.map(style => style.use())
    return () => {
      styles.map.unuse(style => style.unuse())
    }
  }, [initialStyles])
  const animation = typeof custom !== 'undefined' ? custom : (doc) => {
    doc.getEle('.micro').interaction(type).duration(duration.toString()).timing(timing)
  }
  const onClick = e => {
    animation(micron)
  }
  return <div className={className} ref={ref} onClick={onClick}>{children}</div>
}

export default Base
