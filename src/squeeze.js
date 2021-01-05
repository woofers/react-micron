import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-squeeze.min.css'

const Squeeze = p => <Base {...p} type="squeeze" styles={styles} />

export default propTypes(Squeeze)

export const withSqueeze = makeHoc(Squeeze)
