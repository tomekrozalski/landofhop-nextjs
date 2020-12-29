import { CSSProperties, useContext } from 'react';
import { useIntl } from 'react-intl';

import { Status as StatusEnum } from 'utils/helpers/serverCall';
import { LanguageContext } from 'dashboard/utils/contexts';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import Error from './Error';
import Loading from './Loading';
import Select from './Select';

type Props = {
  defaultValue: any;
  name: string;
  style?: CSSProperties;
};

const LanguageSelect: React.FC<Props> = props => {
  const { formatMessage, locale } = useIntl();
  const { status, values } = useContext(LanguageContext);

  if (status === StatusEnum.rejected) {
    return <Error />;
  }

  if (status === StatusEnum.pending) {
    return <Loading />;
  }

  return (
    <Select
      {...props}
      options={[
        {
          label: formatMessage({
            id: 'admin.language.group.defaults',
          }),
          options: values
            .filter(({ code }) => code === 'en' || code === 'pl')
            .map(({ id, name }) => ({
              label: getValueByLanguage(name, locale).value,
              value: id,
            })),
        },
        {
          label: formatMessage({ id: 'admin.language.group.others' }),
          options: [
            ...values
              .filter(({ code }) => code !== 'en' && code !== 'pl')
              .map(({ id, name }) => ({
                label: getValueByLanguage(name, locale).value,
                value: id,
              })),
            {
              label: formatMessage({ id: 'admin.language.none' }),
              value: 'none',
            },
          ],
        },
      ]}
    />
  );
};

export default LanguageSelect;
