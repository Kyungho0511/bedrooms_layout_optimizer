import { OrbitControls, useGLTF } from "@react-three/drei";
import { Perf } from "r3f-perf";

export default function Experience() {
  const bed = useGLTF("./bed2.glb");

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

      <mesh
        receiveShadow
        rotation-x={-Math.PI * 0.5}
        scale={10}
        position={[3, 0, -3]}
      >
        <planeGeometry />
        <meshStandardMaterial color="yellow" />
      </mesh>

      <primitive
        object={bed.scene}
        scale={0.05}
        position={[3, 0, -3]}
        meshStandardMaterial
      />
    </>
  );
}
