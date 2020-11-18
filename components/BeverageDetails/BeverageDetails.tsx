import { useRouter } from 'next/router';
import { Basics, Details } from 'utils/types/Beverage';
import styles from './BeverageDetails.module.css';
import { Gallery } from '.';

type Props = {
  details: Details;
  next: Basics;
  previous: Basics;
};

const BeverageDetails: React.FC<Props> = ({ details, next, previous }) => {
  const router = useRouter();

  if (router.isFallback) {
    return <div>Loading...</div>;
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
