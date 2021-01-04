import React from 'react'
import Base, { makeHoc } from './internal/base.js'
import styles from './css/micron-flicker.min.css'

const Flicker = p => <Base {...p} type="flicker" styles={styles} />

export default Flicker

export const withFlicker = makeHoc(Flicker)
