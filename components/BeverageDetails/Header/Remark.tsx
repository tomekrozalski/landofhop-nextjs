import { Translated } from 'elements';
import { Details } from 'utils/types/Beverage';

const Remark: React.FC<{ details: Details }> = ({ details }) =>
  details.remark ? (
    <>
      {details.remark.label && (
        <span className="source-item">
          <Translated
            className="label"
            tag="em"
            values={details.remark.label}
          />
        </span>
      )}
      {details.remark.producer && (
        <span className="source-item">
          <Translated
            className="producer"
            tag="em"
            values={details.remark.producer}
          />
        </span>
      )}
    </>
  ) : null;

export default Remark;
