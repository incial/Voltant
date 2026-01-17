"use client";

import React from "react";
import { ServicePageTemplate } from "@/components/templates";
import { engineeringWorksData } from "@/data/ev-charging";

const EngineeringWorks = () => (
  <ServicePageTemplate data={engineeringWorksData} />
);

export default EngineeringWorks;
