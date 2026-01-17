"use client";

import dynamic from "next/dynamic";

const SplitImagesClient = dynamic(() => import("./SplitImages"), {
  ssr: false,
});

export default function SplitImagesWrapper() {
  return <SplitImagesClient />;
}
