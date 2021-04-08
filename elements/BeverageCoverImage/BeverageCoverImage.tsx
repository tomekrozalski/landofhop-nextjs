import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import clsx from 'clsx';

import { ImageType } from 'utils/enums/Beverage';
import { LanguageValue } from 'utils/types/common';
import styles from './BeverageCoverImage.module.css';

type Props = {
  badge: string;
  brand: {
    badge: string;
    name: LanguageValue;
  };
  name: LanguageValue;
  outline: string;
  ratio: number;
  shortId: string;
  type: ImageType;
};

const BeverageCoverImage: React.FC<Props> = ({
  badge,
  brand,
  name,
  outline,
  ratio,
  shortId,
  type,
}) => {
  const container = useRef(null);
  const [loaded, setLoaded] = useState(false);
  const alt = `${name.value}, ${brand.name.value}`;

  useEffect(() => {
    if (type === ImageType.container) {
      setLoaded(false);
    }
  });

  const enhanceOutlineWithStyles = (value: string) =>
    value.replace(
      '<svg',
      `<svg style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; opacity: 1; transition: var(--transition-default);"`,
    );

  const myloader = ({ src }) => {
    const base = 'https://land-of-hop-images.s3.eu-central-1.amazonaws.com';
    return `${base}/${src}/webp/2x.webp`;
  };

  return (
    <div
      className={clsx(styles.wrapper, { [styles.wrapperLoaded]: loaded })}
      ref={container}
    >
      <div
        className={styles.stretcher}
        style={{ paddingBottom: `${ratio}%` }}
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{
          __html: outline ? enhanceOutlineWithStyles(outline) : '',
        }}
      />
      <Image
        alt={alt}
        layout="fill"
        loader={myloader}
        src="browar-nepomucen/forest-black-dipa/tdzf21/cover"
      />
    </div>
  );
};

export default BeverageCoverImage;
