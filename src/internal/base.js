import React, { useRef, useEffect } from 'react'
import micron from 'webkul-micron'

const getMicron = () => {
  micron.getEle('.micro')
  return micron
}

const wrapInteraction = animation => () => {
  animation(getMicron())
}

const enclose = cond => arr => (arr => !Array.isArray(arr) && cond(arr) ? [arr] : arr)(arr || [])

const encloseAll = enclose(() => true)

const encloseString = enclose(arr => typeof arr === 'string')

const toEvents = (events, interaction) => events.reduce((acc, next) => {
  acc[next] = wrapInteraction(interaction)
  return acc
}, {})

const eventEntries = events =>
  Object.fromEntries(Object.entries(events).map(
    ([key, value]) => ([key, value(getMicron)]))
  )

const handlers = (events, interaction) => !Array.isArray(events) ? eventEntries(events) : toEvents(events, interaction)

const Wrapper = ({ inline, ...rest }) => inline ? <span {...rest} /> : <div {...rest} />

const Base = ({
  children,
  events: initialEvents = 'onClick',
  timing = 'ease-in',
  duration = 0.45,
  inline = false,
  // Internal
  className = 'micro',
  type = 'custom',
  styles: initialStyles,
  ...rest
}) => {
  const ref = useRef()
  const events = encloseString(initialEvents)
  useEffect(() => {
    const styles = encloseAll(initialStyles)
    styles.map(style => style.use())
    return () => {
      styles.map.unuse(style => style.unuse())
    }
  }, [initialStyles])
  const interaction = el => {
    el.interaction(type).duration(duration).timing(timing)
  }
  return (
    <Wrapper inline={inline} {...(handlers(events, interaction))} className={className} ref={ref} {...rest}>
      {typeof children === 'function' ? children(wrapInteraction(interaction), getMicron) : children}
    </Wrapper>
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
