import React from 'react'
import { ServicePageTemplate } from '@components/templates'
import { moreData } from '@data/ev-charging/more'

/**
 * More Services Page
 * Displays additional services and solutions
 */
const More = () => (
  <ServicePageTemplate data={moreData} />
)

export default More
