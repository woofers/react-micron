import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_swing.less'

const Swing = p => <Base {...p} type="swing" styles={styles} />

export default propTypes(Swing)

export const withSwing = makeHoc(Swing)
