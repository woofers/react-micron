import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_pop.less'

const Pop = p => <Base {...p} type="pop" styles={styles} />

export default propTypes(Pop)

export const withPop = makeHoc(Pop)
