import React from 'react';
import { useIntl } from 'react-intl';

import { LanguageValue } from 'utils/types/common';

type Props = {
  className?: string;
  name: LanguageValue;
  tag?: string;
};

const MarkLang: React.FC<Props> = ({ className, tag = 'span', name }) => {
  const { locale } = useIntl();

  return React.createElement(tag, {
    children: name.value,
    className,
    ...(name.language !== locale && { lang: name.language }),
  });
};

export default MarkLang;
