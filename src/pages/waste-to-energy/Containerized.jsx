import React from 'react'
import { WastePageTemplate } from '@components/templates'
import { containerizedData } from '@data/waste-to-energy/containerized'

/**
 * Containerized Waste to Energy Page
 * Displays containerized plant solutions
 */
const Containerized = () => (
  <WastePageTemplate data={containerizedData} />
)

export default Containerized
