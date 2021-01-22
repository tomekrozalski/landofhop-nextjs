import { CSSProperties, useContext } from 'react';
import { useIntl } from 'react-intl';

import { Status as StatusEnum } from 'utils/helpers/serverCall';
import { CountryContext } from 'dashboard/utils/contexts';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import Error from './Error';
import Loading from './Loading';
import Select from './Select';

type Props = {
  defaultValue: any;
  form: string;
  disabled?: boolean;
  isMulti?: boolean;
  name: string;
  style?: CSSProperties;
};

const CountrySelect: React.FC<Props> = props => {
  const { locale } = useIntl();
  const { countries, status } = useContext(CountryContext);

  if (status === StatusEnum.rejected) {
    return <Error />;
  }

  if (status === StatusEnum.pending) {
    return <Loading />;
  }

  return (
    <Select
      {...props}
      options={countries.map(({ id, name }) => ({
        label: getValueByLanguage(name, locale).value,
        value: id,
      }))}
      placeholder="selectCountry"
    />
  );
};

export default CountrySelect;
