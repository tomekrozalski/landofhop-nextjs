import { CSSProperties, forwardRef, useContext } from 'react';
import { useIntl } from 'react-intl';
import { FieldError } from 'react-hook-form';

// import { getValueByLanguage } from 'dashboard/utils/helpers';
// import { LanguageContext } from 'dashboard/utils/contexts';
import { getValueByLanguage } from 'dashboard/utils/helpers';
import Select from './Select';

type Props = {
  colorInvert?: boolean;
  error?: FieldError;
  disabled?: boolean;
  form: string;
  name: string;
  ref: any;
  style?: CSSProperties;
  touched: boolean;
  type?: 'text' | 'email' | 'password';
};

type InputProps = React.DetailedHTMLProps<
  React.InputHTMLAttributes<HTMLInputElement>,
  HTMLInputElement
> &
  Props;

const LanguageSelect = forwardRef<HTMLInputElement, InputProps>(
  (props, ref) => {
    const {
      colorInvert,
      error,
      form,
      name,
      style,
      touched,
      type = 'text',
      ...rest
    } = props;

    const { formatMessage, locale } = useIntl();
    // const { status, values } = useContext(LanguageContext);

    // if (status === StatusEnum.rejected) {
    //   return <Error />;
    // }

    // if (status === StatusEnum.pending) {
    //   return <Loading />;
    // }

    const values = [
      {
        id: 'sdfsd',
        name: [
          {
            lang: 'pl',
            value: 'polski',
          },
        ],
        code: 'pl',
      },
    ];

    return (
      <Select
        {...props}
        options={[
          {
            label: formatMessage({ id: 'language.group.defaults' }),
            options: values
              .filter(({ code }) => code === 'en' || code === 'pl')
              .map(({ id, name }) => ({
                label: getValueByLanguage(name, locale).value,
                value: id,
              })),
          },
          {
            label: formatMessage({ id: 'language.group.others' }),
            options: [
              ...values
                .filter(({ code }) => code !== 'en' && code !== 'pl')
                .map(({ id, name }) => ({
                  label: getValueByLanguage(name, locale).value,
                  value: id,
                })),
              {
                label: formatMessage({ id: 'language.none' }),
                value: 'none',
              },
            ],
          },
        ]}
        placeholder="selectLanguage"
        ref={ref}
      />
    );
  },
);

export default LanguageSelect;
