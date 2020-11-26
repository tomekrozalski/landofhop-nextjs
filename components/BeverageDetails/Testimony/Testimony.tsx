import { Details } from 'utils/types/Beverage';
import {
  Aged,
  Alcohol,
  Barcode,
  BeverageType,
  City,
  Container,
  Country,
  DryHopped,
  ExpirationTime,
  Extract,
  Fermentation,
  Filtration,
  HopRate,
  Ingredients,
  Pasteurization,
  Price,
  SmokedMalt,
  Style,
  Temperature,
} from '.';
import styles from './Testimony.module.css';

const Testimony: React.FC<{ details: Details }> = ({ details }) => (
  <dl className={styles.testimony}>
    <City details={details} />
    <Country details={details} />
    <Barcode details={details} />
    <BeverageType details={details} /> {/* @ToDo: change to Category */}
    <Fermentation details={details} />
    <Extract details={details} />
    <Alcohol details={details} />
    <Filtration details={details} />
    <Pasteurization details={details} />
    <Aged details={details} />
    <Style details={details} />
    <DryHopped details={details} />
    <HopRate details={details} />
    <ExpirationTime details={details} />
    <Ingredients details={details} />
    <SmokedMalt details={details} />
    <Temperature details={details} />
    <Container details={details} />
    <Price details={details} />
  </dl>
);

export default Testimony;
