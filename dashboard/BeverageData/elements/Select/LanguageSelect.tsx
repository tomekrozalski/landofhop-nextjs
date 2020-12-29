import { CSSProperties, forwardRef, useContext } from 'react';
import { useIntl } from 'react-intl';
import { Controller } from 'react-hook-form';
import ReactSelect from 'react-select';

import { Status as StatusEnum } from 'utils/helpers/serverCall';
import { LanguageContext } from 'dashboard/utils/contexts';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import Error from './Error';
import Loading from './Loading';
import selectStyles from './selectStyles';
import styles from './Select.module.css';
import FieldStatusIndicator from 'elements/FieldStatusIndicator';

type Props = {
  defaultValue: any;
  name: string;
  style?: CSSProperties;
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Props;

const LanguageSelect = forwardRef<HTMLInputElement, InputProps>(
  ({ defaultValue, name, style }, ref) => {
    const { formatMessage, locale } = useIntl();
    const { status, values } = useContext(LanguageContext);

    if (status === StatusEnum.rejected) {
      return <Error />;
    }

    if (status === StatusEnum.pending) {
      return <Loading />;
    }

    console.log('defaultValue', defaultValue);

    const Bum = (props, sec) => {
      console.log('props', props, sec);

      const { invalid, isTouched, onChange, value } = props;

      return (
        <span className={styles.select} style={style}>
          <FieldStatusIndicator
            error={invalid}
            touched={isTouched}
            type="select"
          >
            <ReactSelect
              onChange={onChange}
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
              styles={selectStyles}
              value={value}
            />
          </FieldStatusIndicator>
        </span>
      );
    };

    return (
      <Controller
        defaultValue={defaultValue}
        name={name}
        render={props => <Bum {...props} />}
        inputRef={ref}
      />
    );
  },
);

export default LanguageSelect;
