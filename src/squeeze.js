import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_squeeze.less'

const Squeeze = p => <Base {...p} type="squeeze" styles={styles} />

export default propTypes(Squeeze)

export const withSqueeze = makeHoc(Squeeze)
