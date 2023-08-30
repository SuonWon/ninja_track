import * as React from 'react';
import PropTypes from 'prop-types';
import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { Box, FormControl, Grid, InputLabel, MenuItem, Select, TextField } from '@mui/material';

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
    '& .MuiDialogContent-root': {
        padding: theme.spacing(2),
    },
    '& .MuiDialogActions-root': {
        padding: theme.spacing(1),
    },
}));

function BootstrapDialogTitle(props) {
    const { children, onClose, ...other } = props;

    return (
        <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
            {children}
            {onClose ? (
                <IconButton
                    aria-label="close"
                    onClick={onClose}
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                >
                    <CloseIcon />
                </IconButton>
            ) : null}
        </DialogTitle>
    );
}

BootstrapDialogTitle.propTypes = {
    children: PropTypes.node,
    onClose: PropTypes.func.isRequired,
};

export default function CustomizedDialogs() {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const [category, setCategory] = React.useState('');

    const handleChange = (event) => {
        setCategory(event.target.value);
    };

    const [title, setTitle] = React.useState('');
    const handleChangeTitle = (event) => {
        setTitle(event.target.value);
        console.log(title);
    }

    return (
        <div>
            <Button variant="outlined" onClick={handleClickOpen} >
                Open dialog
            </Button>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <BootstrapDialogTitle id="customized-dialog-title" sx={{ paddingX: 5 }} onClose={handleClose}>
                    Add Cash In
                </BootstrapDialogTitle>
                <DialogContent dividers sx={{ width: 600 }}>
                    <Grid container spacing={2} sx={{ paddingX: 4 }}>

                        <Grid item xs={5} >
                            <Button autoFocus size='small' variant='contained' value='cashIn' onClick={handleChangeTitle} sx={{ minWidth: 50, marginRight: 2, borderRadius: '16px' }}>
                                Cash In
                            </Button>
                            <Button autoFocus size='small' variant='outlined' value='cashOut' onClick={handleChangeTitle} sx={{ minWidth: 50, borderRadius: '16px' }}>
                                Cash Out
                            </Button>
                        </Grid>
                        <Grid item xs={7}>

                        </Grid>

                        <Grid item xs={4} sx={{ marginY: 0.2 }} >
                            <TextField size='small' id="outlined-basic" label="Date" />
                        </Grid>
                        <Grid item xs={4} sx={{ marginY: 0.2 }} >
                            <TextField size='small' id="outlined-basic" label="Time" />
                        </Grid>
                        <Grid item xs={4} sx={{ marginY: 0.2 }}>
                        </Grid>
                        <Grid item xs={8} sx={{ marginY: 0.2 }}>
                            <TextField size='small' sx={{ width: '100%' }} id="outlined-basic" label="Amount *" />
                        </Grid>
                        <Grid item xs={4} sx={{ marginY: 0.2 }} >
                            <Box sx={{ width: '100%' }}>
                                <FormControl fullWidth size='small'>
                                    <InputLabel id="demo-simple-select-label">Category</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="Category"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Ten</MenuItem>
                                        <MenuItem value={20}>Twenty</MenuItem>
                                        <MenuItem value={30}>Thirty</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                        <Grid item xs={12} sx={{ marginY: 0.2 }}>
                            <TextField size='small' sx={{ width: '100%' }} id="outlined-basic" label="Remark" />
                        </Grid>
                        <Grid item xs={4} sx={{ marginY: 0.2 }} >
                            <Box sx={{ width: '100%' }}>
                                <FormControl fullWidth size='small'>
                                    <InputLabel id="demo-simple-select-label">Payment Mode</InputLabel>
                                    <Select
                                        labelId="demo-simple-select-label"
                                        id="demo-simple-select"
                                        value={category}
                                        label="Category"
                                        onChange={handleChange}
                                    >
                                        <MenuItem value={10}>Cash</MenuItem>
                                        <MenuItem value={20}>Credit</MenuItem>
                                        <MenuItem value={30}>Something</MenuItem>
                                    </Select>
                                </FormControl>
                            </Box>
                        </Grid>
                    </Grid>
                </DialogContent>
                <DialogActions sx={{ marginX: 7 }}>
                    <Button autoFocus variant='outlined' sx={{ minWidth: 100 }} onClick={handleClose}>
                        Save
                    </Button>
                    <Button autoFocus variant='contained' onClick={handleClose}>
                        Save & New
                    </Button>
                </DialogActions>
            </BootstrapDialog>
        </div>
    );
}