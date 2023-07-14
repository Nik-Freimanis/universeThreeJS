import React, { useState, useRef, Suspense } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Preload } from "@react-three/drei";

const Stars = (props) => {
    const ref = useRef();
    const [sphere] = useState(() => generateSpherePositions(3500, 1.3));

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0.1, 0.1, Math.PI / 4]}>
            <Points ref={ref} positions={sphere} frustumCulled={false} {...props}>
                <PointMaterial
                    transparent
                    color="#cf65ac"
                    size={0.002}
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};

const generateSpherePositions = (count, radius) => {
    const positions = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
        const theta = Math.random() * 2 * Math.PI;
        const pi = Math.random() * Math.PI;
        const x = radius * Math.sin(pi) * Math.cos(theta);
        const y = radius * Math.sin(pi) * Math.sin(theta);
        const z = radius * Math.cos(pi);
        positions[i * 3] = x;
        positions[i * 3 + 1] = y;
        positions[i * 3 + 2] = z;
    }
    return positions;
};

const StarsCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0.1, 0.1, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>
                <Preload all />
            </Canvas>
        </div>
    );
};

export default StarsCanvas;
