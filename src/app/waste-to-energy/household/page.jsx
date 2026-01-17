"use client";

import React from "react";
import { WastePageTemplate } from "@/components/templates";
import { householdData } from "@/data/waste-to-energy";

const Household = () => <WastePageTemplate data={householdData} />;

export default Household;
