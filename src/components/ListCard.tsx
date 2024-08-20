import React from 'react';
import { styled } from 'styled-components';

const Wrapper = styled.div`
  border: 1px solid #ddd;
  background-color: white;
  border-radius: 10px;
  overflow: hidden;
`;

const Inner = styled.div`
  padding: 10px;
`;

const Thumbnail = styled.div`
  background-color: gray;
  border-radius: 5px;
  margin-bottom: 10px;
  padding-top: 62.5%;
`;

const TextBox = styled.div`
  background-color: white;
`;

const Title = styled.div`
  font-size: 16px;
  font-weight: 500;
`;

function ListCard() {
  return (
    <Wrapper>
      <Inner>
        <Thumbnail></Thumbnail>
        <TextBox>
          <Title>게시글 제목</Title>
        </TextBox>
      </Inner>
    </Wrapper>
  );
}

export default ListCard;
