import React, { useRef, useEffect } from 'react'
import micron from 'webkul-micron'
import styles from 'webkul-micron/dist/css/micron-shake.min.css'

export const Test = ({ children, type = 'shake', timing = 'ease-in', duration = 0.45, custom }) => {
  const ref = useRef()
  useEffect(() => {
    styles.use()
    return () => {
      styles.unuse()
    }
  }, [])
  const animation = typeof custom !== 'undefined' ? custom : (doc) => {
    doc.getEle('.micro').interaction(type).duration(duration.toString()).timing(timing)
  }
  const onClick = e => {
    animation(micron)
  }
  return <div className="micro" ref={ref} onClick={onClick}>{children}</div>
}
