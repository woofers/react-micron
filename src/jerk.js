import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-jerk.min.css'

const Jerk = p => <Base {...p} type="jerk" styles={styles} />

export default propTypes(Jerk)

export const withJerk = makeHoc(Jerk)
