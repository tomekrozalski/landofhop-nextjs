import { Details } from 'utils/types/Beverage';

const Appearance: React.FC<{ details: Details }> = ({ details }) => {
  const { clarity, color } = details;

  return clarity || color ? (
    <dl>
      {/* <Color /> */}
      {/* <Clarity /> */}
    </dl>
  ) : null;
};

export default Appearance;
