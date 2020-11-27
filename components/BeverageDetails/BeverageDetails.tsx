import { useRouter } from 'next/router';
import { useIntl } from 'react-intl';

import { AugmentedDetails } from 'utils/types/Beverage';
import { translate } from 'utils/helpers';
import { HeadTitle, Spinner } from 'elements';
import {
  AdminBar,
  Aside,
  FootNotes,
  Gallery,
  Header,
  Impressions,
  Tale,
  Testimony,
} from '.';
import styles from './BeverageDetails.module.css';

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
      <Tale details={details} />
      <Testimony details={details} />
      <Impressions details={details} />
      <FootNotes details={details} />
      <AdminBar details={details} />
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
