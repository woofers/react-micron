import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-groove.min.css'

const Groove = p => <Base {...p} type="groove" styles={styles} />

export default propTypes(Groove)

export const withGroove = makeHoc(Groove)
