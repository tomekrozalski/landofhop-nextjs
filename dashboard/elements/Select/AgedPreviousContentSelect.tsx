import { useIntl } from 'react-intl';

import { AgedPreviousContent } from 'utils/enums/Beverage';
import Select from './Select';

type Props = {
  defaultValue:
    | {
        label: string;
        value: string;
      }[]
    | null;
  form: string;
  name: string;
};

const AgedPreviousContentSelect: React.FC<Props> = props => {
  const { formatMessage } = useIntl();

  return (
    <Select
      {...props}
      hiddenFieldIndicator
      isMulti
      options={Object.keys(AgedPreviousContent).map(value => ({
        label: formatMessage({
          id: `admin.beverage.aged.previousContent.${value}`,
        }),
        value,
      }))}
    />
  );
};

export default AgedPreviousContentSelect;
