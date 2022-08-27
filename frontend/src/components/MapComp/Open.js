import React from 'react'
import Select from '@mui/material/Select';
import { FormControl, InputLabel, MenuItem } from '@mui/material';

export default function Price() {
    var open = false
  return (
        <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Open</InputLabel>
            <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={open}
                label="Open"
                >
                <MenuItem value={false}>Any</MenuItem>
                <MenuItem value={true}>Open</MenuItem>
            </Select>
        </FormControl>
    )
  }