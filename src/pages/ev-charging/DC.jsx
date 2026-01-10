import React from 'react'
import { ChargerPageTemplate } from '@components/templates'
import { dcChargersData } from '@data/ev-charging/dc-chargers'

/**
 * DC Chargers Page
 * Displays DC fast charging solutions and products
 */
const DC = () => (
  <ChargerPageTemplate data={dcChargersData} />
)

export default DC

