"use client";

import dynamic from "next/dynamic";

const Shader3 = dynamic(
  () => import("@/components/shader3").then((module) => module.Shader3),
  {
    ssr: false,
    loading: () => <div className="auralis-shader-fallback" />,
  },
);

export function ShaderBackground() {
  return (
    <div aria-hidden="true" className="auralis-shader-layer">
      <Shader3 className="auralis-shader-canvas" color="#bbffcc" />
    </div>
  );
}
