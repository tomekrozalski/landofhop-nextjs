import { Basics, Details } from 'utils/types/Beverage';

type Props = {
  details: Details;
  next: Basics;
  previous: Basics;
};

const BeverageDetails: React.FC<Props> = ({ details, next, previous }) => {
  console.log('->', details, next, previous);

  return <div>Details</div>;
};

export default BeverageDetails;
