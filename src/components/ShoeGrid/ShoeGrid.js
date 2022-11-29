import React from 'react';
import styled from 'styled-components/macro';

import SHOES from '../../data';
import ShoeCard from '../ShoeCard';

const ShoeGrid = () => {
  return (
    <Wrapper>
      {SHOES.map((shoe) => (
        <ShoeCardWrapper key={shoe.slug}>
          <ShoeCard  {...shoe} />
        </ShoeCardWrapper>
      ))}
    </Wrapper>
  );
};

const Wrapper = styled.div`
display: flex;
flex: 1;
flex-wrap: wrap;
gap: 32px;`;

const ShoeCardWrapper = styled.div`
min-width: 344px;
flex:1;

`
export default ShoeGrid;
