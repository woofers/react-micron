import React from 'react'
import Base, { propTypes, makeHoc } from './base'
import styles from './css/micron-fade.min.css'

const Fade = p => <Base {...p} type="fade" styles={styles} />

export default propTypes(Fade)

export const withFade = makeHoc(Fade)
