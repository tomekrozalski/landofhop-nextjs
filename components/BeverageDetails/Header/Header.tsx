import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Translated } from 'elements';
import { Details } from 'utils/types/Beverage';
import { Remark, Series } from '.';
import styles from './Header.module.css';

const Header: React.FC<{ details: Details }> = ({ details }) => (
  <header className={styles.header}>
    <Translated values={details.name} tag="h1" />
    <p>
      <FormattedMessage id="global.brewed" /> <Remark details={details} />
      {/* <Contract />  <Cooperation /> */}
      {/* <Brand /> */}
      <Series details={details} />
    </p>
  </header>
);

export default Header;
