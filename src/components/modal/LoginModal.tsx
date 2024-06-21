import React from 'react';
import Modal from './Modal';
import NaverLogin from '@/layouts/header/sns_login/naver';
import LogoImg from '/static/logo.png';
import styled from 'styled-components';

type ModalProps = {
  onClose: () => void;
};

const LoginModal = ({ onClose }: ModalProps) => {
  return (
    <Modal onClose={onClose}>
      <ModalImg src={LogoImg} alt="Our Baby" />
      <ModalText>원활한 서비스 이용을 위해 로그인을 해주세요</ModalText>
      <NaverLogin />
    </Modal>
  );
};

const ModalImg = styled.img`
  display: inline-block;
  width: 300px;
  margin-bottom: 10px;
`;

const ModalText = styled.h2`
  font-size: 16px;
  margin-bottom: 15px;
`;

export default LoginModal;
