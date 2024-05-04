import { OrbitControls, useGLTF } from "@react-three/drei";
import { useEffect, useState } from "react";
import eventManager from "./EventManager";
import { getUserData } from "./input";

export default function Experience() {
  const [userData, setUserInput] = useState(() => getUserData());
  useEffect(() => {
    const handleDataChange = (newData) => {
      setUserInput(newData);
    };
    eventManager.subscribe("userDataChanged", handleDataChange);
    return () => {
      eventManager.unsubscribe("userDataChanged", handleDataChange);
    };
  }, []);

  // Find current sidebarId, which is used to load 3d models for the scene
  let currSidebarId = null;
  document.querySelectorAll(".sidebar").forEach((sidebar) => {
    if (sidebar.style.display === "flex") {
      currSidebarId = sidebar.id;
    }
  });

  let fileName = "models/L12_W16.glb";
  if (currSidebarId === "create_room") {
    fileName = `models/L${userData.roomSize.l}_W${userData.roomSize.w}.glb`;
  } else {
    fileName = `models/L${userData.roomSize.l}_W${userData.roomSize.w}_${userData.furnitureOption}_${userData.optimizationPreference}${userData.optimizationRank}.glb`;
  }

  const room = useGLTF(fileName);

  return (
    <>
      <OrbitControls makeDefault />

      <directionalLight
        castShadow
        position={[12, 2, 6]}
        intensity={2}
        shadow-normalBias={0.04}
      />
      <ambientLight intensity={0.35} />

      <primitive
        object={room.scene}
        scale={0.035}
        position={[-1.8, 0, -1.8]}
        meshStandardMaterial
      />
    </>
  );
}
