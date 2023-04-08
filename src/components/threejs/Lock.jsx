import { Canvas, extend, useLoader } from '@react-three/fiber'
import { OrbitControls, Environment, Effects, useTexture } from '@react-three/drei'
import { LUTPass, LUTCubeLoader } from 'three-stdlib'


extend({ LUTPass })


function Grading() {
 const { texture3D } = useLoader(LUTCubeLoader, '/cubicle-99.CUBE')
 return (
   <Effects>
     <lUTPass lut={texture3D} intensity={0.75} />
   </Effects>
 )
}


function LockShape(props) {
 const texture = useTexture('/iridiscent.png')
 return (
   <mesh {...props}>
     <boxGeometry args={[1, 1, 0.5]} />
     <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
   </mesh>
 )
}


function HalfDonut(props) {
 const texture = useTexture('/iridiscent.png')
 return (
   <mesh {...props}>
     <torusGeometry args={[0.4, 0.1, 32, 64, Math.PI]} />
     <meshPhysicalMaterial map={texture} clearcoat={1} clearcoatRoughness={0} roughness={0} metalness={0.5} />
   </mesh>
 )
}


export default function Lock() {
 return (
   <Canvas frameloop="demand" camera={{ position: [10, 33, 5], fov: 4 }} style={{ width: '600px', height: '600px' }}>
     <ambientLight />
     <spotLight intensity={10} angle={0.9} penumbra={1} position={[5, 15, 30]} />
     <group rotation={[Math.PI/2, 0, 0]}>
       <LockShape position={[0, 0, 0]} />
       <HalfDonut position={[0, 0.5, 0]} />
     </group>
     <Grading />
     {/* <Environment preset="night" background blur={0.6} /> */}
     <OrbitControls autoRotate='true'/>
   </Canvas>
 )
}
