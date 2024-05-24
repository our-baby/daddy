import React from 'react';
import styled from 'styled-components';
import theme from '@/shared/theme';

const Wrapper = styled.div`
  width: calc(100% - 240px);
  height: calc(100% - 56px);
  margin-top: 56px;
  margin-left: 240px;
  background-color: ${theme.colors.bgColor};
`;

function Home() {
  return (
    <Wrapper>
      <div style={{ height: '1800px' }}></div>
    </Wrapper>
  );
}

export default Home;
