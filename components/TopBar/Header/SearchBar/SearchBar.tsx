import { useCallback, useContext, useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import debounce from 'lodash/debounce';

import { SearchContext, TopBarContext } from 'utils/contexts';
import { Status } from 'utils/helpers/serverCall';
import Button from './Button';
import styles from './SearchBar.module.css';

const Searchbar = () => {
  const input = useRef(null!);
  const { setLoginbar, setNavbar, setSearchbarActive } = useContext(
    TopBarContext,
  );
  const { setSearchResults, setStatus } = useContext(SearchContext);

  const [isActive, setActive] = useState(false);
  const [text, setText] = useState('');
  const [searchFor, setSearchFor] = useState('');

  useEffect(() => {
    if (isActive) {
      setLoginbar(false);
      setNavbar(false);
      input.current.focus();
    } else {
      setSearchbarActive(false);
      setText('');
      setSearchFor('');
      setSearchResults([]);
    }
  }, [isActive]);

  const handleChange = useCallback(debounce(setSearchFor, 1000), []);

  useEffect(() => {
    return () => handleChange.cancel();
  }, []);

  useEffect(() => {
    if (searchFor) {
      setStatus(Status.pending);

      console.log('searchFor', searchFor);

      // serverCall({
      //   method: 'POST',
      //   path: 'beverage/search',
      //   body: JSON.stringify({ phrase: searchFor, language: locale }),
      // }).then(values => {
      //   if (!values.length) {
      //     setNothingFound(true);
      //   }

      //   setSearchResults(values);
      //   setLoading(false);
      // });
    } else {
      // setSearchResults([]);
    }
  }, [searchFor]);

  const onSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;

    if (value) {
      setSearchbarActive(true);
    }

    handleChange(value);
    setText(value);
  };

  return (
    <div className={clsx(styles.searchBar, { [styles.active]: isActive })}>
      <input
        type="text"
        className={styles.input}
        onChange={onSearchChange}
        ref={input}
        value={text}
      />
      <Button isActive={isActive} setActive={setActive} />
    </div>
  );
};

export default Searchbar;
