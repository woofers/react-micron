import React from 'react'
import Base, { makeHoc } from './internal/base.js'
import styles from './css/micron-swing.min.css'

const Swing = p => <Base {...p} type="swing" styles={styles} />

export default Swing

export const withSwing = makeHoc(Swing)
