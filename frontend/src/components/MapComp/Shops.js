import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Price from './Price'
import Rating from './Rating';
import Open from './Open';
import ShopView from './ShopView';

export default function Shops() {
    return (
        <div>
            <h3>Your Top Shops</h3>
            <Stack direction="row" spacing={2}>
                <Price/>
                <Rating/>
                <Open/>
            </Stack>
            <ShopView/>
        </div>
    )
}