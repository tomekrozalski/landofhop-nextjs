import { useRouter } from 'next/router';

import { Basics, Details } from 'utils/types/Beverage';
import { Spinner } from 'elements';
import styles from './BeverageDetails.module.css';
import { Gallery } from '.';

type Props = {
  details: Details;
  next: Basics;
  previous: Basics;
};

const BeverageDetails: React.FC<Props> = ({ details, next, previous }) => {
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
      {/* <Aside next={pageContext.next} previous={pageContext.previous} /> */}
      {/* <BeverageDetailsSeo /> */}
    </article>
  );
};

export default BeverageDetails;
