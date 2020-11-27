import { Details } from 'utils/types/Beverage';

import { Added } from '.';

const FootNotes: React.FC<{ details: Details }> = ({ details }) => (
  <dl style={{ gridArea: 'footnotes', color: 'var(--color-grey-1)' }}>
    <Added details={details} />
  </dl>
);

export default FootNotes;
