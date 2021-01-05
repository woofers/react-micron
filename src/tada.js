import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-tada.min.css'

const Tada = p => <Base {...p} type="tada" styles={styles} />

export default propTypes(Tada)

export const withTada = makeHoc(Tada)
