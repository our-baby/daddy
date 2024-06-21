import React, { ReactNode, useEffect, useRef } from 'react';
import styled from 'styled-components';
import ModalContainer from './ModalContainer';
import useOutsideClick from '@/hooks/useOutsideClick';
import Icon from '../icon';

interface Modal {
  onClose: () => void;
  children: ReactNode;
}

const Modal = ({ onClose, children }: Modal) => {
  const modalRef = useRef<HTMLDivElement>(null);
  const handleClose = () => {
    onClose?.();
  };

  useOutsideClick(modalRef, handleClose);

  useEffect(() => {
    const $body = document.querySelector('body') as HTMLBodyElement;
    const overflow = $body.style.overflow;
    $body.style.overflow = 'hidden';
    return () => {
      $body.style.overflow = overflow;
    };
  }, []);

  return (
    <ModalContainer>
      <Overlay>
        <ModalWrap ref={modalRef}>
          <ModalInner>
            <CloseButton>
              <Icon size={22} icon="close_icon" />
            </CloseButton>
            <Contents>{children}</Contents>
          </ModalInner>
        </ModalWrap>
      </Overlay>
    </ModalContainer>
  );
};

const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  backdrop-filter: blur(1.1px);
  z-index: 9999;
  overflow: hidden auto;
`;

const ModalWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 30px;
`;

const ModalInner = styled.div`
  position: relative;
  padding: 24px;
  border-radius: 8px;
  background-color: #fff;
  box-shadow: rgba(0, 0, 0, 0.247) 0px 0px 15px 0px;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 8px;
  right: 8px;
  z-index: 99;
`;

const Contents = styled.div`
  text-align: center;
`;

export default Modal;
