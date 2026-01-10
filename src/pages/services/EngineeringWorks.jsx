import React from 'react'
import { ServicePageTemplate } from '@components/templates'
import { engineeringWorksData } from '@data/ev-charging/engineering-works'

/**
 * Engineering Works Page
 * Displays engineering services and capabilities
 */
const EngineeringWorks = () => (
  <ServicePageTemplate data={engineeringWorksData} />
)

export default EngineeringWorks