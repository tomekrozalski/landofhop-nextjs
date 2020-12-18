import { useContext } from 'react';
import Link from 'next/link';
import { FormattedMessage, useIntl } from 'react-intl';

import { SearchContext } from 'utils/contexts';
import { Status } from 'utils/helpers/serverCall';
import BeverageCoverImage from 'elements/BeverageCoverImage';
import { ImageType } from 'utils/enums/Beverage';
import Spinner from 'elements/Spinner';
import styles from './LandingPage.module.css';

const SearchResults: React.FC = () => {
  const { searchResults, status } = useContext(SearchContext);
  const { formatMessage } = useIntl();

  if (status === Status.pending) {
    return <Spinner />;
  }

  if (!searchResults.length && status === Status.resolved) {
    return (
      <div className="error-wrapper">
        <h1>
          <FormattedMessage id="errors.search.nothingFound" />
        </h1>
      </div>
    );
  }

  return (
    <ul className={styles.list}>
      {searchResults.map(
        ({ badge, brand, container, name, photos, shortId }) => (
          <li key={`${shortId}/${brand.badge}/${badge}`}>
            <Link href={`/details/${shortId}/${brand.badge}/${badge}`}>
              <a>
                {photos?.cover ? (
                  <BeverageCoverImage
                    badge={badge}
                    brand={brand}
                    name={name}
                    outline={photos.outlines?.cover}
                    shortId={shortId}
                    ratio={(photos?.cover?.height / photos?.cover?.width) * 100}
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
        ),
      )}
    </ul>
  );
};

export default SearchResults;
