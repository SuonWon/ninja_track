import { Button, FormControl, IconButton, InputLabel, MenuItem, Paper, Select, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from "@mui/material";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import SettingsIcon from '@mui/icons-material/Settings';
import CashInOutCard from "../pages/CashInOutCard";
import { useEffect, useMemo, useState } from "react";
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import { BiSearchAlt2 } from "react-icons/bi";
import AddCashInOut from "../components/addCashInOut"
import { Link } from "react-router-dom";
import axios from "axios";
import dayjs from "dayjs";
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import DeleteDialog from '../components/deleteDialog';

function Home() {

    const [open, setOpen] = useState(false);
    const [deleteDiaOpen, setDeleteDiaOpen] = useState(false);
    const [title, setTitle] = useState("Add Cash Out");
    const [selectCashType, setSelectCashType] = useState("");
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [id, setId] = useState(null)
    const [isEdit, setIsEdit] = useState(false)
    const [cashInOutDetail, setCashInOutDetail] = useState({});

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
    const fetchDataList = async () => {
        
        axios.get('http://localhost:4000/api/transaction/')
        .then(response => {
            setData(response.data);
            setLoading(false);
        })
    };

    //! Fetch the Cash In Out Detail
    const getDetail = (id) => {
        if(!id) return
        axios.get(`http://localhost:4000/api/transaction/${id}`)
        .then((response) => setCashInOutDetail(response.data))
        .catch(error => { console.log('Error:', error); });
        setId(null)
    }

    console.log("Hello");

    console.log(cashInOutDetail);

    useEffect(() => {
        fetchDataList()
    }, [])

    if (loading) return <div>Loading ...</div>
    if (error) return <div>Error: {error.message}</div>

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
                    <CashInOutCard total_cashIn={total_cashIn} total_cashOut={total_cashOut} />
                </div>
                <div className="mb-4 p-0 mt-3 flex space-x-3 justify-between">
                    {/* <div className="flex space-x-3">
                        <div>
                            <FormControl sx={{ minWidth: 200 }} size="small">
                                <InputLabel>Duration</InputLabel>
                                <Select

                                    label="categories"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ minWidth: 200 }} size="small">
                                <InputLabel>Categories</InputLabel>
                                <Select
                                    label="categories"
                                >
                                    <MenuItem value="">
                                        <em>None</em>
                                    </MenuItem>
                                    <MenuItem value={10}>Ten</MenuItem>
                                    <MenuItem value={20}>Twenty</MenuItem>
                                    <MenuItem value={30}>Thirty</MenuItem>
                                </Select>
                            </FormControl>
                        </div>
                        <div>
                            <FormControl sx={{ width: '280px' }} variant="outlined">
                                <OutlinedInput
                                    id="outlined-adornment-weight"
                                    endAdornment={
                                        <InputAdornment position="end">
                                            <Button className="!rounded-xl" sx={{ width: '35px', height: '35px' }}>
                                                <BiSearchAlt2 className="cursor-pointer w-[20px] h-[20px]" />
                                            </Button>
                                        </InputAdornment>}
                                    aria-describedby="outlined-weight-helper-text"
                                    size="small"
                                    className="!pt-0"
                                    inputProps={{
                                        'aria-label': 'Search with Remark...',
                                    }}
                                />
                            </FormControl>
                        </div>
                    </div> */}
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
                            cashInOutDetail={cashInOutDetail}
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
                                    <TableCell align="left" className="!text-gray-400 py-2">
                                        Amount
                                    </TableCell>
                                    <TableCell align="center" className="!text-gray-400 py-2">
                                        Balance
                                    </TableCell>
                                    <TableCell align="right" className="py-2"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    data ?
                                        data.map((data, index) =>
                                            <TableRow
                                                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                                                key={index}
                                            >
                                                <TableCell align="left" sx={{ minWidth: 130 }} className="!py-1 !text-gray-500">
                                                    {dayjs(data.datetime).format("DD MMM, YYYY")}<br />
                                                    <span style={{ 'fontSize': '12px' }} className="text-muted">
                                                        {dayjs(data.datetime).format("HH:mm A")}
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
                                                <TableCell align="left" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">
                                                    {data.amount}
                                                </TableCell>
                                                <TableCell align="center" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">
                                                    50,000
                                                </TableCell>
                                                <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1">
                                                    <Tooltip title="Edit">
                                                        <IconButton onClick={() => {
                                                            setIsEdit(true)
                                                            setOpen(!open)
                                                            getDetail(data._id)
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

                    <DeleteDialog 
                        deleteDiaOpen={deleteDiaOpen} 
                        setDeleteDiaOpen={setDeleteDiaOpen} 
                        fetchDataList={fetchDataList} 
                        id={id} 
                        setId={setId} 
                    />
                </div>
            </div>
        </div>
    );
}

export default Home;