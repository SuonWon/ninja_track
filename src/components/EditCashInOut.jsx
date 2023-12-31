import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import DialogActions from '@mui/material/DialogActions';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { FormControl, MenuItem, Select } from '@mui/material';
import OutlinedInput from '@mui/material/OutlinedInput';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DesktopDatePicker } from '@mui/x-date-pickers';
import dayjs from 'dayjs';
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useEffect, useState } from 'react';
import axios from 'axios';
import { baseUrl } from '../constant';
import localforage from 'localforage';
import Snackbar from '@mui/material/Snackbar';
import Alert from '@mui/material/Alert';
import { Grid } from  'react-loader-spinner';
import moment from 'moment';
const EditCashInOut = ({ editDiaOpen, setEditDiaOpen, id, fetchDataList }) => {

    // How to user the fetching detail data and how to update with axios in react I request with id?
    const [selectDate, setSelectDate] = useState(dayjs(new Date()));
    const [selectTime, setSelectTime] = useState(dayjs(new Date()));
    const [categoryList, setCategoryList] = useState([]);
    const [paymentModeList, setPaymentModeList] = useState([]);
    const [formData, setFormData] = useState({
        datetime: '',
        remark: '',
        amount: '',
        paymentMode: '',
        cashType: '',
        category: ''
    })
    const [errors, setErrors] = useState({});
    const [user, setUser] = useState({});
    const [toastOpen, setToastOpen] = useState(false);
    const [message, setMessage] = useState('');
    const [msgType, setMsgType] = useState('success');
    const [isLoading, setIsLoading] = useState(false);

    function showAlert(message, type) {
        setMessage(message);
        setMsgType(type);

        setToastOpen(true);
        setTimeout(() => {
            setToastOpen(false);
        }, 3000)
    }

    useEffect(() => {
        masterData();
    }, [])

    //! Fetch the Category Data List
    const masterData = async () => {
        const curUser = await localforage.getItem('data');
        setUser(curUser);

        axios.get(baseUrl + '/category?user=' + curUser._id)
            .then((response) => setCategoryList(response.data))
            .catch(error => {
                console.log('Error:', error);
            });

        axios.get(baseUrl + '/payment-mode?user=' + curUser._id)
            .then((response) => setPaymentModeList(response.data))
            .catch(error => {
                console.log('Error', error);
            })
    }

    useEffect(() => {
        const fetchData = async () => {
            if (!id) return;
            try {
                const response = await axios.get(`${baseUrl}/transaction/${id}`)
                setFormData(response.data);
                setSelectDate(dayjs(response.data.datetime))
                setSelectTime(dayjs(response.data.datetime))
            } catch (error) {
                console.log(error);
            }
        }

        fetchData();
    }, [id])


    //! Format Date & Time
    const date = dayjs(selectDate).format('YYYY-MM-DDT');
    const time = dayjs(selectTime).format('HH:mm:ss');

    const validateForm = () => {
        let errors = {};
        if (!formData.amount) {
            errors.amountError = "Amount is required";

        } else if (isNaN(Number(formData.amount))) {
            errors.amountError = "Invalid Amount"

        } else if (!formData.category) {
            errors.categoryError = 'Please Select a Category'

        } else if (!formData.paymentMode) {
            errors.paymentModeError = 'Please Select Cash Type';
        }

        setErrors(errors)

        return Object.keys(errors).length > 0 ? false : true;
    };

    //! Reset Form Data
    const resetFormData = () => {
        setFormData({
            datetime: '',
            amount: '',
            remark: '',
            paymentMode: '',
            cashType: '',
            category: ''
        })
        setErrors({
            amountError: '',
            paymentModeError: '',
            categoryError: ''
        })
        setSelectDate(dayjs(new Date()))
        setSelectTime(dayjs(new Date()))
    }

    //! Submit Form 
    const handleSubmit = () => {
        if (validateForm()) {
            setIsLoading(true);
            const updateDate = dayjs(selectDate).format('YYYY-MM-DDT') + dayjs(selectTime).format('HH:mm:ss');
            axios.put(`${baseUrl}/transaction/edit/${id}`,
                {
                    ...formData,
                    amount: String(formData.amount),
                    datetime: moment.utc(moment(updateDate).toISOString())
                })
                .then((response) => {
                    console.log('Data update successfully')
                    showAlert(response.data.message, 'success');
                    resetFormData();
                    fetchDataList()
                    setIsLoading(false);
                })
                .catch(error => {
                    console.log('Error:', error);
                    setIsLoading(false);
                });

            setEditDiaOpen(!editDiaOpen)
        }
    }


    return (
        <div>
            <Dialog
                aria-labelledby="customized-dialog-title"
                open={editDiaOpen}
            >
                <DialogTitle
                    sx={{ m: 0, p: 2 }}
                    className={
                        formData.cashType === "DEBIT" ? "text-green-600" : "text-red-600"
                    }
                    id="customized-dialog-title"
                >
                    {formData.cashType === "DEBIT" ? "Edit Cash In" : "Edit Cash Out"}
                </DialogTitle>
                <IconButton
                    aria-label="close"
                    sx={{
                        position: 'absolute',
                        right: 8,
                        top: 8,
                        color: (theme) => theme.palette.grey[500],
                    }}
                    onClick={() => {
                        setEditDiaOpen(!editDiaOpen);
                        resetFormData();
                    }}
                >
                    <CloseIcon />
                </IconButton>

                {/* Form Section */}
                <form autoComplete="off">

                    {/* Dialog Content Section */}
                    <DialogContent dividers>
                        <div className='space-x-3'>
                            <Button
                                variant={
                                    formData.cashType === "DEBIT" ? "contained" : "outlined"
                                }
                                className={
                                    formData.cashType === "DEBIT" ?
                                        "!capitalize !rounded-[50px] !bg-green-700"
                                        :
                                        "!capitalize !rounded-[50px] !bg-white !text-gray-600 !shadow-none !border-gray-400"
                                }
                                onClick={() => {
                                    setFormData({ ...formData, cashType: "DEBIT" })
                                }}
                            >
                                Cash In
                            </Button>
                            <Button variant={formData.cashType === "DEBIT" ? "outlined" : "contained"}
                                className={
                                    formData.cashType === "DEBIT" ?
                                        "!capitalize !rounded-[50px] !bg-white !text-gray-600 !shadow-none !border-gray-400"
                                        :
                                        "!capitalize !rounded-[50px] !bg-red-600"
                                }
                                onClick={() => {
                                    setFormData({ ...formData, cashType: "CREDIT" })
                                }}
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
                                                defaultValue={selectDate}
                                                value={selectDate}
                                                onChange={(newValue) => setSelectDate(newValue)}
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
                                            <TimePicker
                                                slotProps={{ textField: { size: 'small' } }}
                                                defaultValue={selectTime}
                                                value={selectTime}
                                                onChange={(newValue) => setSelectTime(newValue)}
                                            />
                                        </div>
                                    </DemoContainer>
                                </LocalizationProvider>
                            </FormControl>
                        </div>

                        <div className='space-x-1 sm:space-x-5 my-1'>
                            <FormControl sx={{ width: 340 }}>
                                <label htmlFor="" className='text-[13px]'>Amount <span className='text-red-600'>*</span></label>
                                <OutlinedInput size="small"
                                    value={formData.amount}
                                    onChange={(event) => setFormData({
                                        ...formData,
                                        amount: event.target.value
                                    })}
                                />
                                {
                                    errors.amountError && (
                                        <p className='text-xs text-red-800'>{errors.amountError}</p>
                                    )
                                }
                            </FormControl>

                            <FormControl sx={{ width: 160 }}>
                                <label htmlFor="" className='text-[13px]'>Category <span className='text-red-600'>*</span></label>
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    size='small'
                                    value={formData.category}
                                    onChange={(event) => setFormData({
                                        ...formData,
                                        category: event.target.value
                                    })}
                                >
                                    {
                                        categoryList.length != 0 ?
                                            categoryList.map((value, index) => {
                                                return (<MenuItem key={index} value={value._id}>{value.category}</MenuItem>)
                                            })
                                            :
                                            <MenuItem value={null} disabled>There is no data.</MenuItem>
                                    }
                                </Select>
                                {
                                    errors.categoryError && (
                                        <p className='text-xs text-red-800'>{errors.categoryError}</p>
                                    )
                                }
                            </FormControl>
                        </div>

                        <div className='my-2'>
                            <FormControl sx={{ width: '100%' }}>
                                <label htmlFor="" className='text-[13px]'>Remark</label>
                                <OutlinedInput size="small"
                                    value={formData.remark}
                                    onChange={(event) => setFormData({
                                        ...formData,
                                        remark: event.target.value
                                    })}
                                />
                            </FormControl>
                        </div>

                        <div>
                            <FormControl sx={{ width: 160 }}>
                                <label htmlFor="" className='text-[13px]'>Payment Mode <span className='text-red-600'>*</span></label>
                                <Select
                                    displayEmpty
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    size='small'
                                    value={formData.paymentMode}
                                    onChange={(event) => setFormData({
                                        ...formData,
                                        paymentMode: event.target.value
                                    })}
                                >
                                    {
                                        paymentModeList.length != 0 ?
                                            paymentModeList.map((value, index) => (
                                                <MenuItem key={index} value={value._id}>{value.mode}</MenuItem>
                                            ))
                                            :
                                            <MenuItem value={null} disabled>There is no data.</MenuItem>
                                    }
                                </Select>
                                {
                                    errors.paymentModeError && (
                                        <p className='text-xs text-red-800'>{errors.paymentModeError}</p>
                                    )
                                }
                            </FormControl>
                        </div>
                    </DialogContent>

                    <DialogActions>
                        <Button
                            variant='contained'
                            onClick={() => {
                                handleSubmit()
                            }}
                            className='!capitalize'
                        >
                            <Grid
                                height="20"
                                width="20"
                                color="#ffffff"
                                ariaLabel="grid-loading"
                                radius="12.5"
                                visible={isLoading}
                                wrapperClass="mr-1"
                            />
                            Update
                        </Button>
                    </DialogActions>
                </form>
            </Dialog>
            <Snackbar
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                open={toastOpen}
            >
                <Alert severity={msgType} className='w-[300px]'>{message}</Alert>
            </Snackbar>
        </div>
    )
}
export default EditCashInOut;
