// import { IconButton, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Tooltip, Typography } from '@mui/material'
// import EditIcon from '@mui/icons-material/Edit';
// import DeleteIcon from '@mui/icons-material/Delete';
// import { useEffect, useState } from 'react';
// import axios from 'axios';
// import dayjs from 'dayjs';
// import DeleteDialog from '../components/deleteDialog';
// import AddCashInOut from "../components/addCashInOut"

// const ListCashInOutRecord = ({data, setData}) => {

//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);
//     const [open, setOpen] = useState(false);
//     const [deleteDiaOpen, setDeleteDiaOpen] = useState(false);
//     const [title, setTitle] = useState("Add Cash Out");
//     const [selectCashType, setSelectCashType] = useState("");
//     const [edit_transaction, setEdit_transaction] = useState({})

//     //!Fetch The Traction list
//     useEffect(() => {
//         axios.get('http://localhost:4000/api/transaction/')
//             .then(response => {
//                 setData(response.data);
//                 setLoading(false);
//             })
//             .catch(error => {
//                 setError(error);
//                 setLoading(false);
//             });
//     }, []);

//     const editTransaction = (id) => {
//         console.log(typeof(id));
//         console.log(id);
//         axios.get(`http://localhost:4000/api/transaction/${id}`)
//         .then((response)=> setEdit_transaction(response.data))
//         .catch(error => {console.log('Error:', error);});

//         if (edit_transaction.cashType === 'DEBIT'){
//             setTitle('Add Cash In');
//             setSelectCashType("DEBIT")
//         }else{
//             setTitle('Add Cash Out')
//             setSelectCashType("CREDIT")
//         }

//         setOpen(!open);
//     }

//     console.log(edit_transaction);

//     // console.log(data);

//     if (loading) return <div>Loading ...</div>
//     if (error) return <div>Error: {error.message}</div>

//     return (
//         <>
//             {/* <TableContainer component={Paper} sx={{ minWidth: 960 }} >
//                 <Table aria-label="simple table">
//                     <TableHead>
//                         <TableRow
//                             style={{ 'backgroundColor': '#f5f5f5', padding: 0 }}
//                         >
//                             <TableCell className="py-2 !text-gray-400">
//                                 Date & Time
//                             </TableCell>
//                             <TableCell align="left" className="!text-gray-400 py-2">
//                                 Remark
//                             </TableCell>
//                             <TableCell align="left" className="!text-gray-400 py-2">
//                                 Category
//                             </TableCell>
//                             <TableCell align="left" className="!text-gray-400 py-2">
//                                 Mode
//                             </TableCell>
//                             <TableCell align="left" className="!text-gray-400 py-2">
//                                 Amount
//                             </TableCell>
//                             <TableCell align="center" className="!text-gray-400 py-2">
//                                 Balance
//                             </TableCell>
//                             <TableCell align="right" className="py-2"></TableCell>
//                         </TableRow>
//                     </TableHead>
//                     <TableBody>
//                         {
//                             data ?
//                             data.map((data, index) =>
//                                 <TableRow
//                                     sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                                     key={index}
//                                 >
//                                     <TableCell align="left" sx={{ minWidth: 130 }} className="!py-1 !text-gray-500">
//                                         {dayjs(data.datetime).format("DD MMM, YYYY")}<br />
//                                         <span style={{ 'fontSize': '12px' }} className="text-muted">
//                                             {dayjs(data.datetime).format("HH:mm A")}
//                                         </span>
//                                     </TableCell>
//                                     <TableCell align="left" sx={{ minWidth: 220 }} className=" !py-1 !text-gray-500">
//                                         {data.remark}
//                                     </TableCell>
//                                     <TableCell align="left" sx={{ minWidth: 150 }} className="!py-1 !text-gray-500">
//                                         {data.category}
//                                     </TableCell>
//                                     <TableCell align="left" sx={{ minWidth: 100 }} className="!py-2 !text-gray-500">
//                                         {data.paymentMode}
//                                     </TableCell>
//                                     <TableCell align="left" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">
//                                         {data.amount}
//                                     </TableCell>
//                                     <TableCell align="center" sx={{ minWidth: 120 }} className="!py-1 !text-gray-500">
//                                         50,000
//                                     </TableCell>
//                                     <TableCell align="right" sx={{ minWidth: 120 }} className="!py-1">
//                                         <Tooltip title="Edit">
//                                             <IconButton onClick={() => editTransaction(data._id)}>
//                                                 <EditIcon style={{ cursor: 'pointer' }} className='text-info !w-[18px] !h-[18px] text-blue-600' />
//                                             </IconButton>
//                                         </Tooltip>
//                                         <Tooltip title="Delete">
//                                             <IconButton onClick={() => {
//                                                 setDeleteDiaOpen(!deleteDiaOpen)
//                                             }}>
//                                                 <DeleteIcon style={{ cursor: 'pointer' }} className='text-danger !w-[18px] !h-[18px] text-red-600' />
//                                             </IconButton>
//                                         </Tooltip>
//                                     </TableCell>
//                                 </TableRow>
//                             )
//                             :
//                             <TableRow
//                                 sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
//                                 className=' !text-gray-400 h-[45px]'
//                             >
//                                 <TableCell
//                                     colSpan={7}
//                                     align='center'
//                                     className='!text-gray-400'
//                                 >
//                                     There is no Data
//                                 </TableCell>
//                             </TableRow>
//                         }
//                         <AddCashInOut 
//                             open={open} 
//                             setOpen={setOpen}
//                             title={title} 
//                             setTitle={setTitle} 
//                             setSelectCashType={setSelectCashType} 
//                             selectCashType={selectCashType} 
//                             edit_transaction={edit_transaction}
//                             setEdit_transaction={setEdit_transaction}
//                         />
//                         <DeleteDialog open={open} setOpen={setOpen} />
//                     </TableBody>
//                 </Table>
//             </TableContainer> */}
//         </>
//     )
// }

// export default ListCashInOutRecord;
