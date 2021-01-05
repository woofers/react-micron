import React from 'react'
import Base, { makeHoc } from './base'
import styles from './css/micron-blink.min.css'

const Blink = p => <Base {...p} type="blink" styles={styles} />

export default Blink

export const withBlink = makeHoc(Blink)
