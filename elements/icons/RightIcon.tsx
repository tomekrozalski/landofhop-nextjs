import { FormattedMessage } from 'react-intl';

const RightIcon = ({ message }: { message?: string }) => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 120 120">
    {message && (
      <title>
        <FormattedMessage id={message} />
      </title>
    )}
    <path d="M35 11.7c0.9 0 1.7 0.2 2.5 0.7l75 43.3c1.5 0.9 2.5 2.5 2.5 4.3s-1 3.4-2.5 4.3l-75 43.3c-0.8 0.4-1.6 0.7-2.5 0.7s-1.7-0.2-2.5-0.7c-1.5-0.9-2.5-2.5-2.5-4.3V16.7c0-1.8 1-3.4 2.5-4.3C33.3 11.9 34.1 11.7 35 11.7z" />
  </svg>
);

export default RightIcon;
