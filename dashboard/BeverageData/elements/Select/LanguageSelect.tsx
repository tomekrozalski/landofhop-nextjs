import { CSSProperties, forwardRef, useContext } from 'react';
import { useIntl } from 'react-intl';
import { Controller, FieldError } from 'react-hook-form';
import ReactSelect from 'react-select';

import { Status as StatusEnum } from 'utils/helpers/serverCall';
import WarningIcon from 'elements/icons/Warning';
import { LanguageContext } from 'dashboard/utils/contexts';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import Error from './Error';
import Loading from './Loading';
import selectStyles from './selectStyles';
import textInputStyles from 'elements/TextInput/TextInput.module.css';
import styles from './Select.module.css';

type Props = {
  defaultValue: any;
  error?: FieldError;
  name: string;
  style?: CSSProperties;
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Props;

const LanguageSelect = forwardRef<HTMLInputElement, InputProps>(
  ({ defaultValue, error, name, style }) => {
    const { formatMessage, locale } = useIntl();
    const { status, values } = useContext(LanguageContext);

    if (status === StatusEnum.rejected) {
      return <Error />;
    }

    if (status === StatusEnum.pending) {
      return <Loading />;
    }

    console.log('error', error);

    return (
      <span className={styles.select} style={style}>
        {error && <WarningIcon className={textInputStyles.warningIcon} />}
        <Controller
          as={ReactSelect}
          name={name}
          options={[
            {
              label: formatMessage({ id: 'admin.language.group.defaults' }),
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
          styles={selectStyles}
          defaultValue={defaultValue}
        />
      </span>
    );
  },
);

export default LanguageSelect;
