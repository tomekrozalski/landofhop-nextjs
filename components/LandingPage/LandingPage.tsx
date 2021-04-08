import Link from 'next/link';
import { useIntl } from 'react-intl';

import BeverageCoverImage from 'elements/BeverageCoverImage';
import HeadTitle from 'elements/HeadTitle';
import { ImageType } from 'utils/enums/Beverage';
import { Basics } from 'utils/types/Beverage';
import Pagination from './Pagination';
import styles from './LandingPage.module.css';

type Props = {
  basics: Basics[];
  current: number;
  total: number;
};

const LandingPage: React.FC<Props> = ({ basics, current, total }) => {
  const { formatMessage } = useIntl();

  return (
    <>
      <ul className={styles.list}>
        <HeadTitle title="main" values={{ page: current }} />
        {basics
          .slice(0, 1)
          .map(({ badge, brand, container, id, name, photos, shortId }) => (
            <li key={id}>
              <Link href={`/details/${shortId}/${brand.badge}/${badge}`}>
                <a>
                  {photos?.cover ? (
                    <BeverageCoverImage
                      badge={badge}
                      brand={brand}
                      name={name}
                      outline={photos.outlines?.cover}
                      shortId={shortId}
                      ratio={
                        (photos?.cover?.height / photos?.cover?.width) * 100
                      }
                      type={ImageType.cover}
                    />
                  ) : (
                    <img
                      className={styles.brokenContainer}
                      src={`${process.env.NEXT_PUBLIC_PHOTO_SERVER}/broken-${container.type}.svg`}
                      alt={formatMessage({ id: 'errors.imageNotFound' })}
                    />
                  )}
                </a>
              </Link>
            </li>
          ))}
      </ul>
      <Pagination current={current} pages={Math.ceil(total / 60)} />
    </>
  );
};

export default LandingPage;
