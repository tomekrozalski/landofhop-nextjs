import { useRouter } from 'next/router';

import { Label } from '.';

const Form: React.FC = () => {
  const { query } = useRouter();

  switch (query?.part ?? 'label') {
    case 'label':
      return <Label />;
    case 'producer':
      return <div>producer</div>;
    // return <Producer />;
    case 'editorial':
      return <div>editorial</div>;
    // return <Editorial />;
    default:
      return null;
  }
};

export default Form;
