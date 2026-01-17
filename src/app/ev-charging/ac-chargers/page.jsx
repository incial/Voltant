"use client";

import React from "react";
import { ChargerPageTemplate } from "@/components/templates";
import { acChargersData } from "@/data/ev-charging";

const AC = () => <ChargerPageTemplate data={acChargersData} />;

export default AC;
