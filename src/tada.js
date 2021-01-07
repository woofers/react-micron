import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_tada.less'

const Tada = p => <Base {...p} type="tada" styles={styles} />

export default propTypes(Tada)

export const withTada = makeHoc(Tada)
