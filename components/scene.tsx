// scene.tsx

"use client";

import Avatar from "@/Avatar";

import { Environment, OrbitControls } from "@react-three/drei";

const Scene = () => {
  return (
    <>
      <OrbitControls />
      <ambientLight intensity={1.5} />
      <Environment preset="sunset" />
      <directionalLight intensity={0.8} />
      <Avatar />
    </>
  );
};

export default Scene;