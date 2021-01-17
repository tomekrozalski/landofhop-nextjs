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
  form: string;
  name: string;
  style?: CSSProperties;
};

const LanguageSelect: React.FC<Props> = props => {
  const { formatMessage, locale } = useIntl();
  const { languages, status } = useContext(LanguageContext);

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
          options: languages
            .filter(({ code }) => code === 'en' || code === 'pl')
            .map(({ id, name }) => ({
              label: getValueByLanguage(name, locale).value,
              value: id,
            })),
        },
        {
          label: formatMessage({ id: 'admin.language.group.others' }),
          options: [
            ...languages
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
      placeholder="selectLanguage"
    />
  );
};

export default LanguageSelect;
