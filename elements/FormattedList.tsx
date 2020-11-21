import React from 'react';
import { FormattedMessage } from 'react-intl';
import isArray from 'lodash/isArray';

type Props = {
  children: React.ReactChild[];
  mode: 'long' | 'short' | 'narrow';
};

const FormattedList: React.FC<Props> = ({ children, mode }) => {
  console.log('children', children);

  if (!children.length) {
    return null;
  }

  if (mode === 'narrow') {
    return <>{children}</>;
  }

  if (mode === 'short') {
    return (
      <>
        {children
          .flatMap((item, index) => [
            item,
            children.length > 1 && index === children.length - 2 ? (
              <FormattedMessage id="global.conjunction.short" key={item} />
            ) : (
              ', '
            ),
          ])
          .slice(0, -1)}
      </>
    );
  }

  return <>{children}</>;
};

export default FormattedList;
