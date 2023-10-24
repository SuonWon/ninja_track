import Button from '@mui/material/Button';
import { styled } from '@mui/material/styles';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, MenuItem, Select, TextField } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useState } from 'react';
import { useForm } from 'react-hook-form';

const addCashInOut = ({ title, open, handleClick, setTitle }) => {
    const currentDate = dayjs(new Date().toLocaleDateString('en-GB'));
    const [cashInOutdate, setCashInOutDate] = useState(currentDate);
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    const onSubmit = ({ cash_in_out_date, amount, remark }) => {
        amount = amount.trim();
        remark = remark.trim();

        const data = { cash_in_out_date, amount, remark }

        console.log(data);

    }

    const BootstrapDialog = styled(Dialog)(({ theme }) => ({
        '& .MuiDialogContent-root': {
            padding: theme.spacing(2),
        },
        '& .MuiDialogActions-root': {
            padding: theme.spacing(1),
        },
    }));

    return (
        <div>
            <BootstrapDialog
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogTitle
                    sx={{ m: 0, p: 2 }}
                    className={title === "Add Cash In" ? "text-green-600" : "text-red-600"} id="customized-dialog-title">
                    {title}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                    onClick={handleClick}
                >
                    <CloseIcon />
                </IconButton>

                {/* Form Section */}
                <form noValidate autoComplete="off" onSubmit={handleSubmit(onSubmit)}>

                    {/* Dialog Content Section */}
                    <DialogContent dividers>
                        <div className='space-x-3'>
                            <Button
                                variant={title === "Add Cash In" ? "contained" : "outlined"}
                                className={
                                    title === "Add Cash In" ?
                                        "!capitalize !rounded-[50px] !bg-green-700"
                                        :
                                        "!capitalize !rounded-[50px] !bg-white !text-gray-600 !shadow-none !border-gray-400"
                                }
                                onClick={() => setTitle("Add Cash In")}
                            >
                                Cash In
                            </Button>
                            <Button variant={title === "Add Cash In" ? "outlined" : "contained"}
                                className={
                                    title === "Add Cash In" ?
                                        "!capitalize !rounded-[50px] !bg-white !text-gray-600 !shadow-none !border-gray-400"
                                        :
                                        "!capitalize !rounded-[50px] !bg-red-600"
                                }
                                onClick={() => setTitle("Add Cash Out")}
                            >
                                Cash Out
                            </Button>
                        </div>

                        {/* Form Input Data */} 
                        <div className='space-x-5 my-2'>
                            <FormControl sx={{ width: 160 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer
                                        components={[
                                            'DesktopDatePicker',
                                        ]}
                                        sx={{ padding: 0 }}
                                    >
                                        <div className="flex flex-col">
                                            <label htmlFor="" className='text-[13px] h-[18px]'>Date</label>
                                            <DesktopDatePicker
                                                slotProps={{ textField: { size: 'small' } }}
                                                defaultValue={dayjs(new Date().toLocaleDateString('en-GB'))}
                                                value={cashInOutdate}
                                                onChange={(newValue) => {
                                                    setCashInOutDate(newValue);
                                                }}

                                                renderInput={(params) =>
                                                    <TextField
                                                        {...params}
                                                        {...register("cash_in_out_date")}
                                                    />}
                                            />
                                        </div>
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>
                            <FormControl sx={{ width: 160 }}>
                                <LocalizationProvider dateAdapter={AdapterDayjs}>
                                    <DemoContainer
                                        components={[
                                            'DesktopDatePicker',
                                        ]}
                                        sx={{ padding: 0 }}
                                    >
                                        <div className="flex flex-col">
                                            <label htmlFor="" className='text-[13px] h-[18px]'>Time</label>
                                            <TimePicker slotProps={{ textField: { size: 'small' } }} defaultValue={dayjs(new Date())} />
                                        </div>
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>
                        </div>

                        <div className='space-x-1 sm:space-x-5 my-1'>
                            <FormControl sx={{ width: 340 }}>
                                <label htmlFor="" className='text-[13px]'>Amount <span className='text-red-600'>*</span></label>
                                <OutlinedInput size="small" {...register("amount", { required: true })} />
                            </FormControl>
                            <FormControl sx={{ width: 160 }}>
                                <label htmlFor="" className='text-[13px]'>Category</label>
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    size='small'
                                    
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='my-2'>
                            <FormControl sx={{ width: '100%' }}>
                                <label htmlFor="" className='text-[13px]'>Remark</label>
                                <OutlinedInput size="small" {...register("remark")} />
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ width: 160 }}>
                                <label htmlFor="" className='text-[13px]'>Payment Mode</label>
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    size='small'
                                >
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div className='text-gray-300 bg-green-600 mx-auto my-3 '>

                        </div>

                    </DialogContent>
                    <DialogActions>
                        <Button variant='outlined' type='submit' className='!capitalize w-[120px]'>
                            Save
                        </Button>
                        <Button variant='contained' type='submit' className='!capitalize'>
                            Save & New
                        </Button>
                    </DialogActions>
                </form>
            </BootstrapDialog>
        </div>
    )
}
export default addCashInOut;
