import React from 'react'
import Base, { propTypes } from './base'

const Custom = p => <Base {...p} styles={[]} />

export default propTypes(Custom, true)
