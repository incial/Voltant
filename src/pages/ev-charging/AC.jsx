import React from 'react'
import { ChargerPageTemplate } from '@components/templates'
import { acChargersData } from '@data/ev-charging/ac-chargers'

/**
 * AC Chargers Page
 * Displays AC charging solutions and products
 */
const AC = () => (
  <ChargerPageTemplate data={acChargersData} />
)

export default AC

