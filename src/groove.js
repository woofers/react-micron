import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_groove.less'

const Groove = p => <Base {...p} type="groove" styles={styles} />

export default propTypes(Groove)

export const withGroove = makeHoc(Groove)
