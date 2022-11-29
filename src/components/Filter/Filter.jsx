import React from 'react';
import { FilterTitle, FilterContainer, FilterInput } from './Filter.styled';
import { useDispatch, useSelector } from 'react-redux';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <FilterContainer>
      <label>
        <FilterTitle>Find contacts by name</FilterTitle>
        <FilterInput
          type="text"
          value={filter}
          placeholder='Enter name to find...'
          onChange={changeFilter}
        ></FilterInput>
      </label>
    </FilterContainer>
  );
};
