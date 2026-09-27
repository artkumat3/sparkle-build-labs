import { useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { MeshTransmissionMaterial, PerformanceMonitor, Environment } from "@react-three/drei";
import * as THREE from "three";
import { motionState, prefersReducedMotion, isMobile } from "@/lib/motion";

const Ribbon = ({ heavy, still }: { heavy: boolean; still: boolean }) => {
  const mesh = useRef<THREE.Mesh>(null);
  const group = useRef<THREE.Group>(null);
  const curve = useMemo(
    () => new THREE.CubicBezierCurve3(new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3(), new THREE.Vector3()),
    []
  );
  const frame = useRef(0);

  useFrame((state, dt) => {
    const t = still ? 0 : state.clock.elapsedTime;
    curve.v0.set(-4.2, Math.sin(t * 0.3) * 0.8, Math.cos(t * 0.2) * 0.6);
    curve.v1.set(-1.4, 2.2 + Math.sin(t * 0.45) * 0.6, Math.sin(t * 0.35) * 1.4);
    curve.v2.set(1.4, -2.2 + Math.cos(t * 0.4) * 0.6, Math.cos(t * 0.3) * 1.4);
    curve.v3.set(4.2, Math.cos(t * 0.25) * 0.8, Math.sin(t * 0.22) * 0.6);
    // Rebuild tube every other frame to stay cheap.
    if (mesh.current && frame.current++ % 2 === 0) {
      mesh.current.geometry.dispose();
      mesh.current.geometry = new THREE.TubeGeometry(curve, heavy ? 180 : 90, 0.42, heavy ? 28 : 12, false);
    }
    if (group.current && !still) {
      const { x, y } = motionState.pointer;
      group.current.rotation.y = THREE.MathUtils.lerp(group.current.rotation.y, x * 0.35, 0.05);
      group.current.rotation.x = THREE.MathUtils.lerp(group.current.rotation.x, -y * 0.25, 0.05);
      group.current.rotation.z += dt * 0.05 + motionState.scrollVelocity * 0.0015;
    }
  });

  return (
    <group ref={group}>
      <mesh ref={mesh}>
        <tubeGeometry args={[curve, 90, 0.42, 12, false]} />
        {heavy ? (
          <MeshTransmissionMaterial
            transmission={0.92}
            roughness={0.18}
            thickness={1.2}
            ior={1.52}
            chromaticAberration={0.06}
            color="#F1E8D8"
            attenuationColor="#76516F"
            attenuationDistance={2.5}
            samples={6}
            resolution={512}
            backside
          />
        ) : (
          <meshPhysicalMaterial color="#D6B77A" roughness={0.3} metalness={0.6} transparent opacity={0.55} />
        )}
      </mesh>
    </group>
  );
};

const Dust = ({ count, still }: { count: number; still: boolean }) => {
  const ref = useRef<THREE.Points>(null);
  const { positions, base } = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count * 3; i++) p[i] = (Math.random() - 0.5) * (i % 3 === 2 ? 8 : 16);
    return { positions: p, base: p.slice() };
  }, [count]);

  useFrame((state) => {
    if (!ref.current || still) return;
    const t = state.clock.elapsedTime;
    const arr = ref.current.geometry.attributes.position.array as Float32Array;
    const px = motionState.pointer.x * 8, py = motionState.pointer.y * 5;
    for (let i = 0; i < count; i++) {
      const j = i * 3;
      const bx = base[j] + Math.sin(t * 0.2 + i) * 0.25;
      const by = base[j + 1] + Math.cos(t * 0.17 + i * 1.3) * 0.25;
      const dx = bx - px, dy = by - py, d2 = dx * dx + dy * dy;
      const push = d2 < 4 ? (4 - d2) * 0.25 : 0;
      arr[j] += (bx + dx * push - arr[j]) * 0.06;
      arr[j + 1] += (by + dy * push - arr[j + 1]) * 0.06;
    }
    ref.current.geometry.attributes.position.needsUpdate = true;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial size={0.035} color="#D6B77A" transparent opacity={0.55} depthWrite={false} sizeAttenuation />
    </points>
  );
};

const AtelierCanvas = () => {
  const mobile = isMobile();
  const still = prefersReducedMotion();
  const [dpr, setDpr] = useState(mobile ? 1 : 1.5);

  return (
    <div aria-hidden className="fixed inset-0 -z-10 pointer-events-none">
      <div className="absolute inset-0 glow-plum opacity-70" />
      <Canvas dpr={dpr} camera={{ position: [0, 0, 7], fov: 45 }} gl={{ antialias: !mobile, alpha: true }}>
        <PerformanceMonitor onDecline={() => setDpr(1)} />
        <ambientLight intensity={0.6} />
        <directionalLight position={[4, 5, 3]} intensity={1.4} color="#F1E8D8" />
        <pointLight position={[-4, -2, 2]} intensity={12} color="#76516F" />
        {!mobile && <Environment preset="night" />}
        <Ribbon heavy={!mobile} still={still} />
        <Dust count={mobile ? 500 : 1200} still={still} />
      </Canvas>
      <div className="absolute inset-0 bg-background/40" />
    </div>
  );
};

export default AtelierCanvas;
