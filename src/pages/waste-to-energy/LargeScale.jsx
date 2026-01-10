import React from 'react'
import { WastePageTemplate } from '@components/templates'
import { largeScaleData } from '@data/waste-to-energy/large-scale'

/**
 * Large Scale Waste to Energy Page
 * Displays large scale plant solutions
 */
const LargeScale = () => (
  <WastePageTemplate data={largeScaleData} />
)

export default LargeScale