import { Details } from 'utils/types/Beverage';
import { Appearance, Taste } from '.';
import styles from './Impressions.module.css';

const Impressions: React.FC<{ details: Details }> = ({ details }) => (
  <div className={styles.impressions}>
    <Taste details={details} />
    <Appearance details={details} />
  </div>
);

export default Impressions;
