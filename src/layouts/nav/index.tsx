import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
  position: fixed;
  top: 56px;
  left: 0;
  width: 240px;
  min-height: calc(100vh - 56px);
  display: flex;
  flex-direction: column;
  background-color: #000;
  padding: 16px 16px 32px;
  border-right: 1px solid rgb(54, 54, 54);
  overflow: hidden auto;
  z-index: 100;
`;

function GNB() {
  return <Wrapper />;
}

export default GNB;
