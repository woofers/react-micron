import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-shake.min.css'

const Shake = p => <Base {...p} type="shake" styles={styles} />

export default propTypes(Shake)

export const withShake = makeHoc(Shake)
