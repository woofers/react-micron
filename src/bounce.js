import React from 'react'
import Base, { makeHoc } from './base'
import styles from './css/micron-bounce.min.css'

const Bounce = p => <Base {...p} type="bounce" styles={styles} />

export default Bounce

export const withBounce = makeHoc(Bounce)
