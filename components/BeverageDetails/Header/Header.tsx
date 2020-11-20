import React from 'react';
import { FormattedMessage } from 'react-intl';

import { Translated } from 'elements';
import { Details } from 'utils/types/Beverage';
// import { Brand, Contract, Cooperation, Name, Remark, Series } from '.';
import styles from './Header.module.css';

const Header: React.FC<{ details: Details }> = ({ details }) => (
  <header className={styles.header}>
    <Translated values={details.name} tag="h1" />
    <p>
      <FormattedMessage id="global.brewed" />
      {/* <Remark /> */}
      {/* <Contract />  <Cooperation /> */}
      {/* <Brand /> */}
      {/* <Series /> */}
    </p>
  </header>
);

export default Header;
