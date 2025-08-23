"use client"

import { useState, useEffect, useRef } from "react"
import { Canvas, useFrame } from "@react-three/fiber"
import { Points, PointMaterial } from "@react-three/drei"
import type * as THREE from "three"

// Sand particle system for preloader with reveal effect
function SandParticles({ isRevealing }: { isRevealing: boolean }) {
  const ref = useRef<THREE.Points>(null!)
  const [positions] = useState(() => {
    const positions = new Float32Array(2000 * 3) // Increased particle count for reveal effect
    for (let i = 0; i < 2000; i++) {
      positions[i * 3] = (Math.random() - 0.5) * 20
      positions[i * 3 + 1] = (Math.random() - 0.5) * 20
      positions[i * 3 + 2] = (Math.random() - 0.5) * 20
    }
    return positions
  })

  useFrame((state) => {
    if (ref.current) {
      if (isRevealing) {
        ref.current.rotation.x = state.clock.elapsedTime * 0.1
        ref.current.rotation.y = state.clock.elapsedTime * 0.15
        ref.current.position.y += 0.02 // Drift upward
        ref.current.position.x += Math.sin(state.clock.elapsedTime) * 0.01
      } else {
        ref.current.rotation.x = state.clock.elapsedTime * 0.05
        ref.current.rotation.y = state.clock.elapsedTime * 0.03
      }
    }
  })

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial
        transparent
        color="#d4af37"
        size={isRevealing ? 0.02 : 0.015}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={isRevealing ? 0.3 : 0.7}
      />
    </Points>
  )
}

interface PreloaderProps {
  onComplete: () => void
}

export function Preloader({ onComplete }: PreloaderProps) {
  const [isRevealing, setIsRevealing] = useState(false)

  useEffect(() => {
    const revealTimer = setTimeout(() => {
      setIsRevealing(true)
    }, 1500)

    const completeTimer = setTimeout(() => {
      onComplete()
    }, 3500) // Extended time for reveal effect

    return () => {
      clearTimeout(revealTimer)
      clearTimeout(completeTimer)
    }
  }, [onComplete])

  return (
    <div
      className={`fixed inset-0 z-50 flex items-center justify-center marble-bg transition-opacity duration-1000 ${isRevealing ? "opacity-0" : "opacity-100"}`}
    >
      <div className="w-full h-full opacity-80">
        <Canvas camera={{ position: [0, 0, 8] }}>
          <ambientLight intensity={0.4} />
          <SandParticles isRevealing={isRevealing} />
        </Canvas>
      </div>
      <div
        className={`absolute inset-0 flex items-center justify-center transition-opacity duration-1000 ${isRevealing ? "opacity-0" : "opacity-100"}`}
      >
        <div className="text-center">
          <div className="text-6xl mb-4 text-primary">⧫</div>
          <div className="text-primary text-xl font-serif">Древние пески сдвигаются...</div>
        </div>
      </div>
    </div>
  )
}
