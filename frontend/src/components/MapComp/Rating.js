import React from 'react'
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';

export default function Price() {
    var rating = 0
  return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Min Rating</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={rating}
                label="Max Price"
                >
                <MenuItem value={0}>Any</MenuItem>
                <MenuItem value={2.99}>3</MenuItem>
                <MenuItem value={3.49}>3.5</MenuItem>
                <MenuItem value={3.99}>4</MenuItem>
                <MenuItem value={4.49}>4.5</MenuItem>
            </Select>
        </FormControl>
    )
}
