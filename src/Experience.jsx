import { OrbitControls, useGLTF } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  const bed = useGLTF("./models/bed2.glb");

  return (
    <>
      {/* <Perf position="top-left" /> */}

      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[1, 2, 3]}
        intensity={1.5}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.5} />

      <primitive
        object={bed.scene}
        scale={0.08}
        position={[0, 0, 0]}
        meshStandardMaterial
      />
    </>
  );
}
