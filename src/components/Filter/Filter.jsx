import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { getFilter } from 'redux/selectors';
import { setFilter } from 'redux/filterSlice';
import * as SC from './Filter.styled'

export const Filter = () => {
  const filter = useSelector(getFilter);
  const dispatch = useDispatch();

  const changeFilter = e => {
    dispatch(setFilter(e.currentTarget.value));
  };

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: '10px',
        // margin: '0 auto',
        maxWidth: '360px',
        width: '100%',
        p: '10px',
      }}
    >
      <SC.FilterTitle>Find contacts by name</SC.FilterTitle>
      <TextField
        placeholder="Enter name to find..."
        name="text"
        type="text"
        size="small"
        value={filter}
        onChange={changeFilter}
        sx={{ width: '100%' }}
      />
      {/* <input
          type="text"
          value={filter}
          placeholder="Enter name to find..."
          onChange={changeFilter}
        ></input> */}
    </Box>
  );
};
