import { useRouter } from 'next/router';

import { AugmentedDetails } from 'utils/types/Beverage';
import { Spinner } from 'elements';
import styles from './BeverageDetails.module.css';
import { Aside, Gallery } from '.';

const BeverageDetails: React.FC<AugmentedDetails> = ({
  details,
  next,
  previous,
}) => {
  const { isFallback } = useRouter();

  if (isFallback) {
    return <Spinner />;
  }

  return (
    <article className={styles.beverageDetails}>
      <Gallery details={details} />
      {/* <Header /> */}
      {/* <Tale /> */}
      {/* <Testimony /> */}
      {/* <Impressions /> */}
      {/* <FootNotes /> */}
      {/* <AdminBar /> */}
      <Aside next={next} previous={previous} />
      {/* <BeverageDetailsSeo /> */}
    </article>
  );
};

export default BeverageDetails;
