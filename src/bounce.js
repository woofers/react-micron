import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-bounce.min.css'

const Bounce = p => <Base {...p} type="bounce" styles={styles} />

export default propTypes(Bounce)

export const withBounce = makeHoc(Bounce)
