import React from 'react';
import { useIntl } from 'react-intl';

type Props = {
  className?: string;
  mode: 'long' | 'short' | 'narrow';
};

const FormattedList: React.FC<Props> = ({ children, className, mode }) => {
  const { formatMessage } = useIntl();
  const values = React.Children.toArray(children);

  if (!values.length) {
    return null;
  }

  if (values.length === 1) {
    return <span className={className}>{children}</span>;
  }

  const formattedArray = values
    .reduce((acc, item) => [...acc, item, ', '], [])
    .slice(0, -1);

  if (mode === 'narrow') {
    return <span className={className}>{formattedArray}</span>;
  }

  formattedArray.splice(
    -2,
    1,
    ` ${formatMessage({ id: `global.conjunction.${mode}` })} `,
  );

  return <span className={className}>{formattedArray}</span>;
};

export default FormattedList;
