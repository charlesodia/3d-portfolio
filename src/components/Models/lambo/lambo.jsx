import React from 'react'
import {Canvas} from "@react-three/fiber";
import {Float, OrbitControls} from "@react-three/drei";
import Lamborghini_aventador from "./Lamborghini_aventador.jsx";
import {Room} from "../../HeroModels/Room.jsx";
import HeroLights from "../../HeroModels/HeroLights.jsx";
import Computer from "../contact/Computer.jsx";
import {useMediaQuery} from "react-responsive";


const Lambo = () => {

    return (
        <Canvas camera={{ position: [30, 15, 15], fov: 45}}>
            <ambientLight intensity={0.5} color="#fff4e6" />

            <OrbitControls
                enablePan={false}
                enableZoom={false}
                maxDistance={20}
                minDistance={5}
                minPolarAngle={Math.PI / 5}
                maxPolarAngle={Math.PI / 2}
            />

            <directionalLight position={[5, 5, 3]} intensity={2.5} color="#ffd9b3" />
            <Float speed={6} floatIntensity={3} >
            <group scale={0.03} position={[0, -1.49, -2]} >
                <Lamborghini_aventador />
            </group>
            </Float>

        </Canvas>
    )
}
export default Lambo