import React from 'react';
import { useIntl } from 'react-intl';

import { LanguageValue } from 'utils/types/common';

type Props = {
  tag?: string;
  values: LanguageValue[];
};

const Translated: React.FC<Props> = ({ tag = 'span', values }) => {
  const { locale } = useIntl();

  const { language, value } =
    values.find(item => item?.language === locale) || values[0];

  return React.createElement(tag, {
    children: value,
    ...(language !== locale && { lang: language }),
  });
};

export default Translated;
