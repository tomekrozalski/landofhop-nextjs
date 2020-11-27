import { Details } from 'utils/types/Beverage';
import { Bitterness, Fullness, Sweetness, Power, Hoppyness } from '.';

const Taste: React.FC<{ details: Details }> = ({ details }) => {
  const { bitterness, sweetness, fullness, power, hoppyness } = details;

  return bitterness || sweetness || fullness || power || hoppyness ? (
    <dl>
      <Bitterness details={details} />
      <Sweetness details={details} />
      <Fullness details={details} />
      <Power details={details} />
      <Hoppyness details={details} />
    </dl>
  ) : null;
};

export default Taste;
