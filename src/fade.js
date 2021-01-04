import React from 'react'
import Base, { makeHoc } from './internal/base.js'
import styles from './css/micron-fade.min.css'

const Fade = p => <Base {...p} type="fade" styles={styles} />

export default Fade

export const withFade = makeHoc(Fade)
