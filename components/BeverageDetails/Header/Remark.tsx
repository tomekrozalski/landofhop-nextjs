import MarkLang from 'elements/MarkLang';
import { Details } from 'utils/types/Beverage';

const Remark: React.FC<{ details: Details }> = ({ details }) =>
  details.remark ? (
    <>
      {details.remark.label && (
        <MarkLang className="label" name={details.remark.label} tag="em" />
      )}
      {details.remark.producer && (
        <MarkLang
          className="producer"
          name={details.remark.producer}
          tag="em"
        />
      )}
    </>
  ) : null;

export default Remark;
