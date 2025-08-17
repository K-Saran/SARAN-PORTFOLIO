import { useFrame } from '@react-three/fiber';
import { useRef } from 'react';
import { useGLTF, Float, Text3D } from '@react-three/drei';
import { Mesh, Group } from 'three';
import * as THREE from 'three';

// Abstract 3D Shape Component
const AbstractShape = ({ position, color, speed = 1 }: any) => {
  const meshRef = useRef<Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += 0.01 * speed;
      meshRef.current.rotation.y += 0.02 * speed;
      meshRef.current.position.y += Math.sin(state.clock.elapsedTime * speed) * 0.001;
    }
  });

  return (
    <Float
      speed={speed}
      rotationIntensity={0.5}
      floatIntensity={0.5}
      position={position}
    >
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
          color={color}
          emissive={color}
          emissiveIntensity={0.2}
          wireframe
        />
      </mesh>
    </Float>
  );
};

// Cyberpunk Grid
const CyberGrid = () => {
  const gridRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (gridRef.current) {
      gridRef.current.rotation.y += 0.005;
    }
  });

  const gridMaterial = new THREE.LineBasicMaterial({ 
    color: 0x00ffff, 
    transparent: true, 
    opacity: 0.3 
  });

  const createGridLine = (start: THREE.Vector3, end: THREE.Vector3) => {
    const geometry = new THREE.BufferGeometry().setFromPoints([start, end]);
    return new THREE.Line(geometry, gridMaterial);
  };

  return (
    <group ref={gridRef} position={[0, -2, 0]}>
      {Array.from({ length: 21 }, (_, i) => {
        const offset = (i - 10) * 0.5;
        return (
          <group key={i}>
            <primitive 
              object={createGridLine(
                new THREE.Vector3(-5, 0, offset),
                new THREE.Vector3(5, 0, offset)
              )}
            />
            <primitive 
              object={createGridLine(
                new THREE.Vector3(offset, 0, -5),
                new THREE.Vector3(offset, 0, 5)
              )}
            />
          </group>
        );
      })}
    </group>
  );
};

// Floating Particles
const FloatingParticles = () => {
  const particlesRef = useRef<Group>(null);
  
  useFrame((state) => {
    if (particlesRef.current) {
      particlesRef.current.rotation.y += 0.002;
      particlesRef.current.children.forEach((child, index) => {
        child.position.y += Math.sin(state.clock.elapsedTime + index) * 0.001;
      });
    }
  });

  const particles = Array.from({ length: 50 }, (_, i) => ({
    id: i,
    position: [
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
      (Math.random() - 0.5) * 10,
    ] as [number, number, number],
    color: ['#00ffff', '#ff00ff', '#8000ff'][Math.floor(Math.random() * 3)],
    size: Math.random() * 0.1 + 0.05,
  }));

  return (
    <group ref={particlesRef}>
      {particles.map((particle) => (
        <mesh key={particle.id} position={particle.position}>
          <sphereGeometry args={[particle.size, 8, 8]} />
          <meshBasicMaterial 
            color={particle.color}
            transparent
            opacity={0.6}
          />
        </mesh>
      ))}
    </group>
  );
};

// Main Scene Component
export const Scene3D = () => {
  return (
    <>
      {/* Lighting */}
      <ambientLight intensity={0.3} />
      <pointLight position={[10, 10, 10]} intensity={1} color="#00ffff" />
      <pointLight position={[-10, -10, -10]} intensity={0.5} color="#ff00ff" />
      <spotLight
        position={[0, 20, 0]}
        angle={0.3}
        penumbra={1}
        intensity={0.5}
        color="#8000ff"
      />

      {/* 3D Elements */}
      <CyberGrid />
      <FloatingParticles />
      
      {/* Abstract Shapes */}
      <AbstractShape position={[-3, 2, 0]} color="#00ffff" speed={1} />
      <AbstractShape position={[3, -1, 2]} color="#ff00ff" speed={0.8} />
      <AbstractShape position={[0, 3, -3]} color="#8000ff" speed={1.2} />
      <AbstractShape position={[-2, -2, 1]} color="#0080ff" speed={0.9} />
    </>
  );
};