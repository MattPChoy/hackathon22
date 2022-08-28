import React from 'react'
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import Price from './Price'
import Rating from './Rating';
import Open from './Open';
import ShopView from './ShopView';

import get_reccommendation from "../database";

// Modwest
let posA = {"lat": -27.49595320268324, "lon": 153.0118485295724}
// AEB
let posB = {"lat": -27.49958491072012, "lon": 153.01478455256785}
// Union College
let posC = {"lat": -27.500700214102945, "lon": 153.00955067664674}

export default function Shops() {
    return (
        <div>
            <h3>Your Top Shops</h3>
            <Stack direction="row" spacing={2}>
                <Price/>
                <Rating/>
                <Open/>
            </Stack>
            {get_reccommendation([posA, posB, posC], 4, 1, 5).map((recom, index) => (
                <div>{ (index < 3) ? <ShopView name={recom.name} price={recom.price} rating={recom.rating}/> : null } </div>
            ))}
        </div>
    )
}

