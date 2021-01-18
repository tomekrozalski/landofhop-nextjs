import { CSSProperties, useContext } from 'react';
import { useIntl } from 'react-intl';

import { Status as StatusEnum } from 'utils/helpers/serverCall';
import { PlaceContext } from 'dashboard/utils/contexts';
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

const PlaceSelect: React.FC<Props> = props => {
  const { locale } = useIntl();
  const { places, status } = useContext(PlaceContext);

  if (status === StatusEnum.rejected) {
    return <Error />;
  }

  if (status === StatusEnum.pending) {
    return <Loading />;
  }

  return (
    <Select
      {...props}
      options={places.map(({ city, id, institution }) => ({
        label: `${getValueByLanguage(city, locale).value} (${
          getValueByLanguage(institution, locale).value
        })`,
        value: id,
      }))}
      placeholder="selectPlace"
    />
  );
};

export default PlaceSelect;
