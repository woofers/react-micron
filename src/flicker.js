import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-flicker.min.css'

const Flicker = p => <Base {...p} type="flicker" styles={styles} />

export default propTypes(Flicker)

export const withFlicker = makeHoc(Flicker)
