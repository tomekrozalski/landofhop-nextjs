import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { AugmentedDetails } from 'utils/types/Beverage';
import { translate } from 'utils/helpers';
import { HeadTitle, Spinner } from 'elements';
import styles from './BeverageDetails.module.css';
import { Aside, Gallery, Header } from '.';

const BeverageDetails: React.FC<AugmentedDetails> = ({
  details,
  next,
  previous,
}) => {
  const { isFallback } = useRouter();
  const { locale } = useIntl();

  if (isFallback) {
    return <Spinner />;
  }

  return (
    <article className={styles.beverageDetails}>
      <Gallery details={details} />
      <Header details={details} />
      {/* <Tale /> */}
      {/* <Testimony /> */}
      {/* <Impressions /> */}
      {/* <FootNotes /> */}
      {/* <AdminBar /> */}
      <Aside next={next} previous={previous} />
      <HeadTitle
        title="beverageDetails"
        values={{
          brand: translate(details.brand.name, locale),
          name: translate(details.name, locale),
        }}
      />
    </article>
  );
};

export default BeverageDetails;
