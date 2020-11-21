import React from 'react';
import { useIntl } from 'react-intl';

import { LanguageValue } from 'utils/types/common';

type Props = {
  className?: string;
  tag?: string;
  values: LanguageValue[];
};

const Translated: React.FC<Props> = ({ className, tag = 'span', values }) => {
  const { locale } = useIntl();

  const { language, value } =
    values.find(item => item?.language === locale) || values[0];

  return React.createElement(tag, {
    children: value,
    className,
    ...(language !== locale && { lang: language }),
  });
};

export default Translated;
