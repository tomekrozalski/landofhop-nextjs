import { useMemo } from 'react';
import { useLoader } from 'react-three-fiber';
import { LinearFilter, TextureLoader } from 'three';

const Icon360: React.FC = () => {
  const texture = useLoader(TextureLoader, '/images/icon360.png');
  // eslint-disable-next-line no-return-assign
  useMemo(() => (texture.minFilter = LinearFilter), []);

  return (
    <mesh scale={[35, 20, 1]} position={[85, 235, 1]}>
      <planeBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={texture} />
    </mesh>
  );
};

export default Icon360;
