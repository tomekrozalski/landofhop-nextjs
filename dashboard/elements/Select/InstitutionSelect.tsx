import { CSSProperties, useContext } from 'react';
import { useIntl } from 'react-intl';

import { Status as StatusEnum } from 'utils/helpers/serverCall';
import { InstitutionContext } from 'dashboard/utils/contexts';
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
  withUnknown?: boolean;
};

const InstitutionSelect: React.FC<Props> = ({ withUnknown, ...rest }) => {
  const { formatMessage, locale } = useIntl();
  const { status, values } = useContext(InstitutionContext);

  if (status === StatusEnum.rejected) {
    return <Error />;
  }

  if (status === StatusEnum.pending) {
    return <Loading />;
  }

  return (
    <Select
      {...rest}
      options={
        withUnknown
          ? [
              {
                label: formatMessage({
                  id: 'admin.contractUnknown',
                }),
                value: '--',
              },
              {
                label: formatMessage({ id: 'admin.institutions' }),
                options: values.map(({ id, name }) => ({
                  label: getValueByLanguage(name, locale).value,
                  value: id,
                })),
              },
            ]
          : values.map(({ id, name }) => ({
              label: getValueByLanguage(name, locale).value,
              value: id,
            }))
      }
      placeholder="selectBrand"
    />
  );
};

export default InstitutionSelect;
