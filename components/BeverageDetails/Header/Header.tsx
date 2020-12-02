import { FormattedMessage } from 'react-intl';

import MarkLang from 'elements/MarkLang';
import { Details } from 'utils/types/Beverage';
import { Brand, Contract, Cooperation, Remark, Series } from '.';
import styles from './Header.module.css';

const Header: React.FC<{ details: Details }> = ({ details }) => (
  <header className={styles.header}>
    <MarkLang name={details.name} tag="h1" />
    <p>
      <FormattedMessage id="beverage.brewed" /> <Remark details={details} />{' '}
      <Contract details={details} /> <Cooperation details={details} />
      <Brand details={details} />
      <Series details={details} />
    </p>
  </header>
);

export default Header;
