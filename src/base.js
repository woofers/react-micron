import React, { forwardRef, useRef, useEffect } from 'react'
import micron from './script/micron'

const enclose = cond => arr => (arr => !Array.isArray(arr) && cond(arr) ? [arr] : arr)(arr || [])

const encloseAll = enclose(() => true)

const encloseString = enclose(arr => typeof arr === 'string')

const toEvents = (events, interaction) => events.reduce((acc, next) => {
  acc[next] = interaction
  return acc
}, {})

const eventEntries = (events, getMicron) =>
  Object.fromEntries(Object.entries(events).map(
    ([key, value]) => ([key, value(getMicron)]))
  )

const handlers = (events, interaction, getMicron) => !Array.isArray(events) ? eventEntries(events, getMicron) : toEvents(events, interaction)

const Wrapper = forwardRef(({ inline, ...rest }, ref) => inline ? <span {...rest} ref={ref} /> : <div {...rest} ref={ref} />)

const Base = ({
  children,
  events: initialEvents = 'onClick',
  timing = 'ease-in-out',
  duration = 0.45,
  inline = false,
  // Internal
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
      styles.map(style => style.unuse())
    }
  }, [initialStyles])
  const getMicron = () => {
    if (!ref?.current) return micron
    micron.getEle(ref?.current)
    return micron
  }
  const interaction = () => {
    getMicron().interaction(type).duration(duration).timing(timing)
  }
  return (
    <Wrapper inline={inline} {...(handlers(events, interaction, getMicron))} ref={ref} {...rest}>
      {typeof children === 'function' ? children(interaction, getMicron) : children}
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
