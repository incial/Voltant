"use client";

import React from "react";
import { ChargerPageTemplate } from "@/components/templates";
import { dcChargersData } from "@/data/ev-charging";

const DC = () => <ChargerPageTemplate data={dcChargersData} />;

export default DC;
