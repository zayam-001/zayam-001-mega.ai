
import React, { useRef, useMemo, useEffect, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, Sphere, MeshDistortMaterial, PerspectiveCamera, Environment, ContactShadows, Stars, Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';
import { ExpertTheme } from '../types';

const AmbientLight = 'ambientLight' as any;
const PointLight = 'pointLight' as any;
const SpotLight = 'spotLight' as any;

interface CoreProps {
  theme: ExpertTheme;
  hoveredId?: string | null;
  scrollProgress?: number;
}

const FloatingParticles = () => {
  const count = 800;
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 40;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 40;
    }
    return pos;
  }, []);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame((state) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y = state.clock.getElapsedTime() * 0.005;
    }
  });

  return (
    <Points ref={pointsRef} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#ffffff"
        size={0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.15}
      />
    </Points>
  );
};

const Core: React.FC<CoreProps> = ({ theme, hoveredId, scrollProgress = 0 }) => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ringRef = useRef<THREE.Mesh>(null);
  const { camera, size } = useThree();
  const isMobile = size.width < 768;
  
  const colors = useMemo(() => ({
    default: new THREE.Color('#1e40af'), 
    cyan: new THREE.Color('#0891b2'),    
    gold: new THREE.Color('#d97706'),    
    violet: new THREE.Color('#7c3aed'),
    deepPurple: new THREE.Color('#4c1d95'),
    ruby: new THREE.Color('#9f1239')
  }), []);

  useFrame((state) => {
    if (meshRef.current) {
      const time = state.clock.getElapsedTime();
      meshRef.current.rotation.x = time * 0.1;
      meshRef.current.rotation.y = time * 0.15;
      
      // Reactive Scaling
      const scaleBase = isMobile ? 0.8 : 1.1;
      const scaleFactor = scaleBase + scrollProgress * 0.5;
      meshRef.current.scale.setScalar(THREE.MathUtils.lerp(meshRef.current.scale.x, scaleFactor, 0.05));

      const material = meshRef.current.material as any;
      let targetColor = colors.default;
      
      if (hoveredId) {
        targetColor = colors[theme as keyof typeof colors] || colors.default;
      } else {
        if (scrollProgress > 0.7) targetColor = colors.ruby;
        else if (scrollProgress > 0.4) targetColor = colors.deepPurple;
        else if (scrollProgress > 0.2) targetColor = colors.violet;
      }

      material.color.lerp(targetColor, 0.03);
      material.emissive.lerp(targetColor, 0.03);
      material.opacity = hoveredId ? 0.7 : 0.4; // Lowered for readability

      // Adaptive Camera
      const targetZ = isMobile ? 8 + scrollProgress * 15 : 6 + scrollProgress * 12;
      camera.position.z = THREE.MathUtils.lerp(camera.position.z, targetZ, 0.05);
      camera.position.y = THREE.MathUtils.lerp(camera.position.y, -scrollProgress * 5, 0.05);
    }

    if (ringRef.current) {
      ringRef.current.rotation.z = state.clock.getElapsedTime() * 0.05;
      ringRef.current.scale.setScalar((isMobile ? 0.8 : 1) + scrollProgress * 1.2);
    }
  });

  return (
    <>
      <Float speed={1.2} rotationIntensity={0.1} floatIntensity={0.3}>
        <Sphere args={[1, 64, 64]} ref={meshRef}>
          <MeshDistortMaterial
            transparent
            opacity={0.4}
            speed={2}
            distort={0.3 + (scrollProgress * 0.2)}
            radius={1}
            emissiveIntensity={0.8}
            roughness={0.2}
            metalness={0.9}
          />
        </Sphere>
      </Float>

      <mesh ref={ringRef}>
        <torusGeometry args={[1.5, 0.003, 16, 100]} />
        <meshStandardMaterial 
          color="#ffffff" 
          emissive="#ffffff" 
          emissiveIntensity={1} 
          transparent 
          opacity={0.05} 
        />
      </mesh>
    </>
  );
};

export const Scene: React.FC<CoreProps> = ({ theme, hoveredId, scrollProgress }) => {
  return (
    <div className="fixed inset-0 z-0 pointer-events-none transition-opacity duration-1000 overflow-hidden">
      <Canvas dpr={[1, 1.5]}>
        <PerspectiveCamera makeDefault position={[0, 0, 6]} fov={35} />
        <AmbientLight intensity={0.4} />
        <PointLight position={[10, 10, 10]} intensity={1} />
        <SpotLight position={[-10, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} />
        
        <Stars radius={100} depth={50} count={2000} factor={4} saturation={0} fade speed={0.5} />
        <FloatingParticles />
        <Core theme={theme} hoveredId={hoveredId} scrollProgress={scrollProgress} />
        
        <Environment preset="night" />
        <ContactShadows position={[0, -3.5, 0]} opacity={0.1} scale={15} blur={4} far={4} />
      </Canvas>
    </div>
  );
};
