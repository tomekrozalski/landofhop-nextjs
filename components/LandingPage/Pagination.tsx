import Link from 'next/link';
import clsx from 'clsx';

import styles from './Pagination.module.css';

type Props = {
  current: number;
  pages: number;
};

const Pagination: React.FC<Props> = ({ current, pages }) => {
  const getStartingPoint = () => {
    if (current <= 3) {
      return 1;
    }

    if (current + 2 >= pages) {
      return pages - 4;
    }

    return current - 2;
  };

  const getPages = () =>
    new Array(4)
      .fill('')
      .reduce(acc => [...acc, acc.pop() + 1], [getStartingPoint()]);

  return (
    <ul className={styles.list}>
      <li>
        {current === 1 ? (
          <span className={clsx(styles.button, styles.inactive)}>←</span>
        ) : (
          <Link href="">
            <a className={clsx(styles.button, styles.active)}>←</a>
          </Link>
        )}
      </li>
      {current > 4 && (
        <>
          <li>
            <Link href="/">
              <a className={clsx(styles.button, styles.active)}>←</a>
            </Link>
          </li>
          <li>
            <span className={clsx(styles.button, styles.inactive)}>…</span>
          </li>
        </>
      )}
      {getPages().map((pageValue: number) => (
        <li key={pageValue}>
          <Link href={pageValue === 1 ? '/' : `/list/${pageValue}`}>
            <a
              className={clsx(styles.button, styles.active, {
                [styles.current]: pageValue === current,
              })}
            >
              {pageValue}
            </a>
          </Link>
        </li>
      ))}
      {pages > current + 3 && (
        <>
          <li>
            <span className={clsx(styles.button, styles.inactive)}>…</span>
          </li>
          <li>
            <Link href={`/list/${pages}`}>
              <a className={clsx(styles.button, styles.active)}>{pages}</a>
            </Link>
          </li>
        </>
      )}
      <li>
        {pages === current ? (
          <span className={clsx(styles.button, styles.inactive)}>→</span>
        ) : (
          <Link href={`/list/${pages}`}>
            <a className={clsx(styles.button, styles.active)}>→</a>
          </Link>
        )}
      </li>
    </ul>
  );
};

export default Pagination;
