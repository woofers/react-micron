import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from '../micron/build/less/partials/_fade.less'

const Fade = p => <Base {...p} type="fade" styles={styles} />

export default propTypes(Fade)

export const withFade = makeHoc(Fade)
