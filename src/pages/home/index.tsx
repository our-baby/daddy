import ListCard from '@/components/ListCard';
import React from 'react';
import { styled } from 'styled-components';

const MainVisual = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: gray;
  padding: 140px 0;
  font-size: 50px;
  font-weight: 700;
  color: #fff;
`;

const MainListWrapper = styled.div`
  display: flex;
  gap: 15px;
`;

function Home() {
  return (
    <div style={{ height: '1800px' }}>
      <MainVisual>메인비주얼</MainVisual>
      <br />
      <MainListWrapper>
        <ListCard />
      </MainListWrapper>
    </div>
  );
}

export default Home;
