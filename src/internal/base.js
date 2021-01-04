import React, { useRef, useEffect } from 'react'
import micron from 'webkul-micron'

const getMicron = () => {
  micron.getEle('.micro')
  return micron
}

const wrapInteraction = animation => () => {
  animation(getMicron())
}

const enclose = arr => (arr => !Array.isArray(arr) ? [arr] : arr)(arr || [])

const encloseString = arr => (arr => !Array.isArray(arr) && typeof arr === 'string' ? [arr] : arr)(arr || [])

const toEvents = (events, interaction) => events.reduce((acc, next) => {
  acc[next] = wrapInteraction(interaction)
  return acc
}, {})

const eventEntries = events =>
  Object.fromEntries(Object.entries(events).map(
    ([key, value]) => ([key, value(getMicron)]))
  )

const handlers = (events, interaction) => !Array.isArray(events) ? eventEntries(events) : toEvents(events, interaction)

const Base = ({
  children,
  events: initialEvents = 'onClick',
  timing = 'ease-in',
  duration = 0.45,
  // Internal
  className = 'micro',
  type = 'custom',
  styles: initialStyles,
  ...rest
}) => {
  const ref = useRef()
  const events = encloseString(initialEvents)
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
  return (
    <div {...(handlers(events, interaction))} className={className} ref={ref} {...rest}>
      {typeof children === 'function' ? children(wrapInteraction(interaction), getMicron) : children}
    </div>
  )
}

export default Base

export const makeHoc = Wrapper => (Component, options = {}) => {
  return props => (
    <Wrapper {...options}>
      {(interaction, micron) => <Component {...props} interaction={interaction} micron={micron} />}
    </Wrapper>
  )
}
