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
    {next ? (
      <Link href={`/details/${next.shortId}/${next.brand.badge}/${next.badge}`}>
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
        href={`/details/${previous.shortId}/${previous.brand.badge}/${previous.badge}`}
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

export default Aside;
