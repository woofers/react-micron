import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-jelly.min.css'

const Jelly = p => <Base {...p} type="jelly" styles={styles} />

export default propTypes(Jelly)

export const withJelly = makeHoc(Jelly)
