import { Canvas, useFrame, useThree } from "@react-three/fiber"
import { useMemo, useRef, useEffect } from "react"
import { AdditiveBlending, MathUtils } from "three"

const Particles = () => {
  const pointsRef = useRef()
  const { width, height } = useThree((state) => state.viewport)
  const count = 2500

  const scrollY = useRef(0)
  useEffect(() => {
    const handleScroll = () => {
      scrollY.current = window.scrollY
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])
  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3)
    for (let i = 0; i < count; i++) {
      const i3 = i * 3
      pos[i3] = (Math.random() - 0.5) * (width * 1.6)
      pos[i3 + 1] = (Math.random() - 0.5) * (height * 1.6)
      pos[i3 + 2] = (Math.random() - 0.5) * 5
    }
    return pos
  }, [width, height])

  useFrame((state) => {
    if (!pointsRef.current) return

    const targetMouseX = state.pointer.x * 0.4
    const targetMouseY = state.pointer.y * 0.4

    const targetScrollY = scrollY.current * 0.0015

    pointsRef.current.position.x = MathUtils.lerp(
      pointsRef.current.position.x,
      targetMouseX,
      0.05
    )

    pointsRef.current.position.y = MathUtils.lerp(
      pointsRef.current.position.y,
      targetMouseY + targetScrollY,
      0.05
    )

    pointsRef.current.rotation.y = MathUtils.lerp(
      pointsRef.current.rotation.y,
      state.pointer.x * 0.05,
      0.05
    )
  })

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <pointsMaterial
        color="#ffffff"
        sizeAttenuation={false}
        transparent={true}
        opacity={0.85}
        blending={AdditiveBlending}
      />
    </points>
  )
}

const Background = () => {
  return (
    <div className="fixed inset-0 w-full h-full pointer-events-none z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
        <Particles />
      </Canvas>
    </div>
  )
}

export default Background
