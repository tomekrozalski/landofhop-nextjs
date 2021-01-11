import { useEffect } from 'react';
import { createPortal } from 'react-dom';

import CloseIcon from 'elements/icons/Close';
import styles from './Modal.module.css';
import clsx from 'clsx';

type Props = {
  className?: string;
  close: () => void;
  isVisible: boolean;
};

const Modal: React.FC<Props> = ({ children, className, close, isVisible }) => {
  useEffect(() => {
    const classList = document.querySelector('body').classList;

    if (classList) {
      if (isVisible) {
        classList.add('scroll-lock');
      } else {
        classList.remove('scroll-lock');
      }
    }
  }, [isVisible]);

  return isVisible
    ? createPortal(
        <div className={styles.backdrop}>
          <div className={clsx(styles.wrapper, className)}>
            <button
              className={styles.closeButton}
              onClick={close}
              type="button"
            >
              <CloseIcon />
            </button>
            {children}
          </div>
        </div>,
        document.getElementById('modal-root')!,
      )
    : null;
};

export default Modal;
