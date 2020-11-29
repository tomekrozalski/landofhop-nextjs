import { useContext } from 'react';
import { FormattedMessage } from 'react-intl';

import {
  AuthenticationContext,
  AuthenticationStatusEnum,
  TopBarContext,
} from 'utils/contexts';
import LockedIcon from './LockedIcon';
import UnlockedIcon from './UnlockedIcon';
import styles from './Authorization.module.css';

// const Button = styled.button.attrs({
//   type: 'button',
// })`
//   ${styledLinkCSS}
//   padding: 1rem 1rem 1rem 3rem;
//   position: relative;

//   &:hover svg path {
//     fill: var(--color-white);
//   }

//   svg {
//     width: 1.2rem;
//     position: absolute;
//     top: 50%;
//     left: 1rem;
//     transform: translateY(-50%);

//     path {
//       fill: var(--color-black);
//       transition: fill 0.2s;
//     }
//   }
// `;

const Authorization: React.FC = () => {
  const { isLoggedIn, logOut, setAuthenticationStatus } = useContext(
    AuthenticationContext,
  );
  const { loginbar, setLoginbar } = useContext(TopBarContext);

  const onLogIn = () => {
    setAuthenticationStatus(AuthenticationStatusEnum.idle);
    setLoginbar(!loginbar);
  };

  return (
    <div className={styles.authorization}>
      {isLoggedIn ? (
        <button onClick={logOut}>
          <UnlockedIcon />
          <FormattedMessage id="global.logout" />
        </button>
      ) : (
        <button onClick={onLogIn}>
          <LockedIcon />
          <FormattedMessage id="global.login" />
        </button>
      )}
    </div>
  );
};

export default Authorization;
