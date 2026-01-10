import React from 'react'
import { CPOPageTemplate } from '@components/templates'
import { cpoData } from '@data/ev-charging/cpo'

/**
 * CPO (Charge Point Operator) Page
 * Displays CPO services and how-it-works information
 */
const Cpo = () => (
  <CPOPageTemplate data={cpoData} />
)

export default Cpo

