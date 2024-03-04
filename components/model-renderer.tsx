// components/avatar-renderer.tsx

"use client";

import { Suspense, lazy } from "react";
import { Canvas } from "@react-three/offscreen";

const Scene = lazy(() => import("./scene"));

const worker = new Worker(new URL("./worker.tsx", import.meta.url), {
  type: "module",
});

const ModelRenderer = () => {
  return (
    <div className="w-full h-auto aspect-[24/25]">
      <Suspense
        fallback={
          <div className="w-full flex items-center justify-center h-[calc(100vh-300px)] font-bold text-[30px] font-mono text-white">
            loading...
          </div>
        }
      >
        <Canvas
          worker={worker}
          fallback={<Scene />}
          shadows="basic"
          camera={{
            position: [0, -5, 1.5],
            fov: 50,
            castShadow: true,
            zoom: 1.3,
          }}
          className="w-full h-full"
        />
      </Suspense>
    </div>
  );
};

export default ModelRenderer;
