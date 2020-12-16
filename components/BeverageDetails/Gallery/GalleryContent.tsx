import { useCallback, useEffect, useMemo, useState } from 'react';
import { LinearFilter, TextureLoader } from 'three';
import { useLoader, useThree } from 'react-three-fiber';

type Props = {
  badge: string;
  brand: string;
  photos: number;
  shortId: string;
};

const GalleryContent: React.FC<Props> = ({ badge, brand, shortId, photos }) => {
  const { viewport } = useThree();
  const [img, setImg] = useState(0);
  const [rotatable, setRotatable] = useState(false);
  const [dragData, setDragData] = useState({
    beforeXPosition: 0,
    currentXPosition: 0,
  });

  const rotate = useCallback(val => {
    let timeout;

    if (val === 23) {
      setImg(0);
      clearTimeout(timeout);
    } else {
      setImg(val);

      timeout = setTimeout(() => {
        rotate(val + 1);
      }, 10);
    }
  }, []);

  useEffect(() => {
    setImg(0);
    rotate(1);
  }, [badge, brand, shortId]);

  const galleryPath = useMemo(() => {
    const basicPath = `${process.env.NEXT_PUBLIC_PHOTO_SERVER}/${brand}/${badge}/${shortId}/container`;
    const specificPath =
      window.devicePixelRatio && window.devicePixelRatio >= 2
        ? `${basicPath}/jpg/2x`
        : `${basicPath}/jpg/1x`;

    return specificPath;
  }, [badge, brand, shortId]);

  const textureLinks = useMemo(
    () =>
      new Array(photos).fill('').map((_, i) => {
        const index = i + 1;
        return index < 10
          ? `${galleryPath}/0${index}.jpg`
          : `${galleryPath}/${index}.jpg`;
      }),
    [galleryPath],
  );

  const rawTextures = useLoader<any>(TextureLoader, textureLinks);

  const textures = useMemo(
    () =>
      rawTextures.map(
        // eslint-disable-next-line no-return-assign, no-param-reassign, no-sequences
        (texture: any) => {
          texture.minFilter = LinearFilter;
          return texture;
        },
      ),
    [rawTextures],
  );

  useEffect(() => {
    const direction =
      dragData.beforeXPosition > dragData.currentXPosition ? img - 1 : img + 1;

    const nextImg =
      direction < 0 ? (photos + direction) % photos : direction % photos;

    setImg(nextImg);
  }, [dragData]);

  const onMove = (e: React.MouseEvent) => {
    if (rotatable && e.clientX !== dragData.currentXPosition) {
      setDragData(({ currentXPosition }) => ({
        beforeXPosition: currentXPosition,
        currentXPosition: e.clientX,
      }));
    }
  };

  const onWheelMove = (e: any) => {
    const direction = e.deltaY > 0 ? img + 1 : img - 1;

    const nextImg =
      direction < 0 ? (photos + direction) % photos : direction % photos;

    setImg(nextImg);
  };

  return (
    <mesh
      scale={[viewport.width, viewport.height, 1]}
      onPointerUp={() => setRotatable(false)}
      onPointerDown={() => setRotatable(true)}
      onPointerOut={() => setRotatable(false)}
      onPointerMove={onMove}
      onWheel={onWheelMove}
    >
      <planeBufferGeometry attach="geometry" />
      <meshStandardMaterial attach="material" map={textures[img]} />
    </mesh>
  );
};

export default GalleryContent;
