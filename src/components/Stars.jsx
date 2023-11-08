import React, { useState, useRef, Suspense } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial, Preload } from '@react-three/drei';
import * as random from 'maath/random/dist/maath-random.esm';

const Stars = (props) => {
    const ref = useRef();

    // Define the number of spheres you want to create
    const numSpheres = 3;
    const positions = new Float32Array(numSpheres * 1 * 3000);

    // Generate positions for multiple spheres and concatenate them into the positions array
    for (let i = 0; i < numSpheres; i++) {
        const offset = i * 1 * 3000;
        const sphere = random.inSphere(new Float32Array(3000), { radius: 30 });

        // Copy the positions of the current sphere into the positions array
        positions.set(sphere, offset);
    }

    // Check for NaN values in the positions array
    if (positions.some(isNaN)) {
        console.error('Generated positions contain NaN values:', positions);
        return null; // Render nothing if NaN values are detected
    }

    useFrame((state, delta) => {
        ref.current.rotation.x -= delta / 10;
        ref.current.rotation.y -= delta / 15;
    });

    return (
        <group rotation={[0, 0, Math.PI / 4]}>
            <Points
                ref={ref}
                positions={positions}
                stride={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#f272c8"
                    size={0.1} // Adjust size for visibility in the scene
                    sizeAttenuation={true}
                    depthWrite={false}
                />
            </Points>
        </group>
    );
};



const StarsCanvas = () => {
    return (
        <div className="w-full h-auto absolute inset-0 z-[-1]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <Stars />
                </Suspense>

                <Preload all />
            </Canvas>
        </div>
    )
}

export default StarsCanvas;