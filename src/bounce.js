import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_bounce.less'

const Bounce = p => <Base {...p} type="bounce" styles={styles} />

export default propTypes(Bounce)

export const withBounce = makeHoc(Bounce)
