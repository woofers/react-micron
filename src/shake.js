import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_shake.less'

const Shake = p => <Base {...p} type="shake" styles={styles} />

export default propTypes(Shake)

export const withShake = makeHoc(Shake)
