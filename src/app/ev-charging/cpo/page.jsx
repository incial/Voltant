"use client";

import React from "react";
import { CPOPageTemplate } from "@/components/templates";
import { cpoData } from "@/data/ev-charging";

const Cpo = () => <CPOPageTemplate data={cpoData} />;

export default Cpo;
