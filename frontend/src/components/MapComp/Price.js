import React from 'react'
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';

export default function Price() {
    var price = 100
  return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Max Price</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={price}
                label="Max Price"
                >
                <MenuItem value={100}>Any</MenuItem>
                <MenuItem value={5.001}>$5</MenuItem>
                <MenuItem value={4.001}>$4</MenuItem>
                <MenuItem value={3.001}>$3</MenuItem>
            </Select>
        </FormControl>
    )
}
