import ListCard from '@/components/ListCard';
import SelectBox from '@/components/common/SelectBox';
import React from 'react';
import { styled } from 'styled-components';
import arrow from '@/assets/images/arrow_down.svg?url';

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

const PageInner = styled.div`
  width: 100%;
  padding: 12px;
`;

const MainListWrapper = styled.div`
  display: grid;
  gap: 24px;
  grid-template-columns: repeat(auto-fill, minmax(336px, 336px));
  margin-bottom: 100px;
`;

const SortContainer = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const SelectStyle = styled(SelectBox)`
  padding: 6px 36px 6px 16px;
  border-radius: 8px;
  background-color: rgb(54, 54, 54);
  font-size: 15px;
  line-height: 20px;
  font-weight: 400;
  color: rgb(151, 151, 151);
  background-image: url(${arrow});
`;

function Home() {
  const sortOption = [
    { value: 'hit', name: '인기순' },
    { value: 'recent', name: '최신순' },
  ];

  const handleChange = () => {
    console.log(123);
  };

  return (
    <div style={{ height: '1800px' }}>
      <MainVisual>메인비주얼</MainVisual>
      <br />
      <PageInner>
        <SortContainer>
          <SelectStyle options={sortOption} defaultVal="recent" changeHandler={handleChange} />
        </SortContainer>
        <MainListWrapper>
          <ListCard />
        </MainListWrapper>
      </PageInner>
    </div>
  );
}

export default Home;
