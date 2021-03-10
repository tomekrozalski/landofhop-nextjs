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
      <script
        data-ad-client="ca-pub-3743392577349195"
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js"
      ></script>
    </Head>
  );
};

export default HeadTitle;
