import { Suspense, useContext } from 'react';
import { useIntl } from 'react-intl';
import { Canvas } from 'react-three-fiber';

import { Details } from 'utils/types/Beverage';
import { ImageType } from 'utils/enums/Beverage';
import { BeverageCoverImage } from 'elements';
import styles from './Gallery.module.css';

// import {
//   BrokenContainer,
//   CanvasWrapper,
//   GalleryContent,
//   Icon360,
//   Spinner,
//   Wrapper,
// } from '.';

const Gallery: React.FC<{ details: Details }> = ({ details }) => {
  const { badge, brand, container, name, photos, shortId } = details;
  const { formatMessage } = useIntl();

  return (
    <aside className={styles.gallery}>
      {photos && photos.gallery ? (
        <>
          <BeverageCoverImage
            badge={badge}
            brand={{
              badge: brand.badge,
              name: brand.name,
            }}
            name={name}
            outline={photos.outlines?.gallery}
            ratio={227.28}
            shortId={shortId}
            type={ImageType.container}
          />
          {/* {typeof window !== `undefined` && (
            <CanvasWrapper>
              <Canvas orthographic pixelRatio={window.devicePixelRatio}>
                <ambientLight />
                <Suspense fallback={<Spinner />}>
                  <Icon360 />
                  <GalleryContent
                    badge={badge}
                    brand={brand.badge}
                    shortId={shortId}
                    photos={photos.gallery}
                  />
                </Suspense>
              </Canvas>
            </CanvasWrapper>
          )} */}
        </>
      ) : (
        <img
          className={styles.brokenContainer}
          src={`${process.env.NEXT_PUBLIC_PHOTO_SERVER}/broken-${container.type}.svg`}
          alt={formatMessage({ id: 'errors.imageNotFound' })}
        />
      )}
    </aside>
  );
};

export default Gallery;
