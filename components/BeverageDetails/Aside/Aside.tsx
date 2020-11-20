import Link from 'next/link';

import { Basics } from 'utils/types/Beverage';
import { LeftIcon, RightIcon } from 'elements/icons';
import styles from './Aside.module.css';

type Props = {
  next: Basics | null;
  previous: Basics | null;
};

const Aside: React.FC<Props> = ({ next, previous }) => (
  <aside className={styles.aside}>
    {previous ? (
      <Link
        href={`/details/${previous.shortId}/${previous.brand.badge}/${previous.badge}`}
      >
        <a>
          <LeftIcon message="beverage.previous" />
        </a>
      </Link>
    ) : (
      <span>
        <LeftIcon />
      </span>
    )}
    {next ? (
      <Link href={`/details/${next.shortId}/${next.brand.badge}/${next.badge}`}>
        <a>
          <RightIcon message="beverage.next" />
        </a>
      </Link>
    ) : (
      <span>
        <RightIcon />
      </span>
    )}
  </aside>
);

export default Aside;
