import React from 'react';

import { Beverage, Institution, Language, Place } from '.';

type Props = {
  contexts: any;
};

const ProviderComposer: React.FC<Props> = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids: React.ReactNode, parent: any) =>
      React.cloneElement(parent, {
        children: kids,
      }),
    children,
  );

const DashboardStateProvider: React.FC = ({ children }) => (
  <ProviderComposer
    contexts={[<Language />, <Institution />, <Place />, <Beverage />]}
  >
    {children}
  </ProviderComposer>
);

export default DashboardStateProvider;
