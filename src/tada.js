import React from 'react'
import Base, { makeHoc } from './base'
import styles from './css/micron-tada.min.css'

const Tada = p => <Base {...p} type="tada" styles={styles} />

export default Tada

export const withTada = makeHoc(Tada)
