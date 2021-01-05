import React from 'react'
import Base, { makeHoc } from './base'
import styles from './css/micron-groove.min.css'

const Groove = p => <Base {...p} type="groove" styles={styles} />

export default Groove

export const withGroove = makeHoc(Groove)
