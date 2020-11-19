import { useRef, useState } from 'react';
import { useFrame } from 'react-three-fiber';
import get from 'lodash/get';
import set from 'lodash/set';

const Spinner: React.FC = () => {
  const mesh = useRef(null!);

  const [grow, setGrow] = useState(true);
  const [size, setSize] = useState(20);

  useFrame(() => {
    const speed = 0.4;
    const x = 'current.scale.x';
    const y = 'current.scale.y';

    if (get(mesh, 'current.scale.x') > 30) {
      setGrow(false);
    }

    if (get(mesh, 'current.scale.x') < 20) {
      setGrow(true);
    }

    setSize(val => (grow ? val + speed : val - speed));
    set(mesh, x, size);
    set(mesh, y, size);
  });

  return (
    <mesh scale={[20, 20, 1]} position={[95, 235, 1]} ref={mesh}>
      <circleBufferGeometry attach="geometry" args={[0.2, 32]} />
      <meshStandardMaterial attach="material" color="#aaa" />
    </mesh>
  );
};

export default Spinner;
