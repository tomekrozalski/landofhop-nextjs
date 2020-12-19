import { useCallback, useEffect, useState } from 'react';
import Link from 'next/link';
import { FormattedMessage, useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import debounce from 'lodash/debounce';

import serverCall, { Endpoints, Status } from 'utils/helpers/serverCall';
import BeverageCoverImage from 'elements/BeverageCoverImage';
import { ImageType } from 'utils/enums/Beverage';
import Spinner from 'elements/Spinner';
import styles from './LandingPage.module.css';

const SearchResults: React.FC = () => {
  const { formatMessage, locale } = useIntl();
  const { query } = useRouter();
  const [status, setStatus] = useState(Status.idle);
  const [searchResults, setSearchResults] = useState([]);

  const getResults = useCallback(
    debounce(phrase => {
      serverCall(Endpoints.beverageSearch, {
        method: 'POST',
        body: JSON.stringify({ phrase, language: locale }),
      }).then(values => {
        setSearchResults(values);
        setStatus(Status.resolved);
      });
    }, 1000),
    [],
  );

  useEffect(() => {
    if (query?.search) {
      setStatus(Status.pending);
      getResults(query.search);
    } else {
      setSearchResults([]);
      setStatus(Status.rejected);
    }
  }, [query?.search]);

  useEffect(() => {
    return () => getResults.cancel();
  }, []);

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
