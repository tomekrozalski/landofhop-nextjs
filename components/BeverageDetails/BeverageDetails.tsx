import { useContext } from 'react';
import { useRouter } from 'next/router';

import { AugmentedDetails } from 'utils/types/Beverage';
import { AuthenticationContext } from 'utils/contexts';
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
  const { isLoggedIn } = useContext(AuthenticationContext);

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
      {isLoggedIn && <AdminBar details={details} />}
      <Aside next={next} previous={previous} />
      <HeadTitle
        title="beverageDetails"
        values={{
          brand: details.brand.name.value,
          name: details.name.value,
        }}
      />
    </article>
  );
};

export default BeverageDetails;
