import React, { ReactNode } from 'react';
import { createPortal } from 'react-dom';

type ChildProps = {
  children: ReactNode;
};

const ModalContainer = ({ children }: ChildProps) => {
  return createPortal(<>{children}</>, document.getElementById('modal-root') as HTMLElement);
};

export default ModalContainer;
