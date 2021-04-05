import Head from 'next/head';
import { useIntl } from 'react-intl';

type Props = {
  title: string;
  values?: {};
};

const HeadTitle: React.FC<Props> = ({ title, values = {} }) => {
  const { formatMessage } = useIntl();

  return (
    <Head>
      <title>{formatMessage({ id: `titles.${title}` }, values)}</title>
    </Head>
  );
};

export default HeadTitle;
