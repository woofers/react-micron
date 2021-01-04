import React from 'react'
import Base, { makeHoc } from './internal/base.js'
import styles from './css/micron-pop.min.css'

const Pop = p => <Base {...p} type="pop" styles={styles} />

export default Pop

export const withPop = makeHoc(Pop)
