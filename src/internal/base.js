import React, { useRef, useEffect } from 'react'
import micron from 'webkul-micron'

const wrapInteraction = animation => () => {
  micron.getEle('.micro')
  animation(micron)
}

const enclose = arr => (arr => !Array.isArray(arr) ? [arr] : arr)(arr || [])

const toEvents = (events, interaction) => events.reduce((acc, next) => {
  acc[next] = wrapInteraction(interaction)
  return acc
}, {})

const handlers = (events, interaction) => !Array.isArray(arr) ? events : toEvents(event, interaction)

const Base = ({
  children,
  events: initialEvents = 'onClick',
  timing = 'ease-in',
  duration = 0.45,
  // Internal
  className = 'micro',
  type = 'custom',
  styles: initialStyles
}) => {
  const ref = useRef()
  const events = enclose(initialEvents)
  useEffect(() => {
    const styles = enclose(initialStyles)
    styles.map(style => style.use())
    return () => {
      styles.map.unuse(style => style.unuse())
    }
  }, [initialStyles])
  const interaction = el => {
    el.interaction(type).duration(duration.toString()).timing(timing)
  }
    console.log(handlers(events, interaction))
  return (
    <div {...(handlers(events, interaction))} className={className} ref={ref}>
      {typeof children === 'function' ? children(interaction) : children}
    </div>
  )
}

export default Base
