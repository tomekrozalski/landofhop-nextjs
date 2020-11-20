import { FormattedMessage } from 'react-intl';

const LeftIcon = ({ message }: { message?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    {message && (
      <title>
        <FormattedMessage id={message} />
      </title>
    )}
    <path d="M85 108.3c-0.9 0-1.7-0.2-2.5-0.7l-75-43.3C6 63.4 5 61.8 5 60s1-3.4 2.5-4.3l75-43.3c0.8-0.4 1.6-0.7 2.5-0.7s1.7 0.2 2.5 0.7c1.5 0.9 2.5 2.5 2.5 4.3v86.6c0 1.8-1 3.4-2.5 4.3C86.7 108.1 85.9 108.3 85 108.3z" />
  </svg>
);

export default LeftIcon;
