import React from 'react'
import { WastePageTemplate } from '@components/templates'
import { householdData } from '@data/waste-to-energy/household'

/**
 * Household Waste to Energy Page
 * Displays household biogas solutions
 */
const Household = () => (
  <WastePageTemplate data={householdData} />
)

export default Household
