import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-blink.min.css'

const Blink = p => <Base {...p} type="blink" styles={styles} />

export default propTypes(Blink)

export const withBlink = makeHoc(Blink)
