import Link from 'next/link';
import { useRouter } from 'next/router';

import { Basics } from 'utils/types/Beverage';
import LeftIcon from 'elements/icons/Left';
import RightIcon from 'elements/icons/Right';
import styles from './Aside.module.css';

type Props = {
  next: Basics | null;
  previous: Basics | null;
};

const Aside: React.FC<Props> = ({ next, previous }) => {
  const { pathname } = useRouter();

  return (
    <aside className={styles.aside}>
      {next ? (
        <Link
          href={{
            pathname,
            query: {
              brand: next.brand.badge,
              name: next.badge,
              shortId: next.shortId,
            },
          }}
        >
          <a>
            <LeftIcon message="beverage.next" />
          </a>
        </Link>
      ) : (
        <span>
          <LeftIcon />
        </span>
      )}
      {previous ? (
        <Link
          href={{
            pathname,
            query: {
              brand: previous.brand.badge,
              name: previous.badge,
              shortId: previous.shortId,
            },
          }}
        >
          <a>
            <RightIcon message="beverage.previous" />
          </a>
        </Link>
      ) : (
        <span>
          <RightIcon />
        </span>
      )}
    </aside>
  );
};

export default Aside;
