import { Details } from 'utils/types/Beverage';
import {
  Aged,
  Alcohol,
  Barcode,
  BeverageType,
  City,
  Country,
  Extract,
  Fermentation,
  Filtration,
  Pasteurization,
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
    {/* <Style /> */}
    {/* <DryHopped /> */}
    {/* <HopRate /> */}
    {/* <ExpirationDate /> */}
    {/* <Ingredients /> */}
    {/* <SmokedMalt /> */}
    {/* <Temperature /> */}
    {/* <Container /> */}
    {/* <Price /> */}
  </dl>
);

export default Testimony;
