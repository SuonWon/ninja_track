import { Button, IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography, FormControl, InputLabel, Select, MenuItem, OutlinedInput, InputAdornment } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SettingsIcon from '@mui/icons-material/Settings';
import CashInOutCard from "../pages/CashInOutCard";
import { useEffect, useState } from "react";
import AddCashInOut from "../components/addCashInOut"
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteDialog from '../components/DeleteDialog';
import EditCashInOut from "../components/EditCashInOut";
import { baseUrl } from "../constant";
import localforage from "localforage";
import SearchIcon from '@mui/icons-material/Search';
import { Grid } from  'react-loader-spinner'
import moment from 'moment';
function Home() {

    const [open, setOpen] = useState(false);
    const [deleteDiaOpen, setDeleteDiaOpen] = useState(false);
    const [editDiaOpen, setEditDiaOpen] = useState(false);
    const [title, setTitle] = useState("Add Cash Out");
    const [selectCashType, setSelectCashType] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [id, setId] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [formData, setFormData] = useState({
        duration: 'AllTime',
        category: 'All',
        remark: '',
    })
    const [categoryList, setCategoryList] = useState([]);
    const [paymentModeList, setPaymentModeList] = useState([])
    const [user, setUser] = useState({});

    //! total cash in, total cash out & total net amount
    let total_cashIn = 0;
    let total_cashOut = 0;

    data && data.map((item) => {
        if (item.cashType === "DEBIT") {
            total_cashIn += item.amount;

        } else {
            total_cashOut += item.amount;
        }
    })

    //!Fetch The Traction list
    const fetchDataList = async (isNew = true, category = "All", duration = "AllTime", remark = '') => {

        let userData = ""; let cat , paymentMode = [];
        if(isNew) {
            const user = await localforage.getItem('data');
            const category = await fetch(baseUrl + '/category?user=' + user._id);
    
            const mode = await fetch(baseUrl + '/payment-mode?user=' + user._id);
    
            const categoryData = await category.json();
            const modeData = await mode.json();
    
            setCategoryList(categoryData);
            setUser(user);
            setPaymentModeList(modeData);

            userData = user
            cat = categoryData;
            paymentMode = modeData;
        }
        userData = isNew ? userData : user;
        cat = isNew ? cat : categoryList;
        paymentMode = isNew ? paymentMode : paymentModeList;

        console.log(duration);

        let transactionUrl = baseUrl + '/transaction?user=' + userData._id;
        if(category != "All") {
            transactionUrl += '&category=' + category;
        }
        if(duration != "AllTime") {
            transactionUrl += '&duration=' +duration;
        }
        if(remark != '') {
            transactionUrl += '&remark=' + remark;
        }

        axios.get(transactionUrl)
        .then(response => {
            const data = [];
            response.data.map(rec => {
                data.push({
                    ...rec,
                    category: cat.find(cat => cat._id == rec.category)?.category,
                    paymentMode: paymentMode.find(mode => mode._id == rec.paymentMode)?.mode
                })
            })
            console.log(data);
            setData(data);
            setLoading(false);
        })
    };

    useEffect(() => {
        fetchDataList()
    }, [])

    // if (loading) return <div>Loading ...</div>

    return (
        <div className="lg:container mx-auto mt-3">
            <div className="mx-3">
                <div className="flex justify-between border-b-[1px] py-2 border-gray-400">
                    <Typography className="text-gray-600" fontSize={25}>
                        Cash In/Out Record
                    </Typography>
                    <Link ripple="true" className="!rounded-xl" to="/Setting/Category">
                        <SettingsIcon className="text-gray-600 cursor-pointer" fontSize="large" />
                    </Link>
                </div>
                <div className="mt-7">
                    <CashInOutCard total_cashIn={total_cashIn}  total_cashOut={total_cashOut} />
                </div>
                <div className="mb-4 p-0 mt-3 flex space-x-3 justify-between">
                    <div className="flex space-x-3">
                        <div>
                            <FormControl sx={{ minWidth: 200 }} size="small">
                                <InputLabel>Duration</InputLabel>
                                <Select
                                    value={formData.duration}
                                    label="outlined"
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            duration: e.target.value
                                        })
                                        fetchDataList(false, formData.category, e.target.value, formData.remark)
                                    }}
                                >
                                    <MenuItem value="AllTime">
                                        All Time
                                    </MenuItem>
                                    <MenuItem value="Today">Today</MenuItem>
                                    <MenuItem value="Yesterday">Yesterday</MenuItem>
                                    <MenuItem value="ThisMonth">This Month</MenuItem>
                                    <MenuItem value="LastMonth">Last Month</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ minWidth: 200 }} size="small">
                                <InputLabel>Category</InputLabel>
                                <Select
                                    label="outlined"
                                    inputProps={{ 'aria-label': 'Without label' }}
                                    size='small'
                                    value={formData.category}
                                    onChange={(event) => {
                                        setFormData({
                                            ...formData,
                                            category: event.target.value
                                        });
                                        fetchDataList(false, event.target.value, formData.duration, formData.remark);
                                    }}
                                >
                                    <MenuItem value="All">
                                        All
                                    </MenuItem>
                                    {
                                        categoryList.length != 0 ? 
                                        categoryList.map((value, index) => {
                                            return (<MenuItem key={index} value={value._id}>{value.category}</MenuItem>)
                                        })
                                        :
                                        <MenuItem value=''>There is no data.</MenuItem>
                                    }
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ width: '280px' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            {/* <Button className="!rounded-xl"> */}
                                                <SearchIcon className="cursor-pointer rounded-xl m-4 hover:bg-gray-100" variant="outlined" onClick={() => {
                                                    fetchDataList(false, formData.category, formData.duration, formData.remark)
                                                }}/>
                                            {/* </Button> */}
                                        </InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    size="small"
                                    className="!pt-0"
                                    placeholder="Search by remark"
                                    inputProps={{
                                        'aria-label': 'Search with Remark...',
                                    }}
                                    onChange={(e) => {
                                        setFormData({
                                            ...formData,
                                            remark: e.target.value
                                        })
                                    }}
                                />
                            </FormControl>
                        </div>
                    </div>
                    <div className="flex space-x-1 xl:space-x-3 items-end justify-end min-w-[255px]">
                        <Button
                            variant="contained"
                            color="success"
                            className="!px-5"
                            onClick={() => {
                                setOpen(!open)
                                setTitle("Add Cash In")
                                setSelectCashType("DEBIT")
                            }}
                            sx={{ textTransform: 'none' }}
                            startIcon={<AddIcon />}
                        >
                            Cash In
                        </Button>
                        <AddCashInOut
                            open={open}
                            setOpen={setOpen}
                            title={title}
                            setTitle={setTitle}
                            setSelectCashType={setSelectCashType}
                            selectCashType={selectCashType}
                            fetchDataList={fetchDataList}
                            isEdit={isEdit}
                            setIsEdit={setIsEdit}
                        />

                        <Button
                            variant="contained"
                            color="error"
                            className="!px-5"
                            sx={{ textTransform: 'none' }}
                            startIcon={<RemoveIcon />}
                            onClick={() => {
                                setOpen(!open)
                                setTitle("Add Cash Out")
                                setSelectCashType("CREDIT")
                            }}
                        >
                            Cash Out
                        </Button>
                    </div>
                </div>

                <div>
                {
                    loading ? (
                        <Grid
                            height="40"
                            width="40"
                            color="#05396b"
                            ariaLabel="grid-loading"
                            radius="12.5"
                            visible={loading}
                            wrapperClass='grid grid-rows justify-center items-center'
                        />
                    ) : (
                            <TableContainer component={Paper} sx={{ minWidth: 960 }} >
                                <Table aria-label="simple table">
                                    <TableHead>
                                        <TableRow
                                            style={{ 'backgroundColor': '#f5f5f5', padding: 0 }}
                                        >
                                            <TableCell className="py-2 !text-gray-400">
                                                Date & Time
                                            </TableCell>
                                            <TableCell align="left" className="!text-gray-400 py-2">
                                                Remark
                                            </TableCell>
                                            <TableCell align="left" className="!text-gray-400 py-2">
                                                Category
                                            </TableCell>
                                            <TableCell align="left" className="!text-gray-400 py-2">
                                                Mode
                                            </TableCell>
                                            <TableCell align="center" className="!text-gray-400 py-2">
                                                Cash Type
                                            </TableCell>
                                            <TableCell align="right" className="!text-gray-400 py-2">
                                                Amount
                                            </TableCell>
                                            <TableCell align="right" className="py-2"></TableCell>
                                        </TableRow>
                                    </TableHead>
                                    
                                    <TableBody>
                                        {
                                            data.length != 0 ?
                                                data.map((data, index) =>{
                                                    const date = data.datetime.toString().split('T')[0];
                                                    const time = data.datetime.toString().split('T')[1].split('.')[0];
                                                    return (
                                                        <TableRow
                                                            sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                            key={index}
                                                        >
                                                            <TableCell align="left" sx={{ minWidth: 130 }} className="!py-1 !text-gray-500">
                                                                {moment(date).format('DD MMM YYYY')}<br />
                                                                <span style={{ 'fontSize': '12px' }} className="text-muted">
                                                                    {time}
                                                                </span>
                                                            </TableCell>
                                                            <TableCell align="left" sx={{ minWidth: 220 }} className=" !py-1 !text-gray-500">
                                                                {data.remark}
                                                            </TableCell>
                                                            <TableCell align="left" sx={{ minWidth: 150 }} className="!py-1 !text-gray-500">
                                                                {data.category}
                                                            </TableCell>
                                                            <TableCell align="left" sx={{ minWidth: 100 }} className="!py-2 !text-gray-500">
                                                                {data.paymentMode}
                                                            </TableCell>
                                                            <TableCell align="center" sx={{ minWidth: 120 }} className={`!py-1 ${data.cashType == "CREDIT" ? "!text-red-600" : "!text-green-700"}`}>
                                                                {data.cashType ==  "CREDIT" ? "Cash Out" : "Cash In"}
                                                            </TableCell>
                                                            <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">
                                                                {data.amount}
                                                            </TableCell>
                                                            <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1">
                                                                <Tooltip title="Edit">
                                                                    <IconButton onClick={() => {
                                                                        setEditDiaOpen(!editDiaOpen)
                                                                        setId(data._id)
                                                                    }}>
                                                                        <EditIcon style={{ cursor: 'pointer' }} className='text-info !w-[18px] !h-[18px] text-blue-600' />
                                                                    </IconButton>
                                                                </Tooltip>
                                                                <Tooltip title="Delete">
                                                                    <IconButton onClick={() => {
                                                                        setDeleteDiaOpen(!deleteDiaOpen)
                                                                        setId(data._id)
                                                                    }}>
                                                                        <DeleteIcon style={{ cursor: 'pointer' }} className='text-danger !w-[18px] !h-[18px] text-red-600' />
                                                                    </IconButton>
                                                                </Tooltip>
                                                            </TableCell>
                                                        </TableRow>
                                                    )}
                                                )
                                                :
                                                <TableRow
                                                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                    className=' !text-gray-400 h-[45px]'
                                                >
                                                    <TableCell
                                                        colSpan={7}
                                                        align='center'
                                                        className='!text-gray-400'
                                                    >
                                                        There is no Data
                                                    </TableCell>
                                                </TableRow>
                                        }
                                    </TableBody>
                                        
                                </Table>
                            </TableContainer>
                        )
                    }
                    <EditCashInOut
                        editDiaOpen={editDiaOpen}
                        setEditDiaOpen={setEditDiaOpen}
                        fetchDataList={fetchDataList}
                        id={id}
                    />

                    <DeleteDialog 
                        deleteDiaOpen={deleteDiaOpen} 
                        setDeleteDiaOpen={setDeleteDiaOpen} 
                        fetchDataList={fetchDataList} 
                        id={id} 
                        setId={setId} 
                        //modeList={master.mode.length == 0 ? master.mode : []}
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;