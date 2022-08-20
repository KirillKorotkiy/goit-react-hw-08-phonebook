import React from 'react';
import { Title, Input, Wrapper,Logo } from './Filter.styled';

const Filter = ({ value, onChange }) => {
  return (
    <Wrapper>
      <Title>Find a contac by name</Title>
      <Input
        type="text"
        name="search"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    <Logo width="25"/>
    </Wrapper>
  );
};

export default Filter;
