import React from 'react';

import { Beverage, Language } from '.';

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
  <ProviderComposer contexts={[<Language />, <Beverage />]}>
    {children}
  </ProviderComposer>
);

export default DashboardStateProvider;
