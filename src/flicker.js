import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_flicker.less'

const Flicker = p => <Base {...p} type="flicker" styles={styles} />

export default propTypes(Flicker)

export const withFlicker = makeHoc(Flicker)
