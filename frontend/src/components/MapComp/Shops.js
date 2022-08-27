import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Price from './Price'
import Rating from './Rating';
import Open from './Open';

export default function Shops() {
  return (
    <div>
      <h3>Your Top Shops</h3>
      <Stack direction="row" spacing={2}>
        <Price/>
        <Rating/>
        <Open/>
      </Stack>
      <h3>List Of Optimal Shops</h3>
      <h3> w/ details ???</h3>
    </div>
  )
}
