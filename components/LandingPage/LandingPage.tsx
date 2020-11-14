import Link from 'next/link';
import { useIntl } from 'react-intl';

import { BeverageCoverImage, HeadTitle } from 'elements';
import { ImageType } from 'utils/enums/Beverage';
import { Basics } from 'utils/types/Beverage';
import { getValueByLanguage } from 'utils/helpers';
import Pagination from './Pagination';
import styles from './LandingPage.module.css';

type Props = {
  basics: Basics[];
  total: number;
};

const LandingPage: React.FC<Props> = ({ basics, total }) => {
  const { formatMessage, locale } = useIntl();

  const getAltText = ({ brand, name }) => {
    const beverageName = getValueByLanguage(name, locale).value;
    const brandName = getValueByLanguage(brand.name, locale).value;

    return `${beverageName}, ${brandName}`;
  };

  return (
    <>
      <ul className={styles.list}>
        <HeadTitle title="main" />
        {basics.map(
          ({ badge, brand, container, id, name, photos, shortId }) => (
            <li key={id}>
              <Link href={`/details/${shortId}/${brand.badge}/${badge}`}>
                <a>
                  {photos?.cover ? (
                    <BeverageCoverImage
                      alt={getAltText({ brand, name })}
                      outline={photos.outlines?.cover}
                      path={`${brand.badge}/${badge}/${shortId}`}
                      ratio={
                        (photos?.cover?.height / photos?.cover?.width) * 100
                      }
                      type={ImageType.cover}
                    />
                  ) : (
                    <img
                      className={styles.brokenContainer}
                      src={`${process.env.NEXT_PUBLIC_PHOTO_SERVER}/broken-${container.type}.svg`}
                      alt={formatMessage({ id: 'tileImageNotFound' })}
                    />
                  )}
                </a>
              </Link>
            </li>
          ),
        )}
      </ul>
      <Pagination current={1} pages={Math.ceil(total / 60)} />
    </>
  );
};

export default LandingPage;
