import { Translated } from 'elements';
import { Details } from 'utils/types/Beverage';

const Remark: React.FC<{ details: Details }> = ({ details }) =>
  details.remark ? (
    <>
      {details.remark.label && (
        <Translated className="label" tag="em" values={details.remark.label} />
      )}
      {details.remark.producer && (
        <Translated
          className="producer"
          tag="em"
          values={details.remark.producer}
        />
      )}
    </>
  ) : null;

export default Remark;
