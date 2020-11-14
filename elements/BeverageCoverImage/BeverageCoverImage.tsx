import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';

import { ImageType } from 'utils/enums/Beverage';
import styles from './BeverageCoverImage.module.css';

const inImageCache = (src: string) => {
  const image = new Image();
  image.src = src;

  return image.complete;
};

type Props = {
  alt: string;
  outline: string;
  path: string;
  ratio: number;
  type: ImageType;
};

const BeverageCoverImage: React.FC<Props> = ({
  alt,
  outline,
  path,
  ratio,
  type,
}) => {
  const container = useRef(null);
  const [visible, setVisible] = useState(false);
  const [loaded, setLoaded] = useState(false);

  const getPath = (format: 'webp' | 'jpg', size: 1 | 2) => {
    const basicPath = `${process.env.NEXT_PUBLIC_PHOTO_SERVER}/${path}`;

    return type === ImageType.cover
      ? `${basicPath}/${type}/${format}/${size}x.${format}`
      : `${basicPath}/${type}/${format}/${size}x/01.${format}`;
  };

  const seenBefore = () => {
    return process.browser ? inImageCache(getPath('webp', 1)) : null;
  };

  const enhanceOutlineWithStyles = (value: string) =>
    value.replace(
      '<svg',
      `<svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 1; transition: var(--transition-default);"`,
    );

  useEffect(() => {
    const io = new IntersectionObserver(
      ([entry], observer) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0 },
    );

    if (container.current) {
      io.observe(container.current!);
    }
  }, []);

  return (
    <div
      className={clsx(styles.wrapper, { [styles.wrapperLoaded]: loaded })}
      ref={container}
    >
      <>
        <div
          className={styles.stretcher}
          style={{ paddingBottom: `${ratio}%` }}
        />
        <div
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: outline ? enhanceOutlineWithStyles(outline) : '',
          }}
        />
      </>
      {process.browser && visible && (
        <picture>
          <source
            type="image/webp"
            srcSet={`${getPath('webp', 1)} 1x, ${getPath('webp', 2)} 2x`}
          />
          <source srcSet={`${getPath('jpg', 1)} 1x, ${getPath('jpg', 2)} 2x`} />
          <img
            className={clsx(styles.cover, {
              [styles.coverLoaded]: seenBefore() || loaded,
            })}
            srcSet={`${getPath('jpg', 1)} 1x, ${getPath('jpg', 2)} 2x`}
            src={getPath('jpg', 1)}
            alt={loaded ? alt : ''}
            onLoad={() => setLoaded(true)}
          />
        </picture>
      )}
      {!process.browser ? (
        <picture
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: `<img src="${getPath(
              'jpg',
              1,
            )}" alt="" style="position:absolute;top:0;left:0;opacity:1;width:100%;height:100%;object-fit:cover;object-position:center;" />`,
          }}
        />
      ) : null}
    </div>
  );
};

export default BeverageCoverImage;
