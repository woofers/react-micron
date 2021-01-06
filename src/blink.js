import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_blink.less'

const Blink = p => <Base {...p} type="blink" styles={styles} />

export default propTypes(Blink)

export const withBlink = makeHoc(Blink)
