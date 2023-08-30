import { Box, FormControl, TextField, IconButton } from '@mui/material'
import React from 'react';
import SearchIcon from '@mui/icons-material/Search';

const RemarkSearch = () => {
    
    return (
        <>
            <FormControl fullWidth size="small">
                <Box
                    sx={{
                        width: 500,
                        maxWidth: '100%',
                    }}
                    className="position-relative"
                >
                    <TextField fullWidth size="small" label="Search by remark" id="fullWidth" className="position-relative" />
                    <IconButton color="inherit" className="position-absolute" style={{ 'right': '20px' }} >
                        <SearchIcon />
                    </IconButton>
                </Box>
            </FormControl>
        </>
    )
}

export default RemarkSearch