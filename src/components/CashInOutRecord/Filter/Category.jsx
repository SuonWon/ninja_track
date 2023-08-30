import { FormControl, InputLabel, MenuItem, Select } from '@mui/material'
import React from 'react'

const Category = () => {

    const [categories, setCategories] = React.useState('');
    
    const handleCategories = (event) => {
        setCategories(event.target.value);
    }

    return (
        <>
            <FormControl fullWidth size="small">
                <InputLabel id="demo-simple-select-label">Categories</InputLabel>
                <Select
                    value={categories}
                    label="Categories"
                    onChange={handleCategories}
                >
                    <MenuItem value={100}>All</MenuItem>
                    <MenuItem value={10}>Ten</MenuItem>
                    <MenuItem value={20}>Twenty</MenuItem>
                    <MenuItem value={30}>Thirty</MenuItem>
                </Select>
            </FormControl>
        </>
    )
}

export default Category