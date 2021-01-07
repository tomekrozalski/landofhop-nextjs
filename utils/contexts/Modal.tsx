import { createContext, useState } from 'react';

import { Modal as ModalEnum } from 'utils/enums';

export const ModalContext = createContext({
  type: null,
  setType: (val: ModalEnum | null) => {
    val;
  },
});

const Modal: React.FC = ({ children }) => {
  const [type, setType] = useState<ModalEnum | null>(null);

  return (
    <ModalContext.Provider
      value={{
        type,
        setType,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export default Modal;
