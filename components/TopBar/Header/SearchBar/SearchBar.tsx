import { useContext, useEffect, useRef } from 'react';
import { useIntl } from 'react-intl';
import { useRouter } from 'next/router';
import clsx from 'clsx';
import isNil from 'lodash/isNil';

import { TopBarContext } from 'utils/contexts';
import Button from './Button';
import styles from './SearchBar.module.css';

const Searchbar = () => {
  const { formatMessage } = useIntl();
  const { pathname, push, query } = useRouter();
  const input = useRef(null!);
  const { setLoginbar, setNavbar, setSearchbarActive } = useContext(
    TopBarContext,
  );

  const isActive = !isNil(query?.search);

  useEffect(() => {
    if (isActive) {
      setLoginbar(false);
      setNavbar(false);
      setSearchbarActive(true);
      input.current.focus();
    } else {
      setSearchbarActive(false);
    }
  }, [query?.search]);

  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value: search } = e.currentTarget;

    if (search) {
      setSearchbarActive(true);
    }

    push({ pathname, query: { ...query, search } }, undefined, {
      shallow: true,
    });
  };

  return (
    <div className={clsx(styles.searchBar, { [styles.active]: isActive })}>
      <input
        type="text"
        className={styles.input}
        onChange={onSearchChange}
        placeholder={formatMessage({ id: 'global.search' })}
        ref={input}
        value={query?.search ?? ''}
      />
      <Button />
    </div>
  );
};

export default Searchbar;
