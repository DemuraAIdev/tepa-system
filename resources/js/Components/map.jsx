import { Canvas } from '@react-three/fiber';
import { OrbitControls, useGLTF } from '@react-three/drei';
import Tepad from './TepaSangatRil-EDITED';

function MyThree() {

    return (
        <div className='h-full md:h-screen'>
            <div className='md:h-full '>
                <Canvas>
                    <ambientLight intensity={5} />

                    <OrbitControls  enableZoom={false}/>
                    <Tepad />
                </Canvas>
            </div>
        </div>
    );
}

export default MyThree;
