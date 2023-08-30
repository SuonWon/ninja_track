import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const Duration = () => {

    const [duration, setDuration] = React.useState('');

    const handleChange = (event) => {
        setDuration(event.target.value);
    };

    return (
        <>
            <FormControl fullWidth size="small" >
                <InputLabel id="demo-simple-select-label" >Duration</InputLabel>
                <Select
                    value={duration}
                    label="Duration"
                    defaultValue={100}
                    onChange={handleChange}
                >
                    <MenuItem value={100} selected >All</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default Duration