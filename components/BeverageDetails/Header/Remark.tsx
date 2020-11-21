import { Translated } from 'elements';
import { Details } from 'utils/types/Beverage';

const Remark: React.FC<{ details: Details }> = ({ details }) =>
  details.remark ? (
    <>
      <span className="source-group">
        {details.remark.label && (
          <Translated
            className="label"
            tag="em"
            values={details.remark.label}
          />
        )}
        {details.remark.producer && (
          <Translated
            className="producer"
            tag="em"
            values={details.remark.producer}
          />
        )}
      </span>
    </>
  ) : null;

export default Remark;
