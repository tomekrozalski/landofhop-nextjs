import { cloneElement } from 'react';

import Authentication from './Authentication';
import TopBar from './TopBar';

type Props = {
  contexts: any;
};

const ProviderComposer: React.FC<Props> = ({ contexts, children }) =>
  contexts.reduceRight(
    (kids: React.ReactNode, parent: any) =>
      cloneElement(parent, {
        children: kids,
      }),
    children,
  );

const GlobalStateProvider: React.FC = ({ children }) => (
  <ProviderComposer contexts={[<TopBar />, <Authentication />]}>
    {children}
  </ProviderComposer>
);

export default GlobalStateProvider;
