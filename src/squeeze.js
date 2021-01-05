import React from 'react'
import Base, { makeHoc } from './base'
import styles from './css/micron-squeeze.min.css'

const Squeeze = p => <Base {...p} type="squeeze" styles={styles} />

export default Squeeze

export const withSqueeze = makeHoc(Squeeze)
